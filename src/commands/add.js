/**
 * Add Command - Quick file/component generator
 * Usage: blabs add html contact
 *        blabs add component button
 *        blabs add page about
 */

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';

const templates = {
  html: (name) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name.charAt(0).toUpperCase() + name.slice(1)}</title>
  <link rel="stylesheet" href="css/blabs.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <div class="b-max-w-6xl b-mx-auto b-px-4 b-py-8">
    <header class="b-text-center b-mb-8">
      <h1 class="b-text-4xl b-font-bold b-text-primary b-mb-4">
        ${name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      <p class="b-text-lg b-text-gray-600">
        Page description goes here
      </p>
    </header>

    <main>
      <!-- Your content here -->
      <section class="b-bg-white b-p-6 b-rounded-lg b-shadow">
        <h2 class="b-text-2xl b-font-semibold b-mb-4">Section Title</h2>
        <p class="b-text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>
    </main>

    <footer class="b-text-center b-mt-12 b-pt-8 b-border-t">
      <p class="b-text-sm b-text-gray-600">
        Built with B-Labs
      </p>
    </footer>
  </div>

  <script src="js/blabs.js"></script>
  <script src="js/main.js"></script>
</body>
</html>`,

  css: (name) => `/**
 * ${name.charAt(0).toUpperCase() + name.slice(1)} Styles
 * Custom styles for ${name}
 */

/* ==========================================
   VARIABLES
   ========================================== */
:root {
  --${name}-primary: #4f46e5;
  --${name}-secondary: #06b6d4;
  --${name}-spacing: 1rem;
}

/* ==========================================
   ${name.toUpperCase()} STYLES
   ========================================== */

.${name}-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--${name}-spacing);
}

.${name}-header {
  margin-bottom: 2rem;
}

.${name}-title {
  font-size: 2rem;
  font-weight: bold;
  color: var(--${name}-primary);
}

.${name}-content {
  /* Add your styles here */
}

/* ==========================================
   RESPONSIVE
   ========================================== */

@media (max-width: 768px) {
  .${name}-container {
    padding: 0.5rem;
  }
  
  .${name}-title {
    font-size: 1.5rem;
  }
}
`,

  js: (name) => `/**
 * ${name.charAt(0).toUpperCase() + name.slice(1)} JavaScript
 * Custom functionality for ${name}
 */

(function() {
  'use strict';

  // Wait for DOM ready
  B.ready(() => {
    console.log('${name} module loaded');
    
    // Initialize ${name}
    init${name.charAt(0).toUpperCase() + name.slice(1)}();
  });

  /**
   * Initialize ${name} functionality
   */
  function init${name.charAt(0).toUpperCase() + name.slice(1)}() {
    // Add your initialization code here
    
    // Example: Event listeners
    const buttons = document.querySelectorAll('.${name}-button');
    buttons.forEach(button => {
      button.addEventListener('click', handle${name.charAt(0).toUpperCase() + name.slice(1)}Click);
    });
  }

  /**
   * Handle ${name} button click
   */
  function handle${name.charAt(0).toUpperCase() + name.slice(1)}Click(e) {
    e.preventDefault();
    console.log('${name} button clicked');
    
    // Add your logic here
  }

  /**
   * ${name.charAt(0).toUpperCase() + name.slice(1)} helper function
   */
  function ${name}Helper() {
    // Add helper functions here
  }

  // Export if using modules
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { init${name.charAt(0).toUpperCase() + name.slice(1)} };
  }

})();
`,

  component: {
    button: (name) => `<!-- Button Component: ${name} -->
<button class="b-btn b-btn-${name} b-bg-primary b-text-white b-px-6 b-py-3 b-rounded-lg b-border-0 b-cursor-pointer b-font-semibold b-transition-all hover:b-opacity-90 hover:b-transform hover:b-scale-105 b-shadow-md hover:b-shadow-lg">
  <span class="b-flex b-items-center b-gap-2">
    <svg class="b-w-5 b-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
    </svg>
    <span>Click Me</span>
  </span>
</button>

<style>
.b-btn-${name} {
  position: relative;
  overflow: hidden;
}

.b-btn-${name}::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.b-btn-${name}:active::before {
  width: 300px;
  height: 300px;
}
</style>

<script>
// Button ${name} functionality
document.querySelectorAll('.b-btn-${name}').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Button ${name} clicked!');
    // Add your logic here
  });
});
</script>`,

    card: (name) => `<!-- Card Component: ${name} -->
<div class="b-card b-card-${name} b-bg-white dark:b-bg-gray-800 b-rounded-xl b-shadow-lg b-overflow-hidden b-transition-all hover:b-shadow-2xl hover:b-transform hover:-b-translate-y-2">
  <div class="b-card-image">
    <img src="https://via.placeholder.com/400x250" alt="${name}" class="b-w-full b-h-auto b-object-cover">
    <div class="b-absolute b-top-4 b-right-4 b-bg-primary b-text-white b-px-3 b-py-1 b-rounded-full b-text-sm b-font-semibold">
      New
    </div>
  </div>
  
  <div class="b-card-content b-p-6">
    <h3 class="b-text-2xl b-font-bold b-mb-3 b-text-dark dark:b-text-light">
      ${name.charAt(0).toUpperCase() + name.slice(1)} Title
    </h3>
    <p class="b-text-gray-600 dark:b-text-gray-400 b-mb-4">
      This is a description for the ${name} card. Add your content here.
    </p>
    <div class="b-flex b-items-center b-justify-between">
      <span class="b-text-primary b-font-bold b-text-xl">$99</span>
      <button class="b-bg-primary b-text-white b-px-6 b-py-2 b-rounded-full b-border-0 b-cursor-pointer b-transition hover:b-opacity-90">
        View Details
      </button>
    </div>
  </div>
</div>

<style>
.b-card-${name} {
  max-width: 400px;
}

.b-card-${name} .b-card-image {
  position: relative;
  overflow: hidden;
}

.b-card-${name} .b-card-image img {
  transition: transform 0.3s ease;
}

.b-card-${name}:hover .b-card-image img {
  transform: scale(1.1);
}
</style>`,

    navbar: (name) => `<!-- Navbar Component: ${name} -->
<nav class="b-navbar b-navbar-${name} b-bg-white dark:b-bg-gray-800 b-shadow-md b-fixed b-w-full b-top-0 b-z-50 b-transition-all">
  <div class="b-max-w-7xl b-mx-auto b-px-4">
    <div class="b-flex b-items-center b-justify-between b-h-16">
      <!-- Logo -->
      <div class="b-flex b-items-center">
        <a href="/" class="b-text-2xl b-font-bold b-text-primary b-no-underline">
          Logo
        </a>
      </div>

      <!-- Desktop Menu -->
      <div class="b-hidden md:b-flex b-items-center b-gap-8">
        <a href="#home" class="b-text-dark dark:b-text-light b-no-underline b-transition hover:b-text-primary">Home</a>
        <a href="#about" class="b-text-dark dark:b-text-light b-no-underline b-transition hover:b-text-primary">About</a>
        <a href="#services" class="b-text-dark dark:b-text-light b-no-underline b-transition hover:b-text-primary">Services</a>
        <a href="#contact" class="b-text-dark dark:b-text-light b-no-underline b-transition hover:b-text-primary">Contact</a>
        <button class="b-bg-primary b-text-white b-px-6 b-py-2 b-rounded-full b-border-0 b-cursor-pointer b-transition hover:b-opacity-90">
          Get Started
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:b-hidden b-text-dark dark:b-text-light b-border-0 b-bg-transparent b-cursor-pointer" id="mobile-menu-btn-${name}">
        <svg class="b-w-6 b-h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="b-hidden md:b-hidden b-pb-4" id="mobile-menu-${name}">
      <div class="b-flex b-flex-col b-gap-4">
        <a href="#home" class="b-text-dark dark:b-text-light b-no-underline b-transition hover:b-text-primary">Home</a>
        <a href="#about" class="b-text-dark dark:b-text-light b-no-underline b-transition hover:b-text-primary">About</a>
        <a href="#services" class="b-text-dark dark:b-text-light b-no-underline b-transition hover:b-text-primary">Services</a>
        <a href="#contact" class="b-text-dark dark:b-text-light b-no-underline b-transition hover:b-text-primary">Contact</a>
        <button class="b-bg-primary b-text-white b-px-6 b-py-2 b-rounded-full b-border-0 b-cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  </div>
</nav>

<script>
// Navbar ${name} functionality
document.getElementById('mobile-menu-btn-${name}').addEventListener('click', () => {
  document.getElementById('mobile-menu-${name}').classList.toggle('b-hidden');
});

// Sticky navbar on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.b-navbar-${name}');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});
</script>`,

    form: (name) => `<!-- Form Component: ${name} -->
<form class="b-form b-form-${name} b-max-w-md b-mx-auto b-bg-white dark:b-bg-gray-800 b-p-8 b-rounded-xl b-shadow-lg">
  <h2 class="b-text-3xl b-font-bold b-mb-6 b-text-center b-text-dark dark:b-text-light">
    ${name.charAt(0).toUpperCase() + name.slice(1)} Form
  </h2>

  <!-- Name Field -->
  <div class="b-mb-4">
    <label class="b-block b-text-sm b-font-semibold b-mb-2 b-text-dark dark:b-text-light">
      Full Name
    </label>
    <input 
      type="text" 
      name="name"
      placeholder="John Doe"
      required
      class="b-w-full b-p-3 b-rounded-lg b-border b-border-gray-300 dark:b-border-gray-600 dark:b-bg-gray-700 dark:b-text-light b-transition focus:b-border-primary focus:b-outline-none">
  </div>

  <!-- Email Field -->
  <div class="b-mb-4">
    <label class="b-block b-text-sm b-font-semibold b-mb-2 b-text-dark dark:b-text-light">
      Email Address
    </label>
    <input 
      type="email" 
      name="email"
      placeholder="john@example.com"
      required
      class="b-w-full b-p-3 b-rounded-lg b-border b-border-gray-300 dark:b-border-gray-600 dark:b-bg-gray-700 dark:b-text-light b-transition focus:b-border-primary focus:b-outline-none">
  </div>

  <!-- Message Field -->
  <div class="b-mb-6">
    <label class="b-block b-text-sm b-font-semibold b-mb-2 b-text-dark dark:b-text-light">
      Message
    </label>
    <textarea 
      name="message"
      rows="5"
      placeholder="Your message here..."
      required
      class="b-w-full b-p-3 b-rounded-lg b-border b-border-gray-300 dark:b-border-gray-600 dark:b-bg-gray-700 dark:b-text-light b-transition focus:b-border-primary focus:b-outline-none"></textarea>
  </div>

  <!-- Submit Button -->
  <button 
    type="submit"
    class="b-w-full b-bg-primary b-text-white b-px-8 b-py-4 b-rounded-full b-border-0 b-cursor-pointer b-font-bold b-text-lg b-transition-all hover:b-opacity-90 hover:b-shadow-lg">
    Send Message
  </button>

  <!-- Success Message -->
  <div class="b-hidden b-mt-4 b-p-4 b-bg-success b-text-white b-rounded-lg b-text-center" id="${name}-success">
    ✓ Form submitted successfully!
  </div>
</form>

<script>
// Form ${name} validation and submission
document.querySelector('.b-form-${name}').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  console.log('${name} form data:', data);
  
  // Show success message
  document.getElementById('${name}-success').classList.remove('b-hidden');
  
  // Optional: Send to API
  // await B.ajax('/api/${name}', { method: 'POST', body: JSON.stringify(data) });
  
  // Reset form
  setTimeout(() => {
    e.target.reset();
    document.getElementById('${name}-success').classList.add('b-hidden');
  }, 3000);
});
</script>`,

    footer: (name) => `<!-- Footer Component: ${name} -->
<footer class="b-footer b-footer-${name} b-bg-gray-900 b-text-white b-py-12">
  <div class="b-max-w-6xl b-mx-auto b-px-4">
    <div class="b-grid b-grid-cols-1 md:b-grid-cols-4 b-gap-8 b-mb-8">
      <!-- Company Info -->
      <div>
        <h3 class="b-text-xl b-font-bold b-mb-4">Company</h3>
        <p class="b-text-gray-400 b-mb-4">
          Building amazing web experiences with B-Labs.
        </p>
        <div class="b-flex b-gap-4">
          <a href="#" class="b-text-gray-400 hover:b-text-white b-transition">
            <svg class="b-w-6 b-h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="#" class="b-text-gray-400 hover:b-text-white b-transition">
            <svg class="b-w-6 b-h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="b-text-xl b-font-bold b-mb-4">Quick Links</h3>
        <ul class="b-flex b-flex-col b-gap-2">
          <li><a href="#" class="b-text-gray-400 hover:b-text-white b-transition b-no-underline">Home</a></li>
          <li><a href="#" class="b-text-gray-400 hover:b-text-white b-transition b-no-underline">About</a></li>
          <li><a href="#" class="b-text-gray-400 hover:b-text-white b-transition b-no-underline">Services</a></li>
          <li><a href="#" class="b-text-gray-400 hover:b-text-white b-transition b-no-underline">Contact</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h3 class="b-text-xl b-font-bold b-mb-4">Resources</h3>
        <ul class="b-flex b-flex-col b-gap-2">
          <li><a href="#" class="b-text-gray-400 hover:b-text-white b-transition b-no-underline">Documentation</a></li>
          <li><a href="#" class="b-text-gray-400 hover:b-text-white b-transition b-no-underline">Tutorials</a></li>
          <li><a href="#" class="b-text-gray-400 hover:b-text-white b-transition b-no-underline">Blog</a></li>
          <li><a href="#" class="b-text-gray-400 hover:b-text-white b-transition b-no-underline">Support</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="b-text-xl b-font-bold b-mb-4">Newsletter</h3>
        <p class="b-text-gray-400 b-mb-4">Subscribe to our newsletter</p>
        <form class="b-flex b-gap-2">
          <input 
            type="email" 
            placeholder="Your email"
            class="b-flex-1 b-p-2 b-rounded b-bg-gray-800 b-border b-border-gray-700 b-text-white">
          <button class="b-bg-primary b-px-4 b-py-2 b-rounded b-border-0 b-cursor-pointer b-transition hover:b-opacity-90">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Copyright -->
    <div class="b-border-t b-border-gray-800 b-pt-8 b-text-center b-text-gray-400">
      <p>&copy; 2026 Your Company. Built with B-Labs.</p>
    </div>
  </div>
</footer>`,

    slider: (name) => `<!-- Slider Component: ${name} -->
<div id="${name}-slider" class="b-slider-${name}" style="max-width: 1200px; margin: 0 auto;">
  <!-- Slide 1 -->
  <div class="b-slide">
    <img src="https://via.placeholder.com/1200x500/3b82f6/ffffff?text=Slide+1" alt="Slide 1" style="width: 100%; height: auto; display: block;">
  </div>
  
  <!-- Slide 2 -->
  <div class="b-slide">
    <img src="https://via.placeholder.com/1200x500/10b981/ffffff?text=Slide+2" alt="Slide 2" style="width: 100%; height: auto; display: block;">
  </div>
  
  <!-- Slide 3 -->
  <div class="b-slide">
    <img src="https://via.placeholder.com/1200x500/f59e0b/ffffff?text=Slide+3" alt="Slide 3" style="width: 100%; height: auto; display: block;">
  </div>
</div>

<script src="js/components.js"></script>
<script>
  // Initialize ${name} slider
  B.ready(() => {
    const slider = B.components.slider('#${name}-slider', {
      autoplay: true,
      interval: 3000,
      loop: true,
      navigation: true,
      pagination: true,
      transition: 'slide'
    });
  });
</script>`,

    gallery: (name) => `<!-- Gallery Component: ${name} -->
<div id="${name}-gallery" class="b-gallery-${name}">
  <img src="https://via.placeholder.com/400x300/3b82f6/ffffff?text=Image+1" alt="Image 1">
  <img src="https://via.placeholder.com/400x300/10b981/ffffff?text=Image+2" alt="Image 2">
  <img src="https://via.placeholder.com/400x300/f59e0b/ffffff?text=Image+3" alt="Image 3">
  <img src="https://via.placeholder.com/400x300/ef4444/ffffff?text=Image+4" alt="Image 4">
  <img src="https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Image+5" alt="Image 5">
  <img src="https://via.placeholder.com/400x300/ec4899/ffffff?text=Image+6" alt="Image 6">
</div>

<style>
  .b-gallery-${name} img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .b-gallery-${name} img:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
</style>

<script src="js/components.js"></script>
<script>
  // Initialize ${name} gallery
  B.ready(() => {
    B.components.gallery('#${name}-gallery', {
      lightbox: true,
      columns: 3,
      gap: '1rem'
    });
  });
</script>`,

    pagination: (name) => `<!-- Pagination Component: ${name} -->
<div id="${name}-pagination" class="b-pagination-${name}"></div>

<script src="js/components.js"></script>
<script>
  // Initialize ${name} pagination
  B.ready(() => {
    const pagination = B.components.pagination('#${name}-pagination', {
      total: 100,      // Total items
      perPage: 10,     // Items per page
      current: 1,      // Current page
      maxVisible: 7,   // Max visible page numbers
      onChange: (page) => {
        console.log('Page changed to:', page);
        // Load your data for this page
      }
    });
  });
</script>`,

    progress: (name) => `<!-- Progress Bar Component: ${name} -->
<div class="b-progress-${name}" style="max-width: 600px; margin: 2rem auto;">
  <h3 style="margin-bottom: 1rem;">Upload Progress</h3>
  <div id="${name}-progress"></div>
</div>

<script src="js/components.js"></script>
<script>
  // Initialize ${name} progress bar
  B.ready(() => {
    const progress = B.components.progress('#${name}-progress', {
      value: 0,
      max: 100,
      showLabel: true,
      animated: true,
      color: '#3b82f6'
    });

    // Simulate progress (remove in production)
    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      progress.setValue(value);
      if (value >= 100) {
        clearInterval(interval);
        console.log('Progress complete!');
      }
    }, 500);
  });
</script>`,

    tabs: (name) => `<!-- Tabs Component: ${name} -->
<div class="b-tabs-${name}" style="max-width: 800px; margin: 2rem auto;">
  <!-- Tab Headers -->
  <div data-tabs class="b-flex b-gap-2 b-border-b b-mb-4">
    <button class="b-px-6 b-py-3 b-border-0 b-bg-transparent b-cursor-pointer b-transition hover:b-bg-gray-100">
      Tab 1
    </button>
    <button class="b-px-6 b-py-3 b-border-0 b-bg-transparent b-cursor-pointer b-transition hover:b-bg-gray-100">
      Tab 2
    </button>
    <button class="b-px-6 b-py-3 b-border-0 b-bg-transparent b-cursor-pointer b-transition hover:b-bg-gray-100">
      Tab 3
    </button>
  </div>

  <!-- Tab Panels -->
  <div data-tab-panel class="b-p-6 b-bg-white b-rounded-lg b-shadow">
    <h3>Tab 1 Content</h3>
    <p>This is the content for tab 1. Add your content here.</p>
  </div>

  <div data-tab-panel class="b-p-6 b-bg-white b-rounded-lg b-shadow b-hidden">
    <h3>Tab 2 Content</h3>
    <p>This is the content for tab 2. Add your content here.</p>
  </div>

  <div data-tab-panel class="b-p-6 b-bg-white b-rounded-lg b-shadow b-hidden">
    <h3>Tab 3 Content</h3>
    <p>This is the content for tab 3. Add your content here.</p>
  </div>
</div>

<style>
  .b-tabs-${name} [data-tabs] button.active {
    color: #3b82f6;
    border-bottom: 2px solid #3b82f6;
  }
  
  .b-tabs-${name} [data-tab-panel] {
    display: none;
  }
  
  .b-tabs-${name} [data-tab-panel].active {
    display: block;
  }
</style>

<script src="js/components.js"></script>
<script>
  // Initialize ${name} tabs
  B.ready(() => {
    B.components.tabs('.b-tabs-${name}', {
      active: 0,
      onChange: (index) => {
        console.log('Tab changed to:', index);
      }
    });
  });
</script>`,

    accordion: (name) => `<!-- Accordion Component: ${name} -->
<div class="b-accordion-${name}" style="max-width: 800px; margin: 2rem auto;">
  <!-- Accordion Item 1 -->
  <div data-accordion-item class="b-mb-4 b-border b-rounded-lg b-overflow-hidden">
    <button data-accordion-header class="b-w-full b-text-left b-px-6 b-py-4 b-bg-white b-border-0 b-cursor-pointer b-flex b-justify-between b-items-center hover:b-bg-gray-50">
      <span class="b-font-semibold">What is B-Labs?</span>
      <span class="b-text-2xl">+</span>
    </button>
    <div data-accordion-content class="b-px-6 b-overflow-hidden b-transition-all" style="max-height: 0;">
      <div class="b-py-4">
        <p>B-Labs is a powerful CLI tool for generating modern web projects with pre-built templates, utility classes, and components.</p>
      </div>
    </div>
  </div>

  <!-- Accordion Item 2 -->
  <div data-accordion-item class="b-mb-4 b-border b-rounded-lg b-overflow-hidden">
    <button data-accordion-header class="b-w-full b-text-left b-px-6 b-py-4 b-bg-white b-border-0 b-cursor-pointer b-flex b-justify-between b-items-center hover:b-bg-gray-50">
      <span class="b-font-semibold">How do I get started?</span>
      <span class="b-text-2xl">+</span>
    </button>
    <div data-accordion-content class="b-px-6 b-overflow-hidden b-transition-all" style="max-height: 0;">
      <div class="b-py-4">
        <p>Simply run 'blabs init your-project' to create a new project, then use 'blabs add' commands to quickly generate components.</p>
      </div>
    </div>
  </div>

  <!-- Accordion Item 3 -->
  <div data-accordion-item class="b-mb-4 b-border b-rounded-lg b-overflow-hidden">
    <button data-accordion-header class="b-w-full b-text-left b-px-6 b-py-4 b-bg-white b-border-0 b-cursor-pointer b-flex b-justify-between b-items-center hover:b-bg-gray-50">
      <span class="b-font-semibold">Is it free?</span>
      <span class="b-text-2xl">+</span>
    </button>
    <div data-accordion-content class="b-px-6 b-overflow-hidden b-transition-all" style="max-height: 0;">
      <div class="b-py-4">
        <p>Yes! B-Labs is completely free and open source.</p>
      </div>
    </div>
  </div>
</div>

<style>
  .b-accordion-${name} [data-accordion-item].active button span:last-child {
    transform: rotate(45deg);
  }
</style>

<script src="js/components.js"></script>
<script>
  // Initialize ${name} accordion
  B.ready(() => {
    B.components.accordion('.b-accordion-${name}', {
      multiple: false,    // Allow multiple items open
      openFirst: true     // Open first item by default
    });
  });
</script>`
  }
};

export async function addCommand(type, name, options) {
  const spinner = ora('Creating file...').start();

  try {
    // Get current directory
    const currentDir = process.cwd();

    // Determine file path and content
    let filePath;
    let content;

    switch (type) {
      case 'html':
      case 'page':
        filePath = path.join(currentDir, `${name}.html`);
        content = templates.html(name);
        break;

      case 'css':
        filePath = path.join(currentDir, 'css', `${name}.css`);
        await fs.ensureDir(path.join(currentDir, 'css'));
        content = templates.css(name);
        break;

      case 'js':
      case 'javascript':
        filePath = path.join(currentDir, 'js', `${name}.js`);
        await fs.ensureDir(path.join(currentDir, 'js'));
        content = templates.js(name);
        break;

      case 'component':
        // Ask which component type
        const componentTypes = Object.keys(templates.component);
        const { componentType } = await inquirer.prompt([
          {
            type: 'list',
            name: 'componentType',
            message: 'Which component do you want to create?',
            choices: componentTypes.map(t => ({ name: t, value: t }))
          }
        ]);

        filePath = path.join(currentDir, 'components', `${name}-${componentType}.html`);
        await fs.ensureDir(path.join(currentDir, 'components'));
        content = templates.component[componentType](name);
        break;

      case 'form':
        filePath = path.join(currentDir, 'components', `${name}-form.html`);
        await fs.ensureDir(path.join(currentDir, 'components'));
        content = templates.component.form(name);
        break;

      default:
        spinner.fail();
        console.log(chalk.red(`\n❌ Unknown type: ${type}`));
        console.log(chalk.yellow('\nAvailable types:'));
        console.log(chalk.cyan('  • html/page  ') + '- HTML page');
        console.log(chalk.cyan('  • css        ') + '- CSS file');
        console.log(chalk.cyan('  • js         ') + '- JavaScript file');
        console.log(chalk.cyan('  • component  ') + '- Component (button, card, navbar, etc)');
        console.log(chalk.cyan('  • form       ') + '- Form component');
        return;
    }

    // Check if file exists
    if (await fs.pathExists(filePath)) {
      spinner.stop();
      const { overwrite } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'overwrite',
          message: `File already exists. Overwrite?`,
          default: false
        }
      ]);

      if (!overwrite) {
        console.log(chalk.yellow('\n✋ Cancelled'));
        return;
      }
      spinner.start();
    }

    // Write file
    await fs.writeFile(filePath, content);

    spinner.succeed();
    console.log(chalk.green('\n✨ File created successfully!\n'));
    console.log(chalk.cyan('📁 Location: ') + chalk.white(filePath));
    console.log(chalk.cyan('📄 Type: ') + chalk.white(type));
    console.log(chalk.cyan('💾 Size: ') + chalk.white(`${content.length} bytes`));
    console.log(chalk.dim('\n💡 Tip: Open the file to start editing!'));

  } catch (error) {
    spinner.fail();
    console.error(chalk.red('\n❌ Error creating file:'), error.message);
  }
}
