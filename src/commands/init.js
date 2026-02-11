/**
 * Init Command - Project Initialization
 * Creates new B-Labs project with interactive prompts
 */

import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { generateProject } from '../generators/project-generator.js';
import { generateCSS } from '../generators/css-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Get available project templates from templates/projects folder
 */
async function getAvailableTemplates() {
  const templatesDir = path.resolve(__dirname, '../../templates/projects');
  
  if (!await fs.pathExists(templatesDir)) {
    return [];
  }
  
  const dirs = await fs.readdir(templatesDir);
  const templates = [];
  
  for (const dir of dirs) {
    const templatePath = path.join(templatesDir, dir);
    const configPath = path.join(templatePath, 'config.json');
    
    if (await fs.pathExists(configPath)) {
      const config = await fs.readJSON(configPath);
      templates.push({
        id: dir,
        name: config.name,
        description: config.description,
        preview: config.preview,
        path: templatePath,
        config: config
      });
    }
  }
  
  return templates;
}

/**
 * Run template wizard - ask customization questions
 */
async function runTemplateWizard(template) {
  const { config } = template;
  const answers = {};
  
  console.log(chalk.cyan.bold(`\n✨ ${config.name} - Özelleştirme\n`));
  
  // Ask placeholder questions
  if (config.placeholders) {
    for (const [key, placeholder] of Object.entries(config.placeholders)) {
      if (placeholder.optional) {
        const { shouldAsk } = await inquirer.prompt([{
          type: 'confirm',
          name: 'shouldAsk',
          message: `${placeholder.question} eklemek ister misiniz?`,
          default: false
        }]);
        
        if (!shouldAsk) {
          answers[key] = placeholder.default;
          continue;
        }
      }
      
      const answer = await inquirer.prompt([{
        type: 'input',
        name: 'value',
        message: placeholder.question,
        default: placeholder.default
      }]);
      
      answers[key] = answer.value;
    }
  }
  
  // Ask color scheme
  if (config.colorSchemes) {
    const colorChoices = Object.entries(config.colorSchemes).map(([id, scheme]) => ({
      name: `${scheme.name} - ${chalk.gray(scheme.description)}`,
      value: id
    }));
    
    const { colorScheme } = await inquirer.prompt([{
      type: 'list',
      name: 'colorScheme',
      message: '🎨 Renk şeması seçin:',
      choices: colorChoices
    }]);
    
    // Add color values to answers
    const selectedScheme = config.colorSchemes[colorScheme];
    Object.assign(answers, selectedScheme.values);
  }
  
  return answers;
}

/**
 * Replace placeholders in content
 */
function replacePlaceholders(content, answers) {
  let result = content;
  
  for (const [key, value] of Object.entries(answers)) {
    const placeholder = `{{${key}}}`;
    result = result.replace(new RegExp(placeholder, 'g'), value);
  }
  
  return result;
}

/**
 * Copy template and replace placeholders
 */
async function applyTemplate(templateInfo, projectPath, answers) {
  const { path: templatePath, config } = templateInfo;
  
  // Copy all files from template
  for (const file of config.files) {
    const sourcePath = path.join(templatePath, file);
    const destPath = path.join(projectPath, file);
    
    if (await fs.pathExists(sourcePath)) {
      let content = await fs.readFile(sourcePath, 'utf-8');
      content = replacePlaceholders(content, answers);
      
      await fs.ensureDir(path.dirname(destPath));
      await fs.writeFile(destPath, content);
    }
  }
}

export async function initCommand() {
  // Beautiful banner
  console.log(chalk.cyan.bold('\n╔════════════════════════════════════╗'));
  console.log(chalk.cyan.bold('║                                    ║'));
  console.log(chalk.cyan.bold('║  ') + chalk.white.bold('🚀 B-Labs v2.0.0') + chalk.cyan.bold('             ║'));
  console.log(chalk.cyan.bold('║  ') + chalk.gray('WordPress-like Templates!') + chalk.cyan.bold('    ║'));
  console.log(chalk.cyan.bold('║                                    ║'));
  console.log(chalk.cyan.bold('╚════════════════════════════════════╝\n'));
  console.log(chalk.green('✨ Let\'s build something amazing!\n'));

  try {
    // Get available templates
    const availableTemplates = await getAvailableTemplates();
    
    // Interactive prompts
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Proje adı:',
        default: 'my-project',
        validate: (input) => {
          if (input.length < 1) return 'Proje adı gerekli';
          if (!/^[a-z0-9-_]+$/i.test(input)) return 'Sadece harf, rakam, tire ve alt çizgi kullanılabilir';
          return true;
        }
      }
    ]);
    
    // Template selection
    let selectedTemplate = null;
    let useBlankTemplate = false;
    
    if (availableTemplates.length > 0) {
      const templateChoices = [
        { name: chalk.gray('🎯 Boş Proje - Sıfırdan başla'), value: 'blank' },
        ...availableTemplates.map(t => ({
          name: `${t.preview}\n   ${chalk.gray(t.description)}`,
          value: t.id
        }))
      ];
      
      const { templateChoice } = await inquirer.prompt([{
        type: 'list',
        name: 'templateChoice',
        message: '📦 Template seçin:',
        choices: templateChoices,
        pageSize: 10
      }]);
      
      if (templateChoice === 'blank') {
        useBlankTemplate = true;
      } else {
        selectedTemplate = availableTemplates.find(t => t.id === templateChoice);
      }
    } else {
      useBlankTemplate = true;
      console.log(chalk.yellow('\n⚠️  Hazır template bulunamadı, boş proje oluşturuluyor...\n'));
    }
    
    // If using blank template, ask CSS type
    if (useBlankTemplate) {
      const { cssType } = await inquirer.prompt([{
        type: 'list',
        name: 'cssType',
        message: 'CSS tipi:',
        choices: [
          { name: '🎨 Utility - Tailwind-benzeri utility class\'lar', value: 'utility' },
          { name: '📝 Classic - Geleneksel CSS yapısı', value: 'classic' }
        ],
        default: 'utility'
      }]);
      
      answers.cssType = cssType;
      answers.template = 'blank';
    }
    
    // Continue with other questions
    const moreAnswers = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'darkMode',
        message: 'Dark mode desteği?',
        default: true
      },
      {
        type: 'confirm',
        name: 'createAssets',
        message: 'Assets klasörleri oluşturulsun mu? (images, fonts)',
        default: true
      }
    ]);
    
    Object.assign(answers, moreAnswers);
    
    // Run template wizard if template selected
    let templateAnswers = {};
    if (selectedTemplate) {
      templateAnswers = await runTemplateWizard(selectedTemplate);
      templateAnswers.PROJECT_NAME = answers.projectName;
    }
    
    // Create project with beautiful spinners
    const spinner = ora({ text: chalk.cyan('🔨 Proje yapısı oluşturuluyor...'), color: 'cyan' }).start();
    
    // Create on Desktop by default
    const desktopPath = path.join(os.homedir(), 'Desktop');
    const projectPath = path.join(desktopPath, answers.projectName);
    
    // Check if directory exists
    if (await fs.pathExists(projectPath)) {
      spinner.fail(chalk.red(`❌ "${answers.projectName}" klasörü zaten var!`));
      return;
    }
    
    // Generate project structure
    if (useBlankTemplate) {
      await generateProject(projectPath, answers);
    } else {
      // Create basic structure for template
      await fs.ensureDir(projectPath);
      await fs.ensureDir(path.join(projectPath, 'css'));
      await fs.ensureDir(path.join(projectPath, 'js'));
      
      if (answers.createAssets) {
        await fs.ensureDir(path.join(projectPath, 'images'));
        await fs.ensureDir(path.join(projectPath, 'fonts'));
      }
      
      // Copy B-Labs CSS and JS
      const blabsCSSPath = path.resolve(__dirname, '../../templates/css/blabs.css');
      const blabsJSPath = path.resolve(__dirname, '../../templates/js/blabs.js');
      
      if (await fs.pathExists(blabsCSSPath)) {
        await fs.copy(blabsCSSPath, path.join(projectPath, 'css/blabs.css'));
      }
      
      if (await fs.pathExists(blabsJSPath)) {
        await fs.copy(blabsJSPath, path.join(projectPath, 'js/blabs.js'));
      }
      
      // Create empty main.css and main.js
      await fs.writeFile(path.join(projectPath, 'css/main.css'), '/* Your custom styles here */\n');
      await fs.writeFile(path.join(projectPath, 'js/main.js'), '// Your custom JavaScript here\n');
      
      // Apply template
      await applyTemplate(selectedTemplate, projectPath, templateAnswers);
      
      // Copy guide if exists
      const guidePath = path.resolve(__dirname, '../../templates/BLABS-GUIDE.md');
      if (await fs.pathExists(guidePath)) {
        await fs.copy(guidePath, path.join(projectPath, 'BLABS-GUIDE.md'));
      }
    }
    
    spinner.succeed(chalk.green('✔ Proje yapısı oluşturuldu!'));
    
    // Generate CSS for blank templates
    if (useBlankTemplate && answers.cssType === 'utility') {
      const cssSpinner = ora({ text: chalk.cyan('🎨 Utility CSS oluşturuluyor...'), color: 'cyan' }).start();
      await generateCSS(projectPath, answers);
      cssSpinner.succeed(chalk.green('✔ CSS utilities oluşturuldu (640+ class)!'));
    }

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
    console.log(chalk.green.bold('║  ') + chalk.white.bold('✨ Proje Başarıyla Oluşturuldu! ') + chalk.green.bold('  ║'));
    console.log(chalk.green.bold('╚════════════════════════════════════╝\n'));
    
    if (selectedTemplate) {
      console.log(chalk.cyan('📦 ') + chalk.white.bold(selectedTemplate.name) + chalk.gray(' template\'i kullanıldı'));
    }
    
    console.log(chalk.cyan.bold('\n📦 Sonraki adımlar:\n'));
    console.log(chalk.white('  📁 Proje yeri: ') + chalk.yellow(projectPath));
    console.log(chalk.white('  1. ') + chalk.gray('VS Code\'da projeyi açın (zaten açıldı ise devam edin)'));
    console.log(chalk.white('  2. ') + chalk.gray('index.html dosyasını tarayıcıda açın'));
    console.log(chalk.white('  3. ') + chalk.gray('veya Live Server eklentisini kullanın'));
    
    console.log(chalk.cyan('\n💡 İpuçları:'));
    console.log(chalk.gray('  • BLABS-GUIDE.md dosyasına bakın'));
    console.log(chalk.gray('  • 640+ utility class kullanabilirsiniz'));
    console.log(chalk.gray('  • Dark mode otomatik çalışır\n'));
    
    console.log(chalk.magenta('⭐ GitHub\'da yıldız verin: ') + chalk.underline('https://github.com/Barand1500/B-Labs\n'));

  } catch (error) {
    console.error(chalk.red('\n❌ Error:'), error.message);
    process.exit(1);
  }
}
