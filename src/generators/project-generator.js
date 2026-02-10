/**
 * Project Generator - Creates project structure
 * Handles both HTML and React project types
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { generateCSS } from './css-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate project structure based on type
 */
export async function generateProject(projectPath, answers) {
  const { projectType, cssType, createAssets, installDeps, projectName, template, darkMode } = answers;

  if (projectType === 'html') {
    await generateHTMLProject(projectPath, { cssType, createAssets, projectName, template, darkMode });
  } else if (projectType === 'react') {
    await generateReactProject(projectPath, { cssType, createAssets, installDeps, projectName, template, darkMode });
  }
}

/**
 * Generate HTML project
 */
async function generateHTMLProject(projectPath, options) {
  const { createAssets, projectName, template = 'blank', darkMode } = options;
  // If template is not blank, force utility CSS (templates require utility classes)
  const cssType = (template && template !== 'blank') ? 'utility' : (options.cssType || 'utility');

  // Create directory structure
  await fs.ensureDir(projectPath);
  await fs.ensureDir(path.join(projectPath, 'css'));
  await fs.ensureDir(path.join(projectPath, 'js'));
  
  if (createAssets) {
    await fs.ensureDir(path.join(projectPath, 'images'));
    await fs.ensureDir(path.join(projectPath, 'fonts'));
  }

  // Copy blabs.js
  const templatesDir = path.join(__dirname, '..', '..', 'templates');
  await fs.copy(
    path.join(templatesDir, 'blabs.js'),
    path.join(projectPath, 'js', 'blabs.js')
  );

  // Copy icons.js (Icon library)
  const iconsPath = path.join(templatesDir, 'icons.js');
  if (await fs.pathExists(iconsPath)) {
    await fs.copy(iconsPath, path.join(projectPath, 'js', 'icons.js'));
  }

  // Copy form-validation.js
  const formValidationPath = path.join(templatesDir, 'form-validation.js');
  if (await fs.pathExists(formValidationPath)) {
    await fs.copy(formValidationPath, path.join(projectPath, 'js', 'form-validation.js'));
  }

  // Copy components.js (Slider, Gallery, Pagination, etc.)
  const componentsPath = path.join(templatesDir, 'components.js');
  if (await fs.pathExists(componentsPath)) {
    await fs.copy(componentsPath, path.join(projectPath, 'js', 'components.js'));
  }

  // Copy BLABS-GUIDE.md (kullanıcı rehberi)
  const guideTemplate = path.join(templatesDir, 'BLABS-GUIDE.md');
  if (await fs.pathExists(guideTemplate)) {
    let guideContent = await fs.readFile(guideTemplate, 'utf-8');
    guideContent = guideContent.replace(/\{\{PROJECT_NAME\}\}/g, projectName || 'My Project');
    await fs.writeFile(path.join(projectPath, 'BLABS-GUIDE.md'), guideContent);
  }

  // Copy VS Code snippets (.vscode klasörü)
  const vscodeSnippets = path.join(templatesDir, '.vscode');
  if (await fs.pathExists(vscodeSnippets)) {
    await fs.copy(vscodeSnippets, path.join(projectPath, '.vscode'));
  }

  // Copy dev-server.js if exists
  const devServerPath = path.join(templatesDir, 'dev-server.js');
  if (await fs.pathExists(devServerPath)) {
    await fs.copy(devServerPath, path.join(projectPath, 'dev-server.js'));
  }

  // Create main.js with dark mode support
  const mainJS = `// Your custom JavaScript

B.ready(() => {
  console.log('🚀 Your B-Labs project is ready!');
  
  ${darkMode ? `// Dark mode toggle
  const darkModeToggle = document.querySelector('#darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      const isDark = B.darkMode.toggle();
      darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
  }
  
  // Initialize dark mode from localStorage
  B.darkMode.init();
  const isDark = B.darkMode.isEnabled();
  if (darkModeToggle) {
    darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
  
  ` : ''}// Example: Toggle menu
  // B.toggle('.menu-btn', '.menu');
  
  // Example: Lazy load images
  B.lazyImages();
  
  // Example: Smooth scroll
  // B.smoothScroll('a[href^="#"]', 80);
  
  // Example: Scroll reveal
  // B.scrollReveal('.animate-element', { animation: 'fadeIn', threshold: 0.1 });
});
`;
  await fs.writeFile(path.join(projectPath, 'js', 'main.js'), mainJS);

  // Create main.css
  const mainCSS = cssType === 'classic' ? `/* Your custom styles */

body {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Add your styles here */
` : `/* Your custom styles */
@import url('blabs.css');

/* Add additional styles here */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
`;
  await fs.writeFile(path.join(projectPath, 'css', 'main.css'), mainCSS);

  // Generate blabs.css if utility approach OR if using a template (templates require utility classes)
  if (cssType === 'utility' || (template && template !== 'blank')) {
    await generateCSS(projectPath, { cssType: 'utility', darkMode });
  }

  // Create index.html based on template
  let indexHTML;
  
  if (template && template !== 'blank') {
    // Use template file (templates always use utility classes)
    const templateFile = path.join(templatesDir, 'html', `${template}.html`);
    if (await fs.pathExists(templateFile)) {
      indexHTML = await fs.readFile(templateFile, 'utf-8');
      // Replace placeholders
      indexHTML = indexHTML.replace(/\{\{PROJECT_NAME\}\}/g, projectName || 'B-Labs Project');
    } else {
      // Fallback to blank template
      indexHTML = createBlankTemplate(cssType, projectName, darkMode);
    }
  } else {
    // Create blank template
    indexHTML = createBlankTemplate(cssType, projectName, darkMode);
  }
  
  await fs.writeFile(path.join(projectPath, 'index.html'), indexHTML);

  // Create blabs.config.js
  await createConfig(projectPath, 'html', cssType, darkMode);

  // Create README.md
  await createReadme(projectPath, projectName || 'My B-Labs Project');
}

/**
 * Create blank template HTML
 */
function createBlankTemplate(cssType, projectName, darkMode) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectName || 'B-Labs Project'}</title>
  ${cssType === 'utility' ? '<link rel="stylesheet" href="css/blabs.css">' : ''}
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <div class="container${cssType === 'utility' ? ' b-py-8' : ''}">
    ${darkMode && cssType === 'utility' ? `<button id="darkModeToggle" class="b-fixed b-top-4 b-right-4 b-bg-dark b-text-white b-px-4 b-py-2 b-rounded b-cursor-pointer b-z-50 b-transition b-hover-opacity">
      🌙 Dark Mode
    </button>` : ''}
    
    <header${cssType === 'utility' ? ' class="b-text-center b-mb-8"' : ''}>
      <h1${cssType === 'utility' ? ' class="b-text-4xl b-font-bold b-text-primary b-mb-4"' : ''}>
        🚀 Welcome to B-Labs
      </h1>
      <p${cssType === 'utility' ? ' class="b-text-lg b-text-dark"' : ''}>
        Your modern frontend development toolkit
      </p>
    </header>

    <main${cssType === 'utility' ? ' class="b-grid b-gap-6"' : ''}>
      <section${cssType === 'utility' ? ' class="b-bg-light b-p-6 b-rounded-lg b-shadow"' : ''}>
        <h2${cssType === 'utility' ? ' class="b-text-2xl b-font-semibold b-mb-4"' : ''}>
          ✨ Features
        </h2>
        <ul${cssType === 'utility' ? ' class="b-flex b-flex-col b-gap-2"' : ''}>
          <li>📦 Auto-generated project structure</li>
          <li>🎨 ${cssType === 'utility' ? 'Utility-first CSS classes' : 'Classic CSS approach'}</li>
          <li>⚡ Ready-to-use JavaScript helpers</li>
          <li>🚀 Fast and lightweight</li>
        </ul>
      </section>

      <section${cssType === 'utility' ? ' class="b-bg-white b-p-6 b-rounded-lg b-shadow b-border"' : ''}>
        <h2${cssType === 'utility' ? ' class="b-text-2xl b-font-semibold b-mb-4"' : ''}>
          📚 Documentation
        </h2>
        <p${cssType === 'utility' ? ' class="b-mb-4"' : ''}>
          Check out the README.md file for complete documentation and examples.
        </p>
        <button${cssType === 'utility' ? ' class="b-bg-primary b-text-white b-px-6 b-py-3 b-rounded b-cursor-pointer b-transition b-hover-opacity"' : ''}>
          Get Started
        </button>
      </section>
    </main>

    <footer${cssType === 'utility' ? ' class="b-text-center b-mt-12 b-pt-8 b-border"' : ''}>
      <p${cssType === 'utility' ? ' class="b-text-sm b-text-dark"' : ''}>
        Built with ❤️ using B-Labs
      </p>
    </footer>
  </div>

  <script src="js/blabs.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
`;
}

/**
 * Generate React project
 */
async function generateReactProject(projectPath, options) {
  const { cssType, createAssets, installDeps, projectName } = options;

  // Create React app with Vite
  return new Promise((resolve, reject) => {
    const vite = spawn('npm', ['create', 'vite@latest', projectPath, '--', '--template', 'react'], {
      stdio: 'inherit',
      shell: true
    });

    vite.on('close', async (code) => {
      if (code !== 0) {
        reject(new Error('Failed to create React project'));
        return;
      }

      // Add B-Labs files
      await fs.ensureDir(path.join(projectPath, 'src', 'utils'));
      
      // Copy blabs.js to src/utils
      const templatesDir = path.join(__dirname, '..', '..', 'templates');
      await fs.copy(
        path.join(templatesDir, 'blabs.js'),
        path.join(projectPath, 'src', 'utils', 'blabs.js')
      );

      // Create assets folders if requested
      if (createAssets) {
        await fs.ensureDir(path.join(projectPath, 'public', 'images'));
        await fs.ensureDir(path.join(projectPath, 'public', 'fonts'));
      }

      // Create blabs.config.js
      await createConfig(projectPath, 'react', cssType);

      // Create README.md
      await createReadme(projectPath, projectName || path.basename(projectPath));

      // Install dependencies if requested
      if (installDeps) {
        const install = spawn('npm', ['install'], {
          stdio: 'inherit',
          shell: true,
          cwd: projectPath
        });

        install.on('close', (code) => {
          if (code === 0) {
            resolve();
          } else {
            reject(new Error('Failed to install dependencies'));
          }
        });
      } else {
        resolve();
      }
    });

    vite.on('error', reject);
  });
}

/**
 * Create blabs.config.js
 */
async function createConfig(projectPath, projectType, cssType, darkMode = false) {
  const config = `/**
 * B-Labs Configuration
 * Customize your project settings here
 */

export default {
  projectType: '${projectType}',
  cssType: '${cssType}',
  darkMode: ${darkMode},
  
  // Color palette
  colors: {
    primary: '#4f46e5',
    secondary: '#06b6d4',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    dark: '#1f2937',
    light: '#f3f4f6',
    white: '#ffffff',
    black: '#000000'
  },
  
  // Spacing scale (used for margin and padding utilities)
  spacing: {
    0: '0',
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    8: '2rem',       // 32px
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem'       // 96px
  },
  
  // Typography scale
  typography: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem'     // 48px
  }
};
`;
  await fs.writeFile(path.join(projectPath, 'blabs.config.js'), config);
}

/**
 * Create README.md from template
 */
async function createReadme(projectPath, projectName) {
  const templatesDir = path.join(__dirname, '..', '..', 'templates');
  const templatePath = path.join(templatesDir, 'README-template.md');
  
  let readme = await fs.readFile(templatePath, 'utf-8');
  readme = readme.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
  
  await fs.writeFile(path.join(projectPath, 'README.md'), readme);
}
