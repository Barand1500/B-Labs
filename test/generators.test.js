import { test } from 'node:test';
import assert from 'node:assert';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

test('CSS generator should exist', () => {
    const cssGenPath = join(projectRoot, 'src', 'generators', 'css-generator.js');
    assert.ok(existsSync(cssGenPath), 'CSS generator should exist');
});

test('CSS generator should produce valid output', () => {
    const cssGenPath = join(projectRoot, 'src', 'generators', 'css-generator.js');
    const content = readFileSync(cssGenPath, 'utf-8');
    
    // Check for dark mode support
    assert.ok(
        content.includes('.dark') || content.includes('dark:'),
        'CSS generator should support dark mode'
    );
});

test('Project generator should exist', () => {
    const projGenPath = join(projectRoot, 'src', 'generators', 'project-generator.js');
    assert.ok(existsSync(projGenPath), 'Project generator should exist');
});

test('Project generator should handle templates', () => {
    const projGenPath = join(projectRoot, 'src', 'generators', 'project-generator.js');
    const content = readFileSync(projGenPath, 'utf-8');
    
    assert.ok(
        content.includes('template') || content.includes('html'),
        'Project generator should handle templates'
    );
});

test('All templates should have dark mode toggle', () => {
    const templatesDir = join(projectRoot, 'templates', 'html');
    const templates = [
        'landing', 'portfolio', 'blog', 'ecommerce', 'dashboard', 
        'news', 'saas', 'restaurant', 'agency', 'resume', 'event',
        'photography', 'music', 'realestate', 'fitness', 'education'
    ];
    
    for (const template of templates) {
        const templatePath = join(templatesDir, `${template}.html`);
        const content = readFileSync(templatePath, 'utf-8');
        
        assert.ok(
            content.includes('darkMode') || content.includes('dark:'),
            `${template}.html should have dark mode support`
        );
    }
});

test('All templates should include blabs.css and blabs.js', () => {
    const templatesDir = join(projectRoot, 'templates', 'html');
    const templates = [
        'landing', 'portfolio', 'blog', 'ecommerce', 'dashboard', 
        'news', 'saas'
    ];
    
    for (const template of templates) {
        const templatePath = join(templatesDir, `${template}.html`);
        const content = readFileSync(templatePath, 'utf-8');
        
        assert.ok(
            content.includes('blabs.css'),
            `${template}.html should include blabs.css`
        );
        
        assert.ok(
            content.includes('blabs.js'),
            `${template}.html should include blabs.js`
        );
    }
});
