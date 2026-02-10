/**
 * Run Command - Development Server
 * Runs the development server based on project type
 */

import { spawn } from 'child_process';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

export async function runCommand() {
  const projectPath = process.cwd();
  const configPath = path.join(projectPath, 'blabs.config.js');

  // Check if in B-Labs project
  if (!await fs.pathExists(configPath)) {
    console.log(chalk.red('\n❌ Not a B-Labs project!'));
    console.log(chalk.gray('Run "blabs init" to create a new project\n'));
    return;
  }

  // Read config to determine project type
  const config = await import(`file://${configPath}`);
  const projectType = config.default?.projectType || 'html';

  if (projectType === 'react') {
    console.log(chalk.cyan('\n🚀 Starting development server...\n'));
    
    // Run npm run dev
    const npmProcess = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      shell: true,
      cwd: projectPath
    });

    npmProcess.on('error', (error) => {
      console.error(chalk.red('\n❌ Error:'), error.message);
      process.exit(1);
    });

  } else {
    console.log(chalk.yellow('\n📄 HTML Project Detected'));
    console.log(chalk.gray('\nFor HTML projects, use one of these methods:'));
    console.log(chalk.cyan('  • Open index.html in your browser'));
    console.log(chalk.cyan('  • Use Live Server extension in VS Code'));
    console.log(chalk.cyan('  • Use "npx serve ." for a local server\n'));
  }
}
