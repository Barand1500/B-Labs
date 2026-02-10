import { test } from 'node:test';
import assert from 'node:assert';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

test('package.json should be valid JSON', () => {
    const packagePath = join(projectRoot, 'package.json');
    assert.ok(existsSync(packagePath), 'package.json should exist');
    
    const content = readFileSync(packagePath, 'utf-8');
    const packageJson = JSON.parse(content);
    
    assert.ok(packageJson.name, 'package.json should have a name');
    assert.ok(packageJson.version, 'package.json should have a version');
    assert.ok(packageJson.description, 'package.json should have a description');
});

test('CLI entry point should exist', () => {
    const cliPath = join(projectRoot, 'bin', 'cli.js');
    assert.ok(existsSync(cliPath), 'CLI entry point (bin/cli.js) should exist');
    
    const content = readFileSync(cliPath, 'utf-8');
    assert.ok(content.includes('#!/usr/bin/env node'), 'CLI should have shebang');
});

test('Required directories should exist', () => {
    const requiredDirs = ['bin', 'src', 'templates'];
    
    for (const dir of requiredDirs) {
        const dirPath = join(projectRoot, dir);
        assert.ok(existsSync(dirPath), `${dir} directory should exist`);
    }
});

test('Template HTML files should exist', () => {
    const templates = [
        'landing', 'portfolio', 'blog', 'ecommerce', 'dashboard', 
        'news', 'saas', 'restaurant', 'agency', 'resume', 'event',
        'photography', 'music', 'realestate', 'fitness', 'education'
    ];
    
    for (const template of templates) {
        const templatePath = join(projectRoot, 'templates', 'html', `${template}.html`);
        assert.ok(existsSync(templatePath), `Template ${template}.html should exist`);
    }
});

test('LICENSE file should exist', () => {
    const licensePath = join(projectRoot, 'LICENSE');
    assert.ok(existsSync(licensePath), 'LICENSE file should exist');
});

test('README.md should exist and have content', () => {
    const readmePath = join(projectRoot, 'README.md');
    assert.ok(existsSync(readmePath), 'README.md should exist');
    
    const content = readFileSync(readmePath, 'utf-8');
    assert.ok(content.length > 100, 'README.md should have meaningful content');
    assert.ok(content.includes('B-Labs'), 'README.md should mention B-Labs');
});
