// Your custom JavaScript

B.ready(() => {
  console.log('🚀 Your B-Labs project is ready!');
  
  // Dark mode toggle
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
  
  // Example: Toggle menu
  // B.toggle('.menu-btn', '.menu');
  
  // Example: Lazy load images
  B.lazyImages();
  
  // Example: Smooth scroll
  // B.smoothScroll('a[href^="#"]', 80);
  
  // Example: Scroll reveal
  // B.scrollReveal('.animate-element', { animation: 'fadeIn', threshold: 0.1 });
});
