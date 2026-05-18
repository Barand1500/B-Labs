# 🚀 B-Labs

**Modern Frontend Development Toolkit**

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/blabs)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Create beautiful websites in seconds with ready-made templates and powerful utilities.

---

## ✨ Features

- 🎯 **One Command Setup** - Start your project instantly with `npx blabs init`
- ⚡ **Quick File Generation** - Create files in seconds with `blabs add` (NEW!)
- 🎨 **8 Modern Templates** - Blog, Portfolio, Landing Page + 5 more coming soon!
- ⚡ **Lightning Fast** - Zero config needed. Start coding immediately
- 🌙 **Dark Mode Built-in** - Toggle dark mode with one click in all templates
- 💎 **Modern Design** - Glassmorphism, gradients, and smooth animations
- 📱 **Fully Responsive** - Mobile-first design for all screen sizes
- 🔧 **750+ Utility Classes** - Tailwind-inspired CSS utilities with grid, transform, gradients
- 🎨 **100+ SVG Icons** - Complete icon library with JavaScript API (NEW!)
- ✅ **Form Validation** - Advanced validation with 12+ rules (NEW!)
- 🎠 **Component Library** - Slider, Gallery, Pagination, Tabs, Accordion (NEW!)
- ⚡ **40+ JS Helpers** - Ready-to-use JavaScript functions
- 📦 **VS Code Integration** - Snippets and auto-opens projects

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
║  Make From Baran                 ║
╚══════════════════════════════════╝

✨ Let's build something amazing!

? Project name: hello-world
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

Choose from **8 professionally designed templates:**

### ✅ Available Now

| Template | Description | Features |
|----------|-------------|----------|
| 📝 **Blog** | Modern blog site | Glassmorphism cards, gradient hero, newsletter, 5 color themes |
| 💼 **Portfolio** | Personal portfolio | Project showcase, about section, contact form, 5 color themes |
| 🚀 **Landing Page** | Product landing | Hero section, features, testimonials, stats, 5 color themes |

### 🚧 Coming Very Soon

| Template | Description | Status |
|----------|-------------|--------|
| 💎 **SaaS** | SaaS landing page with pricing | In Development |
| 🛍️ **E-commerce** | Online store with cart | In Development |
| 📊 **Dashboard** | Admin panel with charts | In Development |
| 📰 **News** | News/magazine site | In Development |
| 🍕 **Restaurant** | Restaurant menu & reservations | In Development |

### 🎯 Blank Template

- 🎯 **Blank** - Start from scratch with utilities only

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
│   ├── blabs.css          # Auto-generated utility CSS (750+ classes!)
│   └── main.css           # Your custom styles
├── js/
│   ├── blabs.js           # Helper library (40+ functions)
│   └── main.js            # Your JavaScript code
├── .vscode/
│   └── blabs.code-snippets # VS Code snippets (b-card, b-button, etc)
├── images/                # Image assets (optional)
├── fonts/                 # Font files (optional)
├── dev-server.js          # Simple dev server with live reload
├── BLABS-GUIDE.md         # Quick reference guide (can be deleted)
├── blabs.config.js        # Configuration file
└── README.md              # Project documentation
```

**New in your project:**
- 📘 **BLABS-GUIDE.md** - Complete reference guide showing all features
- ⚡ **dev-server.js** - Simple HTTP server with live reload
- 🎨 **VS Code Snippets** - Type `b-card` and press Tab!
- ✨ All files you need to start building immediately

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

B-Labs generates **750+ utility classes** inspired by Tailwind CSS:

### Colors & Gradients
```css
.b-text-primary    .b-bg-primary    .b-border-primary
.b-text-secondary  .b-bg-secondary  .b-border-secondary
.b-text-success    .b-bg-success    .b-border-success
.b-text-danger     .b-bg-danger     .b-border-danger
.b-text-warning    .b-bg-warning    .b-border-warning

/* NEW: Gradient Backgrounds */
.b-bg-gradient-to-r   /* Left to right */
.b-bg-gradient-to-b   /* Top to bottom */
.b-from-purple-500    /* Gradient start color */
.b-to-pink-500        /* Gradient end color */
```

### Spacing
```css
.b-p-4     /* padding: 1rem */
.b-m-4     /* margin: 1rem */
.b-px-6    /* padding-left & right: 1.5rem */
.b-my-8    /* margin-top & bottom: 2rem */
```

### Layout & Grid
```css
.b-flex            .b-grid
.b-flex-col        .b-grid-cols-3
.b-items-center    .b-gap-4
.b-justify-between .b-w-full

/* NEW: Grid Utilities */
.b-grid-cols-1       /* 1 column grid */
.b-grid-cols-2       /* 2 column grid */
.b-grid-cols-3       /* 3 column grid */
.b-grid-cols-4       /* 4 column grid */
.b-grid-cols-auto-fit /* Auto-fit columns */
.md:b-grid-cols-2    /* Responsive grid */
.lg:b-grid-cols-4    /* Large screen grid */
```

### Typography
```css
.b-text-xs    .b-text-sm    .b-text-lg
.b-text-2xl   .b-text-4xl   .b-text-6xl
.b-font-bold  .b-font-semibold
.b-no-underline  .b-line-clamp-2
```

### Effects & Transform
```css
.b-shadow      .b-shadow-lg    .b-shadow-xl
.b-rounded     .b-rounded-lg   .b-rounded-full
.b-opacity-50  .b-opacity-75   .b-opacity-100

/* NEW: Transform & Effects */
.b-transform              /* Enable transforms */
.b--translate-y-2        /* Move up */
.b-scale-105      40+ utility functions**:

### DOM Manipulation
```javascript
// Wait for DOM ready
B.ready(() => {
  console.log('DOM is ready!');
});

// Query elements
const el = B.$('.my-class');        // querySelector
const els = B.$('.my-class', true); // querySelectorAll

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

// Scroll to element or position
B.scrollTo('#section', { offset: 80 });
B.scrollTo(500); // Scroll to 500px

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

// Observe elements (intersection observer)
B.observe('.animate-me', (el, isVisible) => {
  if (isVisible) el.classList.add('visible');
});
```

### Components
```javascript
// Modal
const modal = B.components.modal({
  title: 'Welcome!',
  content: '<p>Hello World</p>',
  onConfirm: () => console.log('confirmed'),
  onClose: () => console.log('closed')
});

// Toast notification
B.components.toast('Success!', { type: 'success', duration: 3000 });
B.components.toast('Error!', { type: 'danger' });
B.components.toast('Warning!', { type: 'warning' });

// Dropdown, Tabs, Accordion
B.components.dropdown('.dropdown-trigger', '.dropdown-menu');
B.components.tabs('.tabs-container');
B.components.accordion('.accordion');
```

### AJAX & HTTP
```javascript
// Fetch data
B.ajax('/api/data', { method: 'GET' })
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST request
B.ajax('/api/users', {
  method: 'POST',
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })
});
```

### Utilities
```javascript
// Debounce & Throttle (performance)
const debouncedSearch = B.debounce(search, 300);
const throttledScroll = B.throttle(handleScroll, 100);

// Copy to clipboard
await B.copyToClipboard('Hello World');
B.components.toast('Copied!', { type: 'success' });

// Local Storage with JSON support
B.storage.set('user', { name: 'John', age: 30 });
const user = B.storage.get('user'); // Returns object
B.storage.remove('user');
B.storage.clear();

// Countdown timer
B.countdown('2025-12-31', (time) => {
  console.log(`${time.days} days, ${time.hours}h ${time.minutes}m left`);
});

// Format date
B.formatDate(new Date(), 'DD/MM/YYYY'); // '10/02/2025'
B.formatDate(new Date(), 'YYYY-MM-DD HH:mm'); // '2025-02-10 14:30'

// String utilities
B.slugify('Hello World!');  // 'hello-world'
B.capitalize('hello');       // 'Hello'
B.truncate('Long text...', 10); // 'Long te...'
B.randomId(8);              // 'x7k9p2m4'

// URL helpers
B.parseQuery('?name=John&age=30'); // { name: 'John', age: '30' }
B.buildQuery({ name: 'John', age: 30 }); // 'name=John&age=30'

// Device detection
if (B.isMobile()) { /* mobile code */ }
if (B.isTablet()) { /* tablet code */ }
if (B.isDesktop()) { /* desktop code */ }

// Check viewport
if (B.isInViewport(element)) {
  // Element is visible
}

// Async wait
await B.wait(1000); // Wait 1 second

// Run function only once
const initOnce = B.once(() => console.log('Init!'));
initOnce(); // 'Init!'
initOnce(); // nothing happens

// Method chaining
B.chain(element)
  .addClass('active')
  .setStyle('color', 'red')
  .on('click', handler)
  .get();

// Array & Number helpers
B.random(1, 100);        // Random number between 1-100
B.shuffle([1, 2, 3, 4]); // Shuffled array
B.formatNumber(1234567); // '1,234,567'

// Cookies
B.setCookie('theme', 'dark', 7);
const theme = B.getCookie('theme');
B.deleteCookie('theme');

// Email validation
if (B.isEmail('test@example.com')) {
  // Valid email
}

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
``Show version
blabs --version

# Show help
blabs --help
```

### 🚀 Development Server

Every project includes a simple dev server with live reload:

```bash
# Navigate to your project
cd my-project

# Start dev server (port 3000)
node dev-server.js

# Or specify custom port
PORT=8080 node dev-server.js
```

**Features:**
- ✅ Live reload on file changes
- ✅ Watches HTML, CSS, JS files
- ✅ Auto-injects reload script
- ✅ Zero configuration needed

### 🎨 VS Code Snippets

Type these in HTML files and press TAB:

```
b-card       → Card component with image and button
b-button     → Styled button
b-hero       → Hero section with CTA buttons
b-nav        → Navigation bar
b-form       → Form with inputs and submit button
b-grid       → Responsive grid layout
b-flex       → Flex container
b-modal      → Modal trigger with script
b-toast      → Toast notification
b-dark-toggle → Dark mode toggle button
b-container  → Container with max-width
b-section    → Section with title
b-reveal     → Scroll reveal animation
b-smooth     → Smooth scroll
```

### 📖 Quick Reference Guide

Every project includes `BLABS-GUIDE.md` with:
- ✅ All CSS utility classes explained
- ✅ JavaScript helper functions guide
- ✅ Component examples (modal, toast, dropdown)
- ✅ Dark mode setup guide
- ✅ Practical code snippets
- ✅ Responsive design patterns
- ✅ Animation examples

**You can delete it anytime** - it's just for reference!opyToClipboard('Hello World');
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

# Add files/components quickly (NEW!)
blabs add html about           # Create HTML page
blabs add css custom           # Create CSS file
blabs add js utils             # Create JavaScript file
blabs add component mybutton   # Create component (interactive)
blabs add form contact         # Create form component

# Run development server (React projects)
blabs run

# Build for production (React projects)
blabs build

# Show version
blabs --version

# Show help
blabs --help
```

### ⚡ Quick File Generation

Create files instantly with the `blabs add` command:

```bash
# Create HTML pages
blabs add html contact         # → contact.html
blabs add html about           # → about.html

# Create CSS files
blabs add css animations       # → css/animations.css
blabs add css custom           # → css/custom.css

# Create JavaScript files
blabs add js utils             # → js/utils.js
blabs add js app               # → js/app.js

# Create components (interactive selection)
blabs add component mycard     # Choose: button, card, navbar, form, footer, etc.

# Create specific components directly
blabs add form signup          # → components/signup-form.html
```

**Available Components:**
- 🔘 **Button** - Interactive button with ripple effect
- 🎴 **Card** - Modern card with image and hover effects
- 📱 **Navbar** - Responsive navigation with mobile menu
- 📝 **Form** - Contact form with validation structure
- 📊 **Footer** - Multi-column footer with newsletter
- 🎠 **Slider** - Image carousel with autoplay
- 🖼️ **Gallery** - Image grid with lightbox
- 📄 **Pagination** - Page navigation component
- 📈 **Progress** - Progress bar with animation
- 📑 **Tabs** - Tabbed content interface
- 🗂️ **Accordion** - Collapsible content panels

**All components include:**
- ✅ Complete HTML structure
- ✅ Inline CSS styles
- ✅ JavaScript functionality
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Ready to use immediately

---

## � Icon Library (NEW!)

B-Labs includes **100+ SVG icons** ready to use:

### Using Icons in HTML
```html
<!-- Data attribute (auto-converts to SVG) -->
<i data-icon="home" class="b-icon-lg"></i>
<i data-icon="heart" class="b-icon-xl"></i>
<i data-icon="menu" class="b-icon-md"></i>
```

### Using Icons in JavaScript
```javascript
// Create icon element
const icon = B.icon('star', 'b-icon-lg');
document.body.appendChild(icon);

// Initialize all icons on page
B.initIcons();
```

### Icon Sizes
```css
.b-icon-xs   /* 1rem */
.b-icon-sm   /* 1.25rem */
.b-icon-md   /* 1.5rem (default) */
.b-icon-lg   /* 2rem */
.b-icon-xl   /* 3rem */
```

### Icon Categories
- **Navigation**: home, menu, close, search
- **Arrows**: arrow-right, arrow-left, arrow-up, arrow-down, chevron variants
- **Actions**: check, plus, minus, trash, edit, copy, download, upload
- **Social**: heart, star, share, bookmark
- **User**: user, users, user-plus
- **Communication**: mail, message, phone, bell
- **Media**: image, video, music, play, pause
- **Business**: briefcase, cart, credit
- **Files**: file, folder
- **Status**: info, alert, check-circle, x-circle
- **Settings**: settings, lock, unlock, eye, eye-off
- **Weather**: sun, moon, cloud
- **More**: gift, calendar, clock, map, globe, link, external, filter, refresh

---

## ✅ Form Validation (NEW!)

Advanced form validation with 12+ built-in rules:

### Basic Usage
```javascript
B.form('#myForm', {
  rules: {
    email: 'required|email',
    password: 'required|min:8',
    age: 'required|number|min:18',
    website: 'url',
    phone: 'phone'
  },
  messages: {
    email: {
      required: 'Email is required',
      email: 'Please enter a valid email'
    }
  },
  onSuccess: (data) => {
    console.log('Form submitted:', data);
  }
});
```

### Available Validators
- **required** - Field must not be empty
- **email** - Valid email format
- **min:n** - Minimum length/value
- **max:n** - Maximum length/value
- **number** - Must be a number
- **integer** - Must be an integer
- **url** - Valid URL format
- **phone** - Valid phone number
- **alpha** - Only letters
- **alphanumeric** - Letters and numbers only
- **match:field** - Must match another field
- **regex:pattern** - Custom regex pattern

### Realtime Validation
```javascript
B.form('#myForm', {
  rules: { email: 'required|email' },
  realtime: true,  // Validate on input
  showErrors: true // Show error messages
});
```

### Custom Validators
```javascript
B.addValidator('strongPassword', (value) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
}, 'Password must contain uppercase, lowercase, and number');
```

---

## 🎠 Component Library (NEW!)

Pre-built interactive components with full functionality:

### Slider / Carousel
```javascript
B.components.slider('#mySlider', {
  autoplay: true,
  interval: 3000,
  loop: true,
  navigation: true,
  pagination: true,
  transition: 'slide' // or 'fade'
});
```

### Image Gallery with Lightbox
```javascript
B.components.gallery('#myGallery', {
  lightbox: true,
  columns: 3,
  gap: '1rem'
});
```

### Pagination
```javascript
B.components.pagination('#pagination', {
  total: 100,      // Total items
  perPage: 10,     // Items per page
  current: 1,      // Current page
  maxVisible: 7,   // Max visible page numbers
  onChange: (page) => {
    console.log('Page:', page);
    // Load your data
  }
});
```

### Progress Bar
```javascript
const progress = B.components.progress('#progress', {
  value: 0,
  max: 100,
  showLabel: true,
  animated: true,
  color: '#3b82f6'
});

// Update progress
progress.setValue(75);
```

### Tabs
```javascript
B.components.tabs('#myTabs', {
  active: 0,
  onChange: (index) => {
    console.log('Active tab:', index);
  }
});
```

### Accordion
```javascript
B.components.accordion('#myAccordion', {
  multiple: false,  // Allow multiple items open
  openFirst: true   // Open first item by default
});
```

**All components feature:**
- ✅ Full keyboard navigation
- ✅ Mobile-friendly touch gestures
- ✅ Dark mode support
- ✅ Customizable styling
- ✅ Event callbacks
- ✅ Accessibility features

---

## �🎯 Examples

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
