<div align="center">

# 🚀 B-Labs

### Modern Frontend Development Toolkit

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/blabs)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Features](#-features) • [Quick Start](#-quick-start) • [Templates](#-templates) • [Documentation](#-documentation)

---

*Create beautiful websites in seconds with ready-made templates and powerful utilities*

<img src="https://via.placeholder.com/800x400/667eea/ffffff?text=B-Labs+Modern+Frontend+Toolkit" alt="B-Labs Demo" width="100%"/>

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 **One Command Setup**
```bash
npx blabs init
```
Start your project instantly with interactive CLI

</td>
<td width="50%">

### 🎨 **17+ Modern Templates**
Blog, SaaS, Portfolio, E-commerce, Dashboard and more!

</td>
</tr>
<tr>
<td>

### ⚡ **Lightning Fast**
Zero config needed. Start coding immediately.

</td>
<td>

### 🌙 **Dark Mode Built-in**
Toggle dark mode with one click in all templates

</td>
</tr>
<tr>
<td>

### 💎 **Modern Design**
Glassmorphism, gradients, and smooth animations

</td>
<td>

### 📱 **Fully Responsive**
Mobile-first design for all screen sizes

</td>
</tr>
</table>

---

## � Quick Start

### Installation

```bash
# Create a new project
npx blabs init my-awesome-project

# Or use globally
npm install -g blabs
blabs init my-project
```

### Interactive Setup

The CLI will guide you through:

```
╔══════════════════════════════════╗
║   B-Labs v1.0.0                  ║
║   Modern Frontend Toolkit        ║
╚══════════════════════════════════╝

🚀 Welcome to B-Labs!

? Project name: my-awesome-site
? Project type: 📄 HTML - Classic HTML/CSS/JS
? Choose a template: 💎 SaaS - Professional landing page
? Enable dark mode support? Yes
? Create assets folders (images, fonts)? Yes
? Open project in VS Code? Yes

✔ Project structure created!
✔ CSS utilities generated!
✔ Opening in VS Code...

✨ Project created successfully!
```

### That's it! 🎉

Your project is ready with:
- ✅ Modern HTML/CSS/JS structure
- ✅ Pre-built components
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Beautiful animations
- ✅ Opens automatically in VS Code

---

## 🎨 Templates

Choose from **17+ professionally designed templates:**

<table>
<tr>
<td align="center" width="33%">
<img src="https://via.placeholder.com/300x200/667eea/ffffff?text=Blog+Template" width="100%"/><br/>
<b>📝 Blog</b><br/>
Modern blog with glassmorphism cards
</td>
<td align="center" width="33%">
<img src="https://via.placeholder.com/300x200/4facfe/ffffff?text=SaaS+Landing" width="100%"/><br/>
<b>💎 SaaS</b><br/>
Professional landing page with pricing
</td>
<td align="center" width="33%">
<img src="https://via.placeholder.com/300x200/f093fb/ffffff?text=Portfolio" width="100%"/><br/>
<b>💼 Portfolio</b><br/>
Showcase your work beautifully
</td>
</tr>
<tr>
<td align="center">
<img src="https://via.placeholder.com/300x200/a8edea/ffffff?text=E-commerce" width="100%"/><br/>
<b>🛍️ E-commerce</b><br/>
Online store with product grid
</td>
<td align="center">
<img src="https://via.placeholder.com/300x200/fa709a/ffffff?text=Dashboard" width="100%"/><br/>
<b>📊 Dashboard</b><br/>
Admin panel with charts
</td>
<td align="center">
<img src="https://via.placeholder.com/300x200/fed6e3/ffffff?text=Landing" width="100%"/><br/>
<b>🚀 Landing Page</b><br/>
Product showcase page
</td>
</tr>
</table>

**And 11 more templates:**
- 🍕 **Restaurant** - Cafe/restaurant website
- 🎨 **Agency** - Creative agency portfolio
- 📄 **Resume** - Professional CV/resume
- 🎭 **Event** - Conference/event page
- 📸 **Photography** - Photo portfolio
- 🎵 **Music** - Band/artist page
- 🏠 **Real Estate** - Property listings
- 💪 **Fitness** - Gym/fitness center
- 🎓 **Education** - Online courses
- 📰 **News** - News/magazine site
- 🎯 **Blank** - Start from scratch

---

## 📁 Project Structure

### HTML Project

```
my-project/
├── 📄 index.html          # Your main HTML file (from template)
├── 📁 css/
│   ├── blabs.css          # Auto-generated utility CSS (640+ lines!)
│   └── main.css           # Your custom styles
├── 📁 js/
│   ├── blabs.js           # Helper library (20+ functions)
│   └── main.js            # Your JavaScript code
├── 📁 images/             # Image assets
├── 📁 fonts/              # Font files
├── ⚙️ blabs.config.js     # Configuration file
└── 📖 README.md           # Project documentation
```

### React Project (with Vite)

```
my-project/
├── 📁 src/
│   ├── App.jsx
│   ├── main.jsx
│   └── utils/
│       └── blabs.js       # B-Labs utilities
├── 📁 public/
├── ⚙️ blabs.config.js
├── ⚙️ vite.config.js
└── 📦 package.json
```

---

## 🎨 CSS Utility Classes

B-Labs generates **640+ utility classes** inspired by Tailwind CSS but simpler:

### Colors
```css
.b-text-primary    .b-bg-primary    .b-border-primary
.b-text-secondary  .b-bg-secondary  .b-border-secondary
.b-text-success    .b-bg-success    .b-border-success
.b-text-danger     .b-bg-danger     .b-border-danger
.b-text-warning    .b-bg-warning    .b-border-warning
```

### Spacing
```css
.b-p-4     /* padding: 1rem */
.b-m-4     /* margin: 1rem */
.b-px-6    /* padding-left & right: 1.5rem */
.b-my-8    /* margin-top & bottom: 2rem */
```

### Layout
```css
.b-flex            .b-grid
.b-flex-col        .b-grid-cols-3
.b-items-center    .b-gap-4
.b-justify-between .b-w-full
```

### Typography
```css
.b-text-xs    .b-text-sm    .b-text-lg
.b-text-2xl   .b-text-4xl   .b-text-6xl
.b-font-bold  .b-font-semibold
```

### Effects
```css
.b-shadow      .b-shadow-lg    .b-shadow-xl
.b-rounded     .b-rounded-lg   .b-rounded-full
.b-opacity-50  .b-opacity-75   .b-opacity-100
```

### Animations
```css
.b-animate-fade-in      .b-animate-slide-in-up
.b-animate-scale-in     .b-animate-bounce
.b-transition           .b-hover-opacity
```

### Responsive
```css
.md:b-flex          /* flex on medium screens+ */
.lg:b-grid-cols-3   /* 3 columns on large screens+ */
.b-hidden md:b-block /* hidden on mobile, visible on desktop */
```

---

## 💻 JavaScript  Helpers

B-Labs includes **20+ utility functions** in `blabs.js`:

### DOM Manipulation
```javascript
// Wait for DOM ready
B.ready(() => {
  console.log('DOM is ready!');
});

// Query elements (simplified)
B.q('.my-class')    // querySelector
B.qa('.my-class')   // querySelectorAll

// Toggle classes
B.toggleClass(element, 'active');

// Toggle visibility
B.toggle('.menu-button', '.menu');
```

### Effects & Animations
```javascript
// Smooth scroll
B.smoothScroll('a[href^="#"]', 80); // 80px offset

// Lazy load images
B.lazyImages(); // auto-loads images with data-src

// Scroll reveal animations
B.scrollReveal('.card', {
  animation: 'fadeIn',
  threshold: 0.1
});

// Animate element
B.animate('.element', 'slideInUp', {
  duration: 1000,
  delay: 200
});
```

### Dark Mode
```javascript
// Initialize dark mode
B.darkMode.init();

// Toggle dark mode
B.darkMode.toggle();

// Enable/disable
B.darkMode.enable();
B.darkMode.disable();

// Check status
const isDark = B.darkMode.isEnabled();
```

### Components
```javascript
// Modal
B.components.modal({
  title: 'Welcome!',
  content: '<p>Hello World</p>',
  onClose: () => console.log('closed')
});

// Toast notification
B.components.toast('Success!', {
  type: 'success',
  duration: 3000
});

// Dropdown menu
B.components.dropdown('.dropdown-trigger', '.dropdown-menu');

// Tabs
B.components.tabs('.tabs-container');

// Accordion
B.components.accordion('.accordion');
```

### AJAX
```javascript
// GET request
B.get('https://api.example.com/data')
  .then(data => console.log(data));

// POST request
B.post('https://api.example.com/users', {
  name: 'John',
  email: 'john@example.com'
});
```

### Utilities
```javascript
// Debounce function
const debouncedSearch = B.debounce(search, 300);

// Throttle function
const throttledScroll = B.throttle(handleScroll, 100);

// Check if element is in viewport
if (B.isInViewport(element)) {
  // Do something
}

// Copy to clipboard
B.copyToClipboard('Hello World');
```

---

## ⚙️ Configuration

Customize your project with `blabs.config.js`:

```javascript
export default {
  projectType: 'html',
  cssType: 'utility',
  darkMode: true,
  
  // Color palette
  colors: {
    primary: '#4f46e5',
    secondary: '#06b6d4',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    dark: '#1f2937',
    light: '#f3f4f6'
  },
  
  // Spacing scale
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem'
  },
  
  // Typography scale
  typography: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '4xl': '2.25rem',
    '6xl': '4rem'
  }
};
```

---

## 📖 CLI Commands

```bash
# Initialize new project
blabs init [project-name]

# Run development server (React projects)
blabs run

# Build for production (React projects)
blabs build

# Show version
blabs --version

# Show help
blabs --help
```

---

## 🎯 Examples

### Create a SaaS Landing Page

```bash
npx blabs init my-saas
# Choose: SaaS template
# Enable dark mode
# Open in VS Code
```

Result: Professional SaaS landing page with:
- Hero section with gradient
- Features grid
- Pricing table
- Testimonials
- CTA section
- Dark mode toggle

### Create a Blog

```bash
npx blabs init my-blog
# Choose: Blog template
```

Result: Modern blog with:
- Glassmorphism cards
- Gradient hero
- Post grid
- Newsletter signup
- Responsive design

### Create a Dashboard

```bash
npx blabs init admin-panel
# Choose: Dashboard template
```

Result: Admin dashboard with:
- Sidebar navigation
- Stats cards
- Charts
- Recent activity
- Orders table

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

MIT License - see the [LICENSE](LICENSE) file for details

---

## 👨‍💻 Author

**Baran** - [@Barand1500](https://github.com/Barand1500)

---

## 🙏 Acknowledgments

- Inspired by Tailwind CSS
- Built with ❤️ for developers
- Special thanks to the open-source community

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ by [Barand1500](https://github.com/Barand1500)

[Report Bug](https://github.com/Barand1500/B-Labs/issues) • [Request Feature](https://github.com/Barand1500/B-Labs/issues)

</div>
