/**
 * B-Labs - Modern Frontend Development Toolkit
 * Main entry point
 */

export { initCommand } from './src/commands/init.js';
export { runCommand } from './src/commands/run.js';
export { buildCommand } from './src/commands/build.js';
export { generateCSS } from './src/generators/css-generator.js';
export { generateProject } from './src/generators/project-generator.js';

export default {
  version: '1.0.0',
  name: 'B-Labs'
};
