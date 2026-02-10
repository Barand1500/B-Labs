/**
 * B-Labs JavaScript Helper Library
 * Version: 1.0.0
 * 
 * Simple, powerful, ready-to-use JavaScript utilities
 * for modern web development
 * 
 * Usage:
 *   <script src="js/blabs.js"></script>
 *   <script>
 *     B.ready(() => {
 *       B.toggle('.menu-btn', '.menu')
 *       B.lazyImages()
 *     })
 *   </script>
 */

(function(window) {
  'use strict';

  /**
   * B-Labs namespace
   */
  const B = {
    version: '1.0.0',
    
    /**
     * DOM Ready - Execute callback when DOM is fully loaded
     * @param {Function} callback - Function to execute
     * 
     * @example
     * B.ready(() => {
     *   console.log('DOM is ready!')
     * })
     */
    ready(callback) {
      if (document.readyState !== 'loading') {
        callback();
      } else {
        document.addEventListener('DOMContentLoaded', callback);
      }
    },

    /**
     * Toggle Element - Toggle visibility/class of target when trigger is clicked
     * @param {string} triggerSelector - CSS selector for trigger element
     * @param {string} targetSelector - CSS selector for target element
     * @param {string} className - Class to toggle (default: 'active')
     * 
     * @example
     * B.toggle('.menu-btn', '.menu')
     * B.toggle('.dropdown-btn', '.dropdown-menu', 'show')
     */
    toggle(triggerSelector, targetSelector, className = 'active') {
      const triggers = document.querySelectorAll(triggerSelector);
      const targets = document.querySelectorAll(targetSelector);

      triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          
          targets.forEach(target => {
            target.classList.toggle(className);
          });
          
          trigger.classList.toggle(className);
        });
      });
    },

    /**
     * Lazy Load Images - Load images when they enter viewport
     * Add 'data-src' attribute to images instead of 'src'
     * 
     * @param {string} selector - CSS selector for lazy images (default: '[data-src]')
     * 
     * @example
     * HTML: <img data-src="image.jpg" alt="Description">
     * JS: B.lazyImages()
     */
    lazyImages(selector = '[data-src]') {
      const images = document.querySelectorAll(selector);
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px'
        });

        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for older browsers
        images.forEach(img => {
          img.src = img.dataset.src;
          img.classList.add('loaded');
        });
      }
    },

    /**
     * Scroll Spy - Highlight navigation items based on scroll position
     * @param {string} navSelector - CSS selector for navigation links
     * @param {string} sectionSelector - CSS selector for sections
     * @param {string} activeClass - Active class name (default: 'active')
     * @param {number} offset - Offset from top in pixels (default: 100)
     * 
     * @example
     * B.scrollSpy('.nav a', 'section', 'active', 100)
     */
    scrollSpy(navSelector, sectionSelector, activeClass = 'active', offset = 100) {
      const navLinks = document.querySelectorAll(navSelector);
      const sections = document.querySelectorAll(sectionSelector);

      if (sections.length === 0 || navLinks.length === 0) {
        console.warn('B-Labs: No sections or navigation links found for scroll spy');
        return;
      }

      window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (window.pageYOffset >= (sectionTop - offset)) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove(activeClass);
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add(activeClass);
          }
        });
      });
    },

    /**
     * Smooth Scroll - Smooth scroll to anchor links
     * @param {string} selector - CSS selector for anchor links (default: 'a[href^="#"]')
     * @param {number} offset - Offset from top in pixels (default: 0)
     * 
     * @example
     * B.smoothScroll('a[href^="#"]', 80)
     */
    smoothScroll(selector = 'a[href^="#"]', offset = 0) {
      const links = document.querySelectorAll(selector);
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          
          if (href === '#') return;
          
          e.preventDefault();
          const target = document.querySelector(href);
          
          if (target) {
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    },

    /**
     * Form Validation - Simple form validation
     * @param {string} formSelector - CSS selector for form
     * @param {Object} options - Validation options
     * 
     * @example
     * B.formValidation('#myForm', {
     *   onSuccess: (data) => console.log('Valid!', data),
     *   onError: (errors) => console.log('Errors:', errors)
     * })
     */
    formValidation(formSelector, options = {}) {
      const form = document.querySelector(formSelector);
      if (!form) return;

      const defaults = {
        onSuccess: () => {},
        onError: () => {},
        errorClass: 'error',
        successClass: 'success'
      };

      const settings = { ...defaults, ...options };

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const errors = [];

        // Check required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
          field.classList.remove(settings.errorClass);
          
          if (!field.value.trim()) {
            errors.push({
              field: field.name,
              message: `${field.name} is required`
            });
            field.classList.add(settings.errorClass);
          }
        });

        // Email validation
        const emailFields = form.querySelectorAll('[type="email"]');
        emailFields.forEach(field => {
          if (field.value && !B.isEmail(field.value)) {
            errors.push({
              field: field.name,
              message: 'Invalid email format'
            });
            field.classList.add(settings.errorClass);
          }
        });

        if (errors.length > 0) {
          settings.onError(errors);
        } else {
          settings.onSuccess(data);
        }
      });
    },

    /**
     * Debounce - Limit function execution rate
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     * 
     * @example
     * const debouncedSearch = B.debounce(() => {
     *   console.log('Searching...')
     * }, 300)
     */
    debounce(func, wait = 300) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    /**
     * Throttle - Execute function at most once per specified time period
     * @param {Function} func - Function to throttle
     * @param {number} limit - Time limit in milliseconds
     * @returns {Function} Throttled function
     * 
     * @example
     * window.addEventListener('scroll', B.throttle(() => {
     *   console.log('Scrolling...')
     * }, 100))
     */
    throttle(func, limit = 300) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    /**
     * Get Element(s) - Shorter querySelector
     * @param {string} selector - CSS selector
     * @param {boolean} all - Get all elements (default: false)
     * @returns {Element|NodeList} Element or NodeList
     * 
     * @example
     * const btn = B.$('.button')
     * const items = B.$('.item', true)
     */
    $(selector, all = false) {
      return all 
        ? document.querySelectorAll(selector)
        : document.querySelector(selector);
    },

    /**
     * AJAX Request - Simple fetch wrapper
     * @param {string} url - Request URL
     * @param {Object} options - Fetch options
     * @returns {Promise} Fetch promise
     * 
     * @example
     * B.ajax('/api/data', { method: 'POST', body: JSON.stringify(data) })
     *   .then(response => console.log(response))
     */
    async ajax(url, options = {}) {
      const defaults = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const config = { ...defaults, ...options };

      try {
        const response = await fetch(url, config);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
      } catch (error) {
        console.error('B-Labs AJAX Error:', error);
        throw error;
      }
    },

    /**
     * Utilities
     */

    // Check if value is email
    isEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },

    // Check if element is in viewport
    isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },

    // Get cookie
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },

    // Set cookie
    setCookie(name, value, days = 7) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/`;
    },

    // Delete cookie
    deleteCookie(name) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    },

    // Random number between min and max
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Shuffle array
    shuffle(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    },

    // Format number with commas
    formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    // Truncate string
    truncate(str, length = 50, ending = '...') {
      return str.length > length 
        ? str.substring(0, length - ending.length) + ending
        : str;
    },

    /**
     * ==========================================
     * DARK MODE SYSTEM
     * ==========================================
     */
    
    /**
     * Dark Mode - Toggle dark mode
     * @param {string} storageKey - LocalStorage key (default: 'b-dark-mode')
     * 
     * @example
     * B.darkMode.toggle()
     * B.darkMode.enable()
     * B.darkMode.disable()
     */
    darkMode: {
      storageKey: 'b-dark-mode',
      
      init(storageKey = 'b-dark-mode') {
        this.storageKey = storageKey;
        const isDark = localStorage.getItem(this.storageKey) === 'true';
        if (isDark) {
          document.documentElement.classList.add('dark');
        }
      },
      
      toggle() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem(this.storageKey, isDark);
        return isDark;
      },
      
      enable() {
        document.documentElement.classList.add('dark');
        localStorage.setItem(this.storageKey, 'true');
      },
      
      disable() {
        document.documentElement.classList.remove('dark');
        localStorage.setItem(this.storageKey, 'false');
      },
      
      isEnabled() {
        return document.documentElement.classList.contains('dark');
      }
    },

    /**
     * ==========================================
     * ANIMATION SYSTEM
     * ==========================================
     */

    /**
     * Animate - Animate element with predefined animations
     * @param {string} selector - CSS selector
     * @param {string} animation - Animation name
     * @param {Object} options - Animation options
     * 
     * @example
     * B.animate('.card', 'fadeIn', { duration: 500 })
     */
    animate(selector, animation, options = {}) {
      const elements = typeof selector === 'string' 
        ? document.querySelectorAll(selector)
        : [selector];
      
      const defaults = {
        duration: 300,
        delay: 0,
        easing: 'ease',
        onComplete: () => {}
      };
      
      const settings = { ...defaults, ...options };
      
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('b-animate', `b-animate-${animation}`);
          element.style.animationDuration = `${settings.duration}ms`;
          element.style.animationTimingFunction = settings.easing;
          
          element.addEventListener('animationend', () => {
            settings.onComplete(element);
          }, { once: true });
        }, settings.delay * index);
      });
    },

    /**
     * Scroll Reveal - Reveal elements on scroll
     * @param {string} selector - CSS selector
     * @param {Object} options - Reveal options
     * 
     * @example
     * B.scrollReveal('.card', { animation: 'fadeIn', threshold: 0.2 })
     */
    scrollReveal(selector, options = {}) {
      const defaults = {
        animation: 'fadeIn',
        threshold: 0.1,
        rootMargin: '0px',
        once: true
      };
      
      const settings = { ...defaults, ...options };
      const elements = document.querySelectorAll(selector);
      
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('b-animate', `b-animate-${settings.animation}`);
              if (settings.once) {
                observer.unobserve(entry.target);
              }
            }
          });
        }, {
          threshold: settings.threshold,
          rootMargin: settings.rootMargin
        });
        
        elements.forEach(el => observer.observe(el));
      }
    },

    /**
     * ==========================================
     * COMPONENT SYSTEM
     * ==========================================
     */
    
    components: {
      /**
       * Modal - Create and control modals
       * @param {Object} options - Modal configuration
       * 
       * @example
       * B.components.modal({
       *   title: 'Welcome',
       *   content: 'Hello world!',
       *   onConfirm: () => console.log('Confirmed')
       * })
       */
      modal(options = {}) {
        const defaults = {
          title: 'Modal',
          content: '',
          confirmText: 'OK',
          cancelText: 'Cancel',
          showCancel: true,
          onConfirm: () => {},
          onCancel: () => {},
          closeOnBackdrop: true
        };
        
        const settings = { ...defaults, ...options };
        
        // Create modal HTML
        const modalHTML = `
          <div class="b-modal-backdrop b-fixed b-w-screen b-h-screen b-bg-dark" style="top:0;left:0;background:rgba(0,0,0,0.5);z-index:9999;">
            <div class="b-flex b-items-center b-justify-center b-h-full b-p-4">
              <div class="b-modal-content b-bg-white b-rounded-lg b-shadow-lg b-p-6 b-max-w-md b-w-full b-animate b-animate-scale-in" style="max-width:500px;">
                <h3 class="b-text-2xl b-font-bold b-mb-4">${settings.title}</h3>
                <div class="b-mb-6">${settings.content}</div>
                <div class="b-flex b-gap-3 b-justify-end">
                  ${settings.showCancel ? `<button class="b-modal-cancel b-px-4 b-py-2 b-rounded b-border b-cursor-pointer b-transition b-hover-opacity">${settings.cancelText}</button>` : ''}
                  <button class="b-modal-confirm b-bg-primary b-text-white b-px-4 b-py-2 b-rounded b-cursor-pointer b-transition b-hover-opacity">${settings.confirmText}</button>
                </div>
              </div>
            </div>
          </div>
        `;
        
        // Insert modal
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = modalHTML;
        document.body.appendChild(modalDiv);
        
        const backdrop = modalDiv.querySelector('.b-modal-backdrop');
        const confirmBtn = modalDiv.querySelector('.b-modal-confirm');
        const cancelBtn = modalDiv.querySelector('.b-modal-cancel');
        
        // Close modal
        const closeModal = () => {
          backdrop.classList.add('b-animate-fade-out');
          setTimeout(() => modalDiv.remove(), 300);
        };
        
        // Event listeners
        confirmBtn.addEventListener('click', () => {
          settings.onConfirm();
          closeModal();
        });
        
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => {
            settings.onCancel();
            closeModal();
          });
        }
        
        if (settings.closeOnBackdrop) {
          backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeModal();
          });
        }
        
        return { close: closeModal };
      },

      /**
       * Toast - Show toast notifications
       * @param {string} message - Toast message
       * @param {Object} options - Toast options
       * 
       * @example
       * B.components.toast('Success!', { type: 'success', duration: 3000 })
       */
      toast(message, options = {}) {
        const defaults = {
          type: 'info', // info, success, warning, danger
          duration: 3000,
          position: 'top-right' // top-right, top-left, bottom-right, bottom-left, top-center, bottom-center
        };
        
        const settings = { ...defaults, ...options };
        
        const colors = {
          info: 'b-bg-primary',
          success: 'b-bg-success',
          warning: 'b-bg-warning',
          danger: 'b-bg-danger'
        };
        
        const positions = {
          'top-right': 'top:20px;right:20px;',
          'top-left': 'top:20px;left:20px;',
          'bottom-right': 'bottom:20px;right:20px;',
          'bottom-left': 'bottom:20px;left:20px;',
          'top-center': 'top:20px;left:50%;transform:translateX(-50%);',
          'bottom-center': 'bottom:20px;left:50%;transform:translateX(-50%);'
        };
        
        const toast = document.createElement('div');
        toast.className = `${colors[settings.type]} b-text-white b-px-6 b-py-3 b-rounded-lg b-shadow-lg b-fixed b-animate b-animate-slide-in-right`;
        toast.style.cssText = positions[settings.position] + 'z-index:10000;';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
          toast.classList.add('b-animate-fade-out');
          setTimeout(() => toast.remove(), 300);
        }, settings.duration);
      },

      /**
       * Dropdown - Create dropdown menu
       * @param {string} triggerSelector - Trigger element selector
       * @param {string} menuSelector - Menu element selector
       * 
       * @example
       * B.components.dropdown('.dropdown-btn', '.dropdown-menu')
       */
      dropdown(triggerSelector, menuSelector) {
        const triggers = document.querySelectorAll(triggerSelector);
        const menus = document.querySelectorAll(menuSelector);
        
        triggers.forEach((trigger, index) => {
          const menu = menus[index];
          if (!menu) return;
          
          trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('b-hidden');
          });
          
          // Close on outside click
          document.addEventListener('click', () => {
            menu.classList.add('b-hidden');
          });
          
          menu.addEventListener('click', (e) => {
            e.stopPropagation();
          });
        });
      },

      /**
       * Tabs - Create tab system
       * @param {string} containerSelector - Tabs container selector
       * 
       * @example
       * B.components.tabs('.tabs-container')
       */
      tabs(containerSelector) {
        const containers = document.querySelectorAll(containerSelector);
        
        containers.forEach(container => {
          const tabButtons = container.querySelectorAll('[data-tab]');
          const tabContents = container.querySelectorAll('[data-tab-content]');
          
          tabButtons.forEach(button => {
            button.addEventListener('click', () => {
              const targetTab = button.dataset.tab;
              
              // Remove active class from all
              tabButtons.forEach(btn => btn.classList.remove('active'));
              tabContents.forEach(content => content.classList.add('b-hidden'));
              
              // Add active class to clicked
              button.classList.add('active');
              const targetContent = container.querySelector(`[data-tab-content="${targetTab}"]`);
              if (targetContent) {
                targetContent.classList.remove('b-hidden');
              }
            });
          });
        });
      },

      /**
       * Accordion - Create accordion/collapse
       * @param {string} containerSelector - Accordion container selector
       * 
       * @example
       * B.components.accordion('.accordion')
       */
      accordion(containerSelector) {
        const containers = document.querySelectorAll(containerSelector);
        
        containers.forEach(container => {
          const triggers = container.querySelectorAll('[data-accordion-trigger]');
          
          triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
              const targetId = trigger.dataset.accordionTrigger;
              const content = container.querySelector(`[data-accordion-content="${targetId}"]`);
              
              if (content) {
                content.classList.toggle('b-hidden');
                trigger.classList.toggle('active');
              }
            });
          });
        });
      }
    }
  };

  // Expose B to global scope
  window.B = B;

  // Auto-initialize on DOM ready
  B.ready(() => {
    console.log(`%c🚀 B-Labs v${B.version} loaded!`, 'color: #4f46e5; font-weight: bold;');
  });

})(window);
