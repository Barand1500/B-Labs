#!/usr/bin/env node

/**
 * B-Labs CLI
 * Modern frontend development tool
 * 
 * Usage:
 *   npx blabs init    - Initialize new project
 *   blabs run         - Run development server
 *   blabs build       - Build for production
 */

import { program } from 'commander';
import chalk from 'chalk';
import { initCommand } from '../src/commands/init.js';
import { runCommand } from '../src/commands/run.js';
import { buildCommand } from '../src/commands/build.js';

// ASCII Logo
const logo = `
${chalk.blue('╔══════════════════════════════════╗')}
${chalk.blue('║')}   ${chalk.cyan.bold('B-Labs')} ${chalk.gray('v1.0.0')}              ${chalk.blue('║')}
${chalk.blue('║')}   ${chalk.gray('Modern Frontend Toolkit')}     ${chalk.blue('║')}
${chalk.blue('╚══════════════════════════════════╝')}
`;

// CLI Configuration
program
  .name('blabs')
  .description('Modern frontend development tool - Simple, powerful, and ready to use')
  .version('1.0.0');

// Init command
program
  .command('init')
  .description('Initialize a new B-Labs project')
  .action(async () => {
    console.log(logo);
    await initCommand();
  });

// Run command
program
  .command('run')
  .description('Start development server')
  .action(async () => {
    await runCommand();
  });

// Build command
program
  .command('build')
  .description('Build for production')
  .action(async () => {
    await buildCommand();
  });

// Default action (show help)
program.action(() => {
  console.log(logo);
  program.help();
});

program.parse();
