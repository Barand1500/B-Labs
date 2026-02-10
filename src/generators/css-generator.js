/**
 * CSS Generator - Utility CSS Engine
 * Generates utility classes based on blabs.config.js
 * Similar to Tailwind but simpler and more readable
 */

import fs from 'fs-extra';
import path from 'path';

/**
 * Default configuration values
 */
const defaultConfig = {
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem'
  },
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
  typography: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem'
  }
};

/**
 * Generate utility CSS from config
 */
export async function generateCSS(projectPath, answers) {
  const configPath = path.join(projectPath, 'blabs.config.js');
  
  // Read config
  let config = defaultConfig;
  if (await fs.pathExists(configPath)) {
    const userConfig = await import(`file://${configPath}`);
    config = { ...defaultConfig, ...userConfig.default };
  }

  let css = '';
  
  // Header
  css += `/**
 * B-Labs Utility CSS
 * Auto-generated from blabs.config.js
 * 
 * Prefix: b-
 * Based on: ${new Date().toISOString()}
 */

/* ========================================
   RESET & BASE STYLES
   ======================================== */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: #1f2937;
}

img {
  max-width: 100%;
  height: auto;
}

/* ========================================
   COLOR UTILITIES
   ======================================== */

`;

  // Generate color utilities
  for (const [name, value] of Object.entries(config.colors)) {
    css += `/* ${name.toUpperCase()} */\n`;
    css += `.b-bg-${name} { background-color: ${value}; }\n`;
    css += `.b-text-${name} { color: ${value}; }\n`;
    css += `.b-border-${name} { border-color: ${value}; }\n`;
    css += `\n`;
  }

  // Generate spacing utilities
  css += `/* ========================================
   SPACING UTILITIES (Margin & Padding)
   ======================================== */

`;

  for (const [size, value] of Object.entries(config.spacing)) {
    // Margin
    css += `.b-m-${size} { margin: ${value}; }\n`;
    css += `.b-mt-${size} { margin-top: ${value}; }\n`;
    css += `.b-mr-${size} { margin-right: ${value}; }\n`;
    css += `.b-mb-${size} { margin-bottom: ${value}; }\n`;
    css += `.b-ml-${size} { margin-left: ${value}; }\n`;
    css += `.b-mx-${size} { margin-left: ${value}; margin-right: ${value}; }\n`;
    css += `.b-my-${size} { margin-top: ${value}; margin-bottom: ${value}; }\n`;
    css += `\n`;
    
    // Padding
    css += `.b-p-${size} { padding: ${value}; }\n`;
    css += `.b-pt-${size} { padding-top: ${value}; }\n`;
    css += `.b-pr-${size} { padding-right: ${value}; }\n`;
    css += `.b-pb-${size} { padding-bottom: ${value}; }\n`;
    css += `.b-pl-${size} { padding-left: ${value}; }\n`;
    css += `.b-px-${size} { padding-left: ${value}; padding-right: ${value}; }\n`;
    css += `.b-py-${size} { padding-top: ${value}; padding-bottom: ${value}; }\n`;
    css += `\n`;
  }

  // Generate typography utilities
  css += `/* ========================================
   TYPOGRAPHY UTILITIES
   ======================================== */

`;

  for (const [name, value] of Object.entries(config.typography)) {
    css += `.b-text-${name} { font-size: ${value}; }\n`;
  }

  css += `
/* Font Weight */
.b-font-thin { font-weight: 100; }
.b-font-light { font-weight: 300; }
.b-font-normal { font-weight: 400; }
.b-font-medium { font-weight: 500; }
.b-font-semibold { font-weight: 600; }
.b-font-bold { font-weight: 700; }
.b-font-black { font-weight: 900; }

/* Text Alignment */
.b-text-left { text-align: left; }
.b-text-center { text-align: center; }
.b-text-right { text-align: right; }
.b-text-justify { text-align: justify; }

/* ========================================
   LAYOUT UTILITIES
   ======================================== */

/* Display */
.b-block { display: block; }
.b-inline { display: inline; }
.b-inline-block { display: inline-block; }
.b-flex { display: flex; }
.b-inline-flex { display: inline-flex; }
.b-grid { display: grid; }
.b-hidden { display: none; }

/* Flexbox */
.b-flex-row { flex-direction: row; }
.b-flex-col { flex-direction: column; }
.b-flex-wrap { flex-wrap: wrap; }
.b-items-start { align-items: flex-start; }
.b-items-center { align-items: center; }
.b-items-end { align-items: flex-end; }
.b-justify-start { justify-content: flex-start; }
.b-justify-center { justify-content: center; }
.b-justify-end { justify-content: flex-end; }
.b-justify-between { justify-content: space-between; }
.b-justify-around { justify-content: space-around; }
.b-gap-1 { gap: 0.25rem; }
.b-gap-2 { gap: 0.5rem; }
.b-gap-3 { gap: 0.75rem; }
.b-gap-4 { gap: 1rem; }
.b-gap-6 { gap: 1.5rem; }
.b-gap-8 { gap: 2rem; }

/* Width */
.b-w-full { width: 100%; }
.b-w-auto { width: auto; }
.b-w-screen { width: 100vw; }

/* Height */
.b-h-full { height: 100%; }
.b-h-auto { height: auto; }
.b-h-screen { height: 100vh; }

/* ========================================
   BORDER UTILITIES
   ======================================== */

.b-border { border: 1px solid #e5e7eb; }
.b-border-2 { border: 2px solid #e5e7eb; }
.b-border-0 { border: none; }

/* Border Radius */
.b-rounded-none { border-radius: 0; }
.b-rounded-sm { border-radius: 0.125rem; }
.b-rounded { border-radius: 0.25rem; }
.b-rounded-md { border-radius: 0.375rem; }
.b-rounded-lg { border-radius: 0.5rem; }
.b-rounded-xl { border-radius: 0.75rem; }
.b-rounded-full { border-radius: 9999px; }

/* ========================================
   SHADOW UTILITIES
   ======================================== */

.b-shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
.b-shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1); }
.b-shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); }
.b-shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); }
.b-shadow-none { box-shadow: none; }

/* ========================================
   POSITION UTILITIES
   ======================================== */

.b-relative { position: relative; }
.b-absolute { position: absolute; }
.b-fixed { position: fixed; }
.b-sticky { position: sticky; }

/* ========================================
   CURSOR & INTERACTION
   ======================================== */

.b-cursor-pointer { cursor: pointer; }
.b-cursor-default { cursor: default; }
.b-cursor-not-allowed { cursor: not-allowed; }

/* ========================================
   TRANSITIONS
   ======================================== */

.b-transition { transition: all 0.3s ease; }
.b-transition-none { transition: none; }

/* Hover effects */
.b-hover-scale:hover { transform: scale(1.05); }
.b-hover-opacity:hover { opacity: 0.8; }

/* ========================================
   ANIMATIONS
   ======================================== */

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes slideInUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slideInDown {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slideInLeft {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Animation Classes */
.b-animate { animation-duration: 0.3s; animation-fill-mode: both; }
.b-animate-fade-in { animation-name: fadeIn; }
.b-animate-fade-out { animation-name: fadeOut; }
.b-animate-slide-in-up { animation-name: slideInUp; }
.b-animate-slide-in-down { animation-name: slideInDown; }
.b-animate-slide-in-left { animation-name: slideInLeft; }
.b-animate-slide-in-right { animation-name: slideInRight; }
.b-animate-scale-in { animation-name: scaleIn; }
.b-animate-bounce { animation-name: bounce; animation-duration: 0.6s; }
.b-animate-pulse { animation-name: pulse; animation-duration: 2s; animation-iteration-count: infinite; }
.b-animate-spin { animation-name: spin; animation-duration: 1s; animation-iteration-count: infinite; }

/* Animation Delays */
.b-delay-100 { animation-delay: 100ms; }
.b-delay-200 { animation-delay: 200ms; }
.b-delay-300 { animation-delay: 300ms; }
.b-delay-500 { animation-delay: 500ms; }

/* Animation Durations */
.b-duration-300 { animation-duration: 300ms; }
.b-duration-500 { animation-duration: 500ms; }
.b-duration-700 { animation-duration: 700ms; }
.b-duration-1000 { animation-duration: 1000ms; }

/* ========================================
   DARK MODE UTILITIES
   ======================================== */

/* Enable dark mode with .dark class on html/body */
.dark {
  color-scheme: dark;
}

.dark .b-bg-light { background-color: #1f2937; }
.dark .b-bg-white { background-color: #111827; }
.dark .b-text-dark { color: #f3f4f6; }
.dark .b-border { border-color: #374151; }

/* Dark mode specific classes */
.dark\\:b-bg-dark { }
.dark .dark\\:b-bg-dark { background-color: #111827; }

.dark\\:b-text-light { }
.dark .dark\\:b-text-light { color: #f3f4f6; }

/* ========================================
   RESPONSIVE UTILITIES
   ======================================== */

/* Mobile First Breakpoints */
/* sm: 640px, md: 768px, lg: 1024px, xl: 1280px */

/* Display - Mobile */
@media (min-width: 640px) {
  .sm\\:b-block { display: block; }
  .sm\\:b-flex { display: flex; }
  .sm\\:b-grid { display: grid; }
  .sm\\:b-hidden { display: none; }
}

@media (min-width: 768px) {
  .md\\:b-block { display: block; }
  .md\\:b-flex { display: flex; }
  .md\\:b-grid { display: grid; }
  .md\\:b-hidden { display: none; }
}

@media (min-width: 1024px) {
  .lg\\:b-block { display: block; }
  .lg\\:b-flex { display: flex; }
  .lg\\:b-grid { display: grid; }
  .lg\\:b-hidden { display: none; }
}

@media (min-width: 1280px) {
  .xl\\:b-block { display: block; }
  .xl\\:b-flex { display: flex; }
  .xl\\:b-grid { display: grid; }
  .xl\\:b-hidden { display: none; }
}

/* Text Size - Responsive */
@media (min-width: 640px) {
  .sm\\:b-text-xs { font-size: 0.75rem; }
  .sm\\:b-text-sm { font-size: 0.875rem; }
  .sm\\:b-text-base { font-size: 1rem; }
  .sm\\:b-text-lg { font-size: 1.125rem; }
  .sm\\:b-text-xl { font-size: 1.25rem; }
  .sm\\:b-text-2xl { font-size: 1.5rem; }
  .sm\\:b-text-3xl { font-size: 1.875rem; }
  .sm\\:b-text-4xl { font-size: 2.25rem; }
}

@media (min-width: 768px) {
  .md\\:b-text-xs { font-size: 0.75rem; }
  .md\\:b-text-sm { font-size: 0.875rem; }
  .md\\:b-text-base { font-size: 1rem; }
  .md\\:b-text-lg { font-size: 1.125rem; }
  .md\\:b-text-xl { font-size: 1.25rem; }
  .md\\:b-text-2xl { font-size: 1.5rem; }
  .md\\:b-text-3xl { font-size: 1.875rem; }
  .md\\:b-text-4xl { font-size: 2.25rem; }
}

@media (min-width: 1024px) {
  .lg\\:b-text-xs { font-size: 0.75rem; }
  .lg\\:b-text-sm { font-size: 0.875rem; }
  .lg\\:b-text-base { font-size: 1rem; }
  .lg\\:b-text-lg { font-size: 1.125rem; }
  .lg\\:b-text-xl { font-size: 1.25rem; }
  .lg\\:b-text-2xl { font-size: 1.5rem; }
  .lg\\:b-text-3xl { font-size: 1.875rem; }
  .lg\\:b-text-4xl { font-size: 2.25rem; }
}

/* Padding/Margin - Responsive */
@media (min-width: 768px) {
  .md\\:b-p-4 { padding: 1rem; }
  .md\\:b-p-6 { padding: 1.5rem; }
  .md\\:b-p-8 { padding: 2rem; }
  .md\\:b-px-4 { padding-left: 1rem; padding-right: 1rem; }
  .md\\:b-px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .md\\:b-py-4 { padding-top: 1rem; padding-bottom: 1rem; }
  .md\\:b-py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
}

/* Flex Direction - Responsive */
@media (min-width: 768px) {
  .md\\:b-flex-row { flex-direction: row; }
  .md\\:b-flex-col { flex-direction: column; }
}

/* ========================================
   UTILITY ADDITIONS
   ======================================== */

/* Overflow */
.b-overflow-hidden { overflow: hidden; }
.b-overflow-auto { overflow: auto; }
.b-overflow-scroll { overflow: scroll; }

/* Z-Index */
.b-z-0 { z-index: 0; }
.b-z-10 { z-index: 10; }
.b-z-20 { z-index: 20; }
.b-z-30 { z-index: 30; }
.b-z-40 { z-index: 40; }
.b-z-50 { z-index: 50; }

/* Opacity */
.b-opacity-0 { opacity: 0; }
.b-opacity-25 { opacity: 0.25; }
.b-opacity-50 { opacity: 0.5; }
.b-opacity-75 { opacity: 0.75; }
.b-opacity-100 { opacity: 1; }

/* Max Width */
.b-max-w-xs { max-width: 20rem; }
.b-max-w-sm { max-width: 24rem; }
.b-max-w-md { max-width: 28rem; }
.b-max-w-lg { max-width: 32rem; }
.b-max-w-xl { max-width: 36rem; }
.b-max-w-2xl { max-width: 42rem; }
.b-max-w-full { max-width: 100%; }

/* Pointer Events */
.b-pointer-events-none { pointer-events: none; }
.b-pointer-events-auto { pointer-events: auto; }
`;

  // Write CSS file
  const cssPath = path.join(projectPath, 'css', 'blabs.css');
  await fs.outputFile(cssPath, css);
  
  return css;
}
