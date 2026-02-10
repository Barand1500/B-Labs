import { test } from 'node:test';
import assert from 'node:assert';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

test('CSS generator config should exist', () => {
    const configPath = join(projectRoot, 'src', 'generators', 'css-config.js');
    assert.ok(existsSync(configPath), 'CSS config should exist');
});

test('CSS generator should have all required utilities', () => {
    const configPath = join(projectRoot, 'src', 'generators', 'css-config.js');
    const content = readFileSync(configPath, 'utf-8');
    
    // Check for key utility categories
    const requiredCategories = [
        'colors',
        'spacing',
        'typography',
        'layout',
        'flexbox',
        'grid',
        'effects'
    ];
    
    for (const category of requiredCategories) {
        assert.ok(
            content.includes(category) || content.includes(`b-${category}`),
            `CSS should include ${category} utilities`
        );
    }
});

test('CSS output should have dark mode support', () => {
    const configPath = join(projectRoot, 'src', 'generators', 'css-config.js');
    const content = readFileSync(configPath, 'utf-8');
    
    assert.ok(content.includes('.dark'), 'CSS should have dark mode support');
});

test('JS library should exist', () => {
    const jsLibPath = join(projectRoot, 'src', 'generators', 'js-library.js');
    assert.ok(existsSync(jsLibPath), 'JS library should exist');
});

test('JS library should have required components', () => {
    const jsLibPath = join(projectRoot, 'src', 'generators', 'js-library.js');
    const content = readFileSync(jsLibPath, 'utf-8');
    
    const requiredComponents = [
        'darkMode',
        'smoothScroll',
        'scrollReveal',
        'animate',
        'components'
    ];
    
    for (const component of requiredComponents) {
        assert.ok(
            content.includes(component),
            `JS library should include ${component} functionality`
        );
    }
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
