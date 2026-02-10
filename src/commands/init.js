/**
 * Init Command - Project Initialization
 * Creates new B-Labs project with interactive prompts
 */

import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { generateProject } from '../generators/project-generator.js';
import { generateCSS } from '../generators/css-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initCommand() {
  // Beautiful banner
  console.log(chalk.cyan.bold('\n╔════════════════════════════════════╗'));
  console.log(chalk.cyan.bold('║                                    ║'));
  console.log(chalk.cyan.bold('║  ') + chalk.white.bold('🚀 B-Labs v1.0.0') + chalk.cyan.bold('             ║'));
  console.log(chalk.cyan.bold('║  ') + chalk.gray('Modern Frontend Toolkit') + chalk.cyan.bold('       ║'));
  console.log(chalk.cyan.bold('║                                    ║'));
  console.log(chalk.cyan.bold('╚════════════════════════════════════╝\n'));
  console.log(chalk.green('✨ Let\'s build something amazing!\n'));

  try {
    // Interactive prompts
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name:',
        default: 'my-blabs-project',
        validate: (input) => {
          if (input.length < 1) return 'Project name is required';
          if (!/^[a-z0-9-_]+$/i.test(input)) return 'Only alphanumeric, dash and underscore allowed';
          return true;
        }
      },
      {
        type: 'list',
        name: 'projectType',
        message: 'Project type:',
        choices: [
          { name: '📄 HTML - Classic HTML/CSS/JS', value: 'html' },
          { name: '⚛️  React - Modern React project', value: 'react' }
        ],
        default: 'html'
      },
      {
        type: 'list',
        name: 'template',
        message: 'Choose a template:',
        choices: (answers) => {
          if (answers.projectType === 'html') {
            return [
              { name: '🎯 Blank - Empty project', value: 'blank' },
              { name: '📝 Blog - Modern blog site', value: 'blog' },
              { name: '💼 Portfolio - Personal portfolio', value: 'portfolio' },
              { name: '🚀 Landing Page - Product landing', value: 'landing' },
              { name: '🛍️ E-commerce - Online store', value: 'ecommerce' },
              { name: '📰 News - News/magazine site', value: 'news' },
              { name: '📊 Dashboard - Admin panel', value: 'dashboard' },
              { name: '💎 SaaS - SaaS landing page', value: 'saas' },
              { name: '🍕 Restaurant - Cafe/restaurant', value: 'restaurant' },
              { name: '🎨 Agency - Creative agency', value: 'agency' },
              { name: '📄 Resume - Professional CV', value: 'resume' },
              { name: '🎭 Event - Conference/event', value: 'event' },
              { name: '📸 Photography - Photo portfolio', value: 'photography' },
              { name: '🎵 Music - Band/artist page', value: 'music' },
              { name: '🏠 Real Estate - Property listing', value: 'realestate' },
              { name: '💪 Fitness - Gym/fitness', value: 'fitness' },
              { name: '🎓 Education - Online courses', value: 'education' }
            ];
          } else {
            return [
              { name: '🎯 Blank - Empty React app', value: 'blank' },
              { name: '📝 Blog - React blog', value: 'blog' },
              { name: '💼 Portfolio - React portfolio', value: 'portfolio' },
              { name: '📊 Dashboard - Admin dashboard', value: 'dashboard' }
            ];
          }
        },
        default: 'blank'
      },
      {
        type: 'list',
        name: 'cssType',
        message: 'CSS approach:',
        choices: [
          { name: '🎨 Utility - Tailwind-like utility classes', value: 'utility' },
          { name: '📝 Classic - Traditional CSS structure', value: 'classic' }
        ],
        default: 'utility',
        when: (answers) => answers.template === 'blank' // Only ask for blank templates
      },
      {
        type: 'confirm',
        name: 'darkMode',
        message: 'Enable dark mode support?',
        default: true
      },
      {
        type: 'confirm',
        name: 'createAssets',
        message: 'Create assets folders (images, fonts)?',
        default: true
      },
      {
        type: 'confirm',
        name: 'installDeps',
        message: 'Install dependencies automatically?',
        default: true,
        when: (answers) => answers.projectType === 'react'
      }
    ]);

    // Create project with beautiful spinners
    const spinner = ora({ text: chalk.cyan('🔨 Creating project structure...'), color: 'cyan' }).start();
    
    const projectPath = path.join(process.cwd(), answers.projectName);
    
    // Check if directory exists
    if (await fs.pathExists(projectPath)) {
      spinner.fail(chalk.red(`❌ Directory "${answers.projectName}" already exists!`));
      return;
    }

    // Generate project
    await generateProject(projectPath, answers);
    
    spinner.succeed(chalk.green('✔ Project structure created!'));

    // Generate CSS
    if (answers.cssType === 'utility') {
      const cssSpinner = ora({ text: chalk.cyan('🎨 Generating utility CSS...'), color: 'cyan' }).start();
      await generateCSS(projectPath, answers);
      cssSpinner.succeed(chalk.green('✔ CSS utilities generated (640+ classes)!'));
    }

    // Success message (removed old one, we'll add better one later)
    
    // Ask to open in VS Code
    const { openInVSCode } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'openInVSCode',
        message: 'Open project in VS Code?',
        default: true
      }
    ]);

    if (openInVSCode) {
      const vscodeSpinner = ora({ text: chalk.cyan('🚀 Opening in VS Code...'), color: 'cyan' }).start();
      
      // Open VS Code with the project folder
      const vscode = spawn('code', [projectPath], {
        stdio: 'ignore',
        shell: true,
        detached: true
      });

      vscode.on('error', (err) => {
        vscodeSpinner.fail(chalk.yellow('⚠️  Could not open VS Code. Make sure VS Code is installed and "code" command is available.'));
      });

      vscode.on('close', (code) => {
        if (code === 0) {
          vscodeSpinner.succeed(chalk.green('✔ Opened in VS Code!'));
        } else {
          vscodeSpinner.warn(chalk.yellow('⚠️  VS Code command exited with code ' + code));
        }
      });

      // Unref to allow the parent process to exit independently
      vscode.unref();
      
      // Give it a moment to start
      await new Promise(resolve => setTimeout(resolve, 500));
      vscodeSpinner.succeed(chalk.green('✔ Opening in VS Code...'));
    }
    
    // Success message box
    console.log(chalk.green.bold('\n╔════════════════════════════════════╗'));
    console.log(chalk.green.bold('║  ') + chalk.white.bold('✨ Project Created Successfully! ') + chalk.green.bold('║'));
    console.log(chalk.green.bold('╚════════════════════════════════════╝\n'));
    
    console.log(chalk.cyan.bold('📦 Next steps:\n'));
    console.log(chalk.white('  1. ') + chalk.gray(`cd ${answers.projectName}`));
    
    if (answers.projectType === 'react') {
      if (answers.installDeps) {
        console.log(chalk.white('  2. ') + chalk.gray('npm install ') + chalk.green('✓ (already done)'));
      } else {
        console.log(chalk.white('  2. ') + chalk.gray('npm install'));
      }
      console.log(chalk.white('  3. ') + chalk.gray('blabs run') + chalk.cyan(' # Start dev server'));
    } else {
      console.log(chalk.white('  2. ') + chalk.gray('Open index.html in your browser'));
      console.log(chalk.white('  3. ') + chalk.gray('or use Live Server extension in VS Code'));
    }
    
    console.log(chalk.cyan('\n💡 Tips:'));
    console.log(chalk.gray('  • Check README.md for full documentation'));
    console.log(chalk.gray('  • Edit blabs.config.js to customize'));
    console.log(chalk.gray('  • Explore templates at /templates\n'));
    
    console.log(chalk.magenta('⭐ Star us on GitHub: ') + chalk.underline('https://github.com/Barand1500/B-Labs\n'));

  } catch (error) {
    console.error(chalk.red('\n❌ Error:'), error.message);
    process.exit(1);
  }
}
