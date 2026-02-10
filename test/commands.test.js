import { test } from 'node:test';
import assert from 'node:assert';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

test('init command should exist', () => {
    const initPath = join(projectRoot, 'src', 'commands', 'init.js');
    assert.ok(existsSync(initPath), 'init command should exist');
});

test('Command files should be valid JavaScript', () => {
    const commands = ['init.js'];
    
    for (const cmd of commands) {
        const cmdPath = join(projectRoot, 'src', 'commands', cmd);
        assert.ok(existsSync(cmdPath), `Command ${cmd} should exist`);
        
        try {
            import(cmdPath);
            assert.ok(true, `Command ${cmd} should be valid JavaScript`);
        } catch (error) {
            assert.fail(`Command ${cmd} has syntax errors: ${error.message}`);
        }
    }
});

test('All required dependencies should be in package.json', () => {
    const packagePath = join(projectRoot, 'package.json');
    const packageJson = JSON.parse(require('fs').readFileSync(packagePath, 'utf-8'));
    
    const requiredDeps = [
        'chalk',
        'commander',
        'inquirer',
        'ora',
        'fs-extra'
    ];
    
    for (const dep of requiredDeps) {
        assert.ok(
            packageJson.dependencies[dep],
            `${dep} should be listed in dependencies`
        );
    }
});

test('Repository information should be present', () => {
    const packagePath = join(projectRoot, 'package.json');
    const packageJson = JSON.parse(require('fs').readFileSync(packagePath, 'utf-8'));
    
    assert.ok(packageJson.repository, 'package.json should have repository information');
    assert.ok(packageJson.bugs, 'package.json should have bugs URL');
    assert.ok(packageJson.homepage, 'package.json should have homepage URL');
});

test('Files array should include essential directories', () => {
    const packagePath = join(projectRoot, 'package.json');
    const packageJson = JSON.parse(require('fs').readFileSync(packagePath, 'utf-8'));
    
    const requiredFiles = ['bin', 'src', 'templates', 'README.md', 'LICENSE'];
    
    assert.ok(Array.isArray(packageJson.files), 'package.json should have files array');
    
    for (const file of requiredFiles) {
        assert.ok(
            packageJson.files.includes(file),
            `files array should include ${file}`
        );
    }
});
