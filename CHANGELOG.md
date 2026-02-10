# Changelog

All notable changes to B-Labs will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-10

### Added
- 🎉 Initial release of B-Labs
- ✨ CLI tool with `init`, `run`, and `build` commands
- 🎨 CSS Utility Engine - Tailwind-like utility classes
- ⚡ JavaScript Helper Library with ready-to-use functions
- 📦 Project scaffolding for HTML and React
- 🔧 Configurable via `blabs.config.js`
- 📖 Comprehensive documentation and examples
- 🚀 Support for both utility-first and classic CSS approaches

### Features
- **CLI Commands:**
  - `npx blabs init` - Initialize new project with interactive prompts
  - `blabs run` - Run development server (React projects)
  - `blabs build` - Build for production (React projects)

- **CSS Utilities:**
  - Color utilities (bg, text, border)
  - Spacing utilities (margin, padding)
  - Typography utilities (font size, weight, alignment)
  - Layout utilities (flexbox, grid, display)
  - Border and shadow utilities
  - Position and cursor utilities
  - Transition and hover effects

- **JavaScript Helpers:**
  - `B.ready()` - DOM ready handler
  - `B.toggle()` - Toggle element visibility/classes
  - `B.lazyImages()` - Lazy load images
  - `B.scrollSpy()` - Navigation scroll spy
  - `B.smoothScroll()` - Smooth anchor scrolling
  - `B.formValidation()` - Simple form validation
  - `B.debounce()` - Function debouncing
  - `B.throttle()` - Function throttling
  - `B.$()` - querySelector shorthand
  - `B.ajax()` - Fetch API wrapper
  - Utility functions for cookies, numbers, strings, etc.

- **Project Types:**
  - HTML projects with vanilla JS
  - React projects with Vite

- **Customization:**
  - Configurable colors
  - Configurable spacing scale
  - Configurable typography scale
  - Auto-generates CSS based on config

### Documentation
- README.md with complete usage guide
- EXAMPLES.md with practical examples
- CONTRIBUTING.md for contributors
- Project template README for generated projects

### Dependencies
- chalk ^5.3.0 - Terminal styling
- commander ^11.1.0 - CLI framework
- inquirer ^9.2.12 - Interactive prompts
- ora ^8.0.1 - Terminal spinners
- fs-extra ^11.2.0 - Enhanced file system

---

## Future Plans

### [1.1.0] - Planned
- 🎯 Vue.js support
- 🎨 More utility classes (transforms, filters, etc.)
- 📱 Mobile-first responsive utilities
- 🌙 Dark mode utilities
- 🧩 Component presets
- 📊 Project analytics

### [1.2.0] - Planned
- 🔌 Plugin system
- 🎨 Theme support
- 📦 Component library
- 🚀 Performance optimizations
- 🧪 Testing utilities

### [2.0.0] - Future
- 🔷 TypeScript support
- 🎨 Design system builder
- 📱 Mobile app templates
- 🌐 i18n support
- 🔧 VS Code extension

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) file for details.
