/**
 * Build Command - Production Build
 * Builds the project for production
 */

import { spawn } from 'child_process';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

export async function buildCommand() {
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
    console.log(chalk.cyan('\n📦 Building for production...\n'));
    
    // Run npm run build
    const npmProcess = spawn('npm', ['run', 'build'], {
      stdio: 'inherit',
      shell: true,
      cwd: projectPath
    });

    npmProcess.on('close', (code) => {
      if (code === 0) {
        console.log(chalk.green('\n✨ Build completed successfully!\n'));
      } else {
        console.error(chalk.red('\n❌ Build failed!\n'));
        process.exit(code);
      }
    });

    npmProcess.on('error', (error) => {
      console.error(chalk.red('\n❌ Error:'), error.message);
      process.exit(1);
    });

  } else {
    console.log(chalk.yellow('\n📄 HTML Project Detected'));
    console.log(chalk.gray('\nHTML projects are ready for production as-is.'));
    console.log(chalk.gray('Simply upload these files to your hosting:\n'));
    console.log(chalk.cyan('  • index.html'));
    console.log(chalk.cyan('  • css/'));
    console.log(chalk.cyan('  • js/'));
    console.log(chalk.cyan('  • images/ (if exists)\n'));
  }
}
