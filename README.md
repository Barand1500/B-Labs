# 🚀 B-Labs

**Modern Frontend Development Toolkit**

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/blabs)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Create beautiful websites in seconds with ready-made templates and powerful utilities.

---

## ✨ Features

- 🎯 **One Command Setup** - Start your project instantly with `npx blabs init`
- 🎨 **17+ Modern Templates** - Blog, SaaS, Portfolio, E-commerce, Dashboard and more!
- ⚡ **Lightning Fast** - Zero config needed. Start coding immediately
- 🌙 **Dark Mode Built-in** - Toggle dark mode with one click in all templates
- 💎 **Modern Design** - Glassmorphism, gradients, and smooth animations
- 📱 **Fully Responsive** - Mobile-first design for all screen sizes
- 🔧 **640+ Utility Classes** - Tailwind-inspired CSS utilities
- ⚡ **20+ JS Helpers** - Ready-to-use JavaScript functions
- 📦 **VS Code Integration** - Automatically opens projects in VS Code

---

## 🚀 Quick Start

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
║  🚀 B-Labs v1.0.0                ║
║  Modern Frontend Toolkit         ║
╚══════════════════════════════════╝

✨ Let's build something amazing!

? Project name: my-awesome-site
? Project type: 📄 HTML - Classic HTML/CSS/JS
? Choose a template: 💎 SaaS - Professional landing page
? Enable dark mode support? Yes
? Create assets folders? Yes
? Open project in VS Code? Yes

✔ Project structure created!
✔ CSS utilities generated!
✔ Opening in VS Code...

╔════════════════════════════════════╗
║  ✨ Project Created Successfully!  ║
╚════════════════════════════════════╝
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

### 📝 Main Templates

| Template | Description | Features |
|----------|-------------|----------|
| 📝 **Blog** | Modern blog site | Glassmorphism cards, gradient hero, newsletter |
| 💎 **SaaS** | SaaS landing page | Pricing tables, features grid, CTA sections |
| 💼 **Portfolio** | Personal portfolio | Project showcase, about section, contact form |
| 🚀 **Landing** | Product landing | Hero section, features, testimonials |
| 🛍️ **E-commerce** | Online store | Product grid, shopping cart, checkout |
| 📰 **News** | News/magazine | Article grid, categories, trending |
| 📊 **Dashboard** | Admin panel | Sidebar, charts, stats cards, tables |

### 🎯 Additional Templates

- 🍕 **Restaurant** - Cafe/restaurant website with menu
- 🎨 **Agency** - Creative agency portfolio
- 📄 **Resume** - Professional CV/resume
- 🎭 **Event** - Conference/event landing page
- 📸 **Photography** - Photo portfolio gallery
- 🎵 **Music** - Band/artist promotional page
- 🏠 **Real Estate** - Property listings
- 💪 **Fitness** - Gym/fitness center
- 🎓 **Education** - Online courses platform
- 🎯 **Blank** - Start from scratch

**All templates include:**
- ✅ Dark mode toggle
- ✅ Responsive design
- ✅ Modern animations
- ✅ Glassmorphism effects
- ✅ Gradient backgrounds

---

## 📁 Project Structure

### HTML Project

```
my-project/
├── index.html              # Your main HTML file
├── css/
│   ├── blabs.css          # Auto-generated utility CSS (640+ lines!)
│   └── main.css           # Your custom styles
├── js/
│   ├── blabs.js           # Helper library (20+ functions)
│   └── main.js            # Your JavaScript code
├── images/                # Image assets (optional)
├── fonts/                 # Font files (optional)
├── blabs.config.js        # Configuration file
└── README.md              # Project documentation
```

### React Project

```
my-project/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── utils/
│       └── blabs.js       # B-Labs utilities
├── public/
├── blabs.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 CSS Utility Classes

B-Labs generates **640+ utility classes** inspired by Tailwind CSS:

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

## 💻 JavaScript Helpers

B-Labs includes **20+ utility functions**:

### DOM Manipulation
```javascript
// Wait for DOM ready
B.ready(() => {
  console.log('DOM is ready!');
});

// Query elements
B.q('.my-class')    // querySelector
B.qa('.my-class')   // querySelectorAll

// Toggle visibility
B.toggle('.menu-button', '.menu');
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

### Effects & Animations
```javascript
// Smooth scroll
B.smoothScroll('a[href^="#"]', 80);

// Lazy load images
B.lazyImages();

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

// Dropdown, Tabs, Accordion
B.components.dropdown('.dropdown-trigger', '.dropdown-menu');
B.components.tabs('.tabs-container');
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
// Debounce & Throttle
const debouncedSearch = B.debounce(search, 300);
const throttledScroll = B.throttle(handleScroll, 100);

// Check viewport
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

**Result:** Professional SaaS landing page with hero section, features grid, pricing table, and dark mode toggle.

### Create a Blog

```bash
npx blabs init my-blog
# Choose: Blog template
```

**Result:** Modern blog with glassmorphism cards, gradient hero, post grid, and newsletter signup.

### Create a Dashboard

```bash
npx blabs init admin-panel
# Choose: Dashboard template
```

**Result:** Admin dashboard with sidebar navigation, stats cards, charts, and tables.

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

## ⭐ Star Us!

If you found this helpful, please give it a star on GitHub!

**Made with ❤️ by [Barand1500](https://github.com/Barand1500)**

[Report Bug](https://github.com/Barand1500/B-Labs/issues) • [Request Feature](https://github.com/Barand1500/B-Labs/issues)
