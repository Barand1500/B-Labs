/**
 * B-Labs Component Library
 * Advanced UI components: Slider, Gallery, Pagination, Progress, Tabs, Accordion
 * Usage: B.components.slider('#slider', options)
 */

(function() {
  'use strict';

  if (!window.B) window.B = {};
  window.B.components = {};

  /**
   * Slider/Carousel Component
   * @param {string} selector - Container selector
   * @param {Object} options - Slider options
   */
  window.B.components.slider = function(selector, options = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    const config = {
      autoplay: false,
      interval: 3000,
      loop: true,
      navigation: true,
      pagination: true,
      transition: 'slide', // slide, fade
      speed: 500,
      onChange: null,
      ...options
    };

    const slides = Array.from(container.children);
    let currentIndex = 0;
    let autoplayTimer = null;

    // Wrap slides
    const track = document.createElement('div');
    track.className = 'b-slider-track';
    slides.forEach(slide => {
      slide.classList.add('b-slider-slide');
      track.appendChild(slide);
    });
    container.innerHTML = '';
    container.appendChild(track);
    container.classList.add('b-slider', `b-slider-${config.transition}`);

    // Navigation
    if (config.navigation) {
      const prevBtn = document.createElement('button');
      prevBtn.className = 'b-slider-prev';
      prevBtn.innerHTML = '‹';
      prevBtn.addEventListener('click', () => goTo(currentIndex - 1));

      const nextBtn = document.createElement('button');
      nextBtn.className = 'b-slider-next';
      nextBtn.innerHTML = '›';
      nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

      container.appendChild(prevBtn);
      container.appendChild(nextBtn);
    }

    // Pagination
    let paginationDots = [];
    if (config.pagination) {
      const pagination = document.createElement('div');
      pagination.className = 'b-slider-pagination';
      slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'b-slider-dot';
        dot.addEventListener('click', () => goTo(index));
        paginationDots.push(dot);
        pagination.appendChild(dot);
      });
      container.appendChild(pagination);
    }

    function goTo(index) {
      if (!config.loop) {
        index = Math.max(0, Math.min(index, slides.length - 1));
      } else {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
      }

      if (index === currentIndex) return;

      slides[currentIndex].classList.remove('active');
      slides[index].classList.add('active');

      if (config.transition === 'slide') {
        track.style.transform = `translateX(-${index * 100}%)`;
      }

      if (paginationDots.length) {
        paginationDots[currentIndex].classList.remove('active');
        paginationDots[index].classList.add('active');
      }

      currentIndex = index;
      if (config.onChange) config.onChange(index);
      resetAutoplay();
    }

    function resetAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      if (config.autoplay) {
        autoplayTimer = setInterval(() => goTo(currentIndex + 1), config.interval);
      }
    }

    // Initialize
    slides[0]?.classList.add('active');
    paginationDots[0]?.classList.add('active');
    resetAutoplay();

    return { goTo, next: () => goTo(currentIndex + 1), prev: () => goTo(currentIndex - 1) };
  };

  /**
   * Image Gallery with Lightbox
   * @param {string} selector - Gallery selector
   * @param {Object} options - Gallery options
   */
  window.B.components.gallery = function(selector, options = {}) {
    const gallery = document.querySelector(selector);
    if (!gallery) return;

    const config = {
      lightbox: true,
      columns: 3,
      gap: '1rem',
      ...options
    };

    gallery.classList.add('b-gallery');
    gallery.style.cssText = `
      display: grid;
      grid-template-columns: repeat(${config.columns}, 1fr);
      gap: ${config.gap};
    `;

    const images = Array.from(gallery.querySelectorAll('img'));
    let lightboxOpen = false;
    let currentImageIndex = 0;

    if (config.lightbox) {
      // Create lightbox
      const lightbox = document.createElement('div');
      lightbox.className = 'b-lightbox';
      lightbox.innerHTML = `
        <div class="b-lightbox-content">
          <button class="b-lightbox-close">×</button>
          <button class="b-lightbox-prev">‹</button>
          <img src="" alt="" class="b-lightbox-img">
          <button class="b-lightbox-next">›</button>
        </div>
      `;
      document.body.appendChild(lightbox);

      const lightboxImg = lightbox.querySelector('.b-lightbox-img');
      const closeBtn = lightbox.querySelector('.b-lightbox-close');
      const prevBtn = lightbox.querySelector('.b-lightbox-prev');
      const nextBtn = lightbox.querySelector('.b-lightbox-next');

      function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[index].src;
        lightbox.classList.add('active');
        lightboxOpen = true;
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxOpen = false;
        document.body.style.overflow = '';
      }

      function showImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentImageIndex = index;
        lightboxImg.src = images[index].src;
      }

      images.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(index));
      });

      closeBtn.addEventListener('click', closeLightbox);
      prevBtn.addEventListener('click', () => showImage(currentImageIndex - 1));
      nextBtn.addEventListener('click', () => showImage(currentImageIndex + 1));
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener('keydown', (e) => {
        if (!lightboxOpen) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentImageIndex + 1);
      });
    }
  };

  /**
   * Pagination Component
   * @param {string} selector - Pagination selector
   * @param {Object} options - Pagination options
   */
  window.B.components.pagination = function(selector, options = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    const config = {
      total: 100,
      perPage: 10,
      current: 1,
      maxVisible: 7,
      onChange: null,
      ...options
    };

    const totalPages = Math.ceil(config.total / config.perPage);
    let currentPage = config.current;

    function render() {
      container.innerHTML = '';
      container.className = 'b-pagination';

      // Previous button
      const prev = document.createElement('button');
      prev.className = 'b-pagination-btn';
      prev.textContent = '‹';
      prev.disabled = currentPage === 1;
      prev.addEventListener('click', () => goTo(currentPage - 1));
      container.appendChild(prev);

      // Page numbers
      const pages = getVisiblePages();
      pages.forEach(page => {
        if (page === '...') {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'b-pagination-ellipsis';
          ellipsis.textContent = '...';
          container.appendChild(ellipsis);
        } else {
          const btn = document.createElement('button');
          btn.className = 'b-pagination-btn';
          btn.textContent = page;
          if (page === currentPage) btn.classList.add('active');
          btn.addEventListener('click', () => goTo(page));
          container.appendChild(btn);
        }
      });

      // Next button
      const next = document.createElement('button');
      next.className = 'b-pagination-btn';
      next.textContent = '›';
      next.disabled = currentPage === totalPages;
      next.addEventListener('click', () => goTo(currentPage + 1));
      container.appendChild(next);
    }

    function getVisiblePages() {
      if (totalPages <= config.maxVisible) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const pages = [];
      const half = Math.floor(config.maxVisible / 2);
      let start = currentPage - half;
      let end = currentPage + half;

      if (start < 1) {
        start = 1;
        end = config.maxVisible;
      }
      if (end > totalPages) {
        end = totalPages;
        start = totalPages - config.maxVisible + 1;
      }

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }

      return pages;
    }

    function goTo(page) {
      if (page < 1 || page > totalPages) return;
      currentPage = page;
      render();
      if (config.onChange) config.onChange(page);
    }

    render();
    return { goTo, getCurrentPage: () => currentPage };
  };

  /**
   * Progress Bar
   * @param {string} selector - Progress bar selector
   * @param {Object} options - Progress options
   */
  window.B.components.progress = function(selector, options = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    const config = {
      value: 0,
      max: 100,
      showLabel: true,
      animated: true,
      color: '#3b82f6',
      ...options
    };

    container.className = 'b-progress';
    const bar = document.createElement('div');
    bar.className = 'b-progress-bar';
    if (config.animated) bar.classList.add('b-progress-animated');
    bar.style.backgroundColor = config.color;

    const label = document.createElement('span');
    label.className = 'b-progress-label';

    container.appendChild(bar);
    if (config.showLabel) container.appendChild(label);

    function setValue(value, animated = true) {
      const percentage = Math.min(100, Math.max(0, (value / config.max) * 100));
      bar.style.width = `${percentage}%`;
      if (config.showLabel) label.textContent = `${Math.round(percentage)}%`;
    }

    setValue(config.value);
    return { setValue, getValue: () => config.value };
  };

  /**
   * Tabs Component
   * @param {string} selector - Tabs container selector
   * @param {Object} options - Tabs options
   */
  window.B.components.tabs = function(selector, options = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    const config = {
      active: 0,
      onChange: null,
      ...options
    };

    const tabsList = container.querySelector('[data-tabs]');
    const tabsPanels = container.querySelectorAll('[data-tab-panel]');
    const tabs = Array.from(tabsList.children);

    let activeIndex = config.active;

    function activate(index) {
      tabs[activeIndex]?.classList.remove('active');
      tabsPanels[activeIndex]?.classList.remove('active');

      tabs[index]?.classList.add('active');
      tabsPanels[index]?.classList.add('active');

      activeIndex = index;
      if (config.onChange) config.onChange(index);
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(index));
    });

    activate(activeIndex);
    return { activate, getActive: () => activeIndex };
  };

  /**
   * Accordion Component
   * @param {string} selector - Accordion selector
   * @param {Object} options - Accordion options
   */
  window.B.components.accordion = function(selector, options = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    const config = {
      multiple: false,
      openFirst: true,
      ...options
    };

    const items = Array.from(container.querySelectorAll('[data-accordion-item]'));
    
    items.forEach((item, index) => {
      const header = item.querySelector('[data-accordion-header]');
      const content = item.querySelector('[data-accordion-content]');
      
      if (!header || !content) return;

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        if (!config.multiple) {
          items.forEach(i => {
            i.classList.remove('active');
            i.querySelector('[data-accordion-content]').style.maxHeight = null;
          });
        }

        if (isActive) {
          item.classList.remove('active');
          content.style.maxHeight = null;
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });

      if (config.openFirst && index === 0) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  };

  // Component Styles
  const style = document.createElement('style');
  style.textContent = `
    /* Slider Styles */
    .b-slider {
      position: relative;
      overflow: hidden;
      width: 100%;
    }
    .b-slider-track {
      display: flex;
      transition: transform 0.5s ease;
    }
    .b-slider-slide {
      min-width: 100%;
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    .b-slider-slide.active {
      opacity: 1;
    }
    .b-slider-fade .b-slider-track {
      position: relative;
    }
    .b-slider-fade .b-slider-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .b-slider-prev, .b-slider-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
      padding: 1rem;
      cursor: pointer;
      font-size: 2rem;
      z-index: 10;
    }
    .b-slider-prev { left: 1rem; }
    .b-slider-next { right: 1rem; }
    .b-slider-pagination {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.5rem;
      z-index: 10;
    }
    .b-slider-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255,255,255,0.5);
      border: none;
      cursor: pointer;
      padding: 0;
    }
    .b-slider-dot.active {
      background: white;
    }

    /* Lightbox Styles */
    .b-lightbox {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      z-index: 9999;
      align-items: center;
      justify-content: center;
    }
    .b-lightbox.active {
      display: flex;
    }
    .b-lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }
    .b-lightbox-img {
      max-width: 100%;
      max-height: 90vh;
      display: block;
    }
    .b-lightbox-close, .b-lightbox-prev, .b-lightbox-next {
      position: absolute;
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 1rem;
      cursor: pointer;
      font-size: 2rem;
    }
    .b-lightbox-close { top: -3rem; right: 0; }
    .b-lightbox-prev { left: -4rem; top: 50%; transform: translateY(-50%); }
    .b-lightbox-next { right: -4rem; top: 50%; transform: translateY(-50%); }

    /* Pagination Styles */
    .b-pagination {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .b-pagination-btn {
      padding: 0.5rem 1rem;
      border: 1px solid #e5e7eb;
      background: white;
      cursor: pointer;
      border-radius: 0.25rem;
    }
    .b-pagination-btn:hover:not(:disabled) {
      background: #f3f4f6;
    }
    .b-pagination-btn.active {
      background: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }
    .b-pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .b-pagination-ellipsis {
      padding: 0.5rem;
    }

    /* Progress Bar Styles */
    .b-progress {
      position: relative;
      width: 100%;
      height: 1.5rem;
      background: #e5e7eb;
      border-radius: 0.25rem;
      overflow: hidden;
    }
    .b-progress-bar {
      height: 100%;
      transition: width 0.3s ease;
      border-radius: 0.25rem;
    }
    .b-progress-animated {
      animation: progress-animate 2s ease-in-out infinite;
    }
    @keyframes progress-animate {
      0% { background-position: 0 0; }
      100% { background-position: 40px 0; }
    }
    .b-progress-label {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.875rem;
      font-weight: 600;
      color: #1f2937;
    }

    /* Dark mode */
    .dark .b-pagination-btn {
      background: #1f2937;
      border-color: #374151;
      color: white;
    }
    .dark .b-pagination-btn:hover:not(:disabled) {
      background: #374151;
    }
    .dark .b-progress {
      background: #374151;
    }
  `;

  if (typeof document !== 'undefined') {
    window.B.ready(() => {
      document.head.appendChild(style);
    });
  }

})();
