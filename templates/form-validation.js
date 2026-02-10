/**
 * B-Labs Form Validation
 * Advanced form validation with rules
 * Usage: B.form('#myForm', { rules: { email: 'required|email' } })
 */

(function() {
  'use strict';

  const validators = {
    required: (value) => {
      if (typeof value === 'string') return value.trim().length > 0;
      if (Array.isArray(value)) return value.length > 0;
      return value !== null && value !== undefined;
    },
    
    email: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    
    min: (value, param) => {
      const num = parseFloat(param);
      if (typeof value === 'string') return value.length >= num;
      if (typeof value === 'number') return value >= num;
      if (Array.isArray(value)) return value.length >= num;
      return false;
    },
    
    max: (value, param) => {
      const num = parseFloat(param);
      if (typeof value === 'string') return value.length <= num;
      if (typeof value === 'number') return value <= num;
      if (Array.isArray(value)) return value.length <= num;
      return false;
    },
    
    number: (value) => {
      return !isNaN(parseFloat(value)) && isFinite(value);
    },
    
    integer: (value) => {
      return Number.isInteger(parseFloat(value));
    },
    
    url: (value) => {
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    
    phone: (value) => {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      return phoneRegex.test(value) && value.replace(/\D/g, '').length >= 10;
    },
    
    alpha: (value) => {
      return /^[a-zA-Z]+$/.test(value);
    },
    
    alphanumeric: (value) => {
      return /^[a-zA-Z0-9]+$/.test(value);
    },
    
    match: (value, param, formData) => {
      return value === formData.get(param);
    },
    
    regex: (value, param) => {
      const regex = new RegExp(param);
      return regex.test(value);
    }
  };

  const defaultMessages = {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    min: 'Minimum {param} characters required',
    max: 'Maximum {param} characters allowed',
    number: 'Please enter a valid number',
    integer: 'Please enter a valid integer',
    url: 'Please enter a valid URL',
    phone: 'Please enter a valid phone number',
    alpha: 'Only letters are allowed',
    alphanumeric: 'Only letters and numbers are allowed',
    match: 'This field must match {param}',
    regex: 'Invalid format'
  };

  /**
   * Form Validation
   * @param {string} formSelector - Form selector
   * @param {Object} options - Validation options
   */
  window.B.form = function(formSelector, options = {}) {
    const form = document.querySelector(formSelector);
    if (!form) {
      console.error('B-Labs: Form not found:', formSelector);
      return;
    }

    const config = {
      rules: {},
      messages: {},
      errorClass: 'b-form-error',
      successClass: 'b-form-success',
      showErrors: true,
      realtime: false,
      onSubmit: null,
      onSuccess: null,
      onError: null,
      ...options
    };

    // Add error message elements
    Object.keys(config.rules).forEach(fieldName => {
      const field = form.querySelector(`[name="${fieldName}"]`);
      if (field && config.showErrors) {
        const errorDiv = document.createElement('div');
        errorDiv.className = `${config.errorClass}-message`;
        errorDiv.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem; display: none;';
        field.parentNode.appendChild(errorDiv);
      }
    });

    /**
     * Parse rule string
     * @param {string} ruleString - e.g., "required|min:8|email"
     * @returns {Array} Array of {name, param} objects
     */
    function parseRules(ruleString) {
      return ruleString.split('|').map(rule => {
        const [name, param] = rule.split(':');
        return { name, param };
      });
    }

    /**
     * Validate single field
     * @param {string} fieldName
     * @param {any} value
     * @param {FormData} formData
     * @returns {Object} {valid, errors}
     */
    function validateField(fieldName, value, formData) {
      const ruleString = config.rules[fieldName];
      if (!ruleString) return { valid: true, errors: [] };

      const rules = parseRules(ruleString);
      const errors = [];

      for (const rule of rules) {
        const validator = validators[rule.name];
        if (!validator) {
          console.warn(`B-Labs: Unknown validator "${rule.name}"`);
          continue;
        }

        const isValid = validator(value, rule.param, formData);
        if (!isValid) {
          const customMessage = config.messages[fieldName]?.[rule.name];
          const message = customMessage || 
                         defaultMessages[rule.name]?.replace('{param}', rule.param) ||
                         'Invalid value';
          errors.push(message);
        }
      }

      return { valid: errors.length === 0, errors };
    }

    /**
     * Show field error
     */
    function showFieldError(field, message) {
      field.classList.add(config.errorClass);
      field.classList.remove(config.successClass);
      
      if (config.showErrors) {
        const errorDiv = field.parentNode.querySelector(`.${config.errorClass}-message`);
        if (errorDiv) {
          errorDiv.textContent = message;
          errorDiv.style.display = 'block';
        }
      }
    }

    /**
     * Show field success
     */
    function showFieldSuccess(field) {
      field.classList.remove(config.errorClass);
      field.classList.add(config.successClass);
      
      if (config.showErrors) {
        const errorDiv = field.parentNode.querySelector(`.${config.errorClass}-message`);
        if (errorDiv) {
          errorDiv.style.display = 'none';
        }
      }
    }

    /**
     * Clear field status
     */
    function clearFieldStatus(field) {
      field.classList.remove(config.errorClass, config.successClass);
      
      if (config.showErrors) {
        const errorDiv = field.parentNode.querySelector(`.${config.errorClass}-message`);
        if (errorDiv) {
          errorDiv.style.display = 'none';
        }
      }
    }

    /**
     * Validate entire form
     */
    function validateForm() {
      const formData = new FormData(form);
      const allErrors = {};
      let isValid = true;

      Object.keys(config.rules).forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        const value = formData.get(fieldName) || '';
        const result = validateField(fieldName, value, formData);

        if (!result.valid) {
          isValid = false;
          allErrors[fieldName] = result.errors;
          if (field) showFieldError(field, result.errors[0]);
        } else {
          if (field) showFieldSuccess(field);
        }
      });

      return { valid: isValid, errors: allErrors };
    }

    // Realtime validation
    if (config.realtime) {
      Object.keys(config.rules).forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (field) {
          ['input', 'blur', 'change'].forEach(event => {
            field.addEventListener(event, () => {
              const formData = new FormData(form);
              const value = formData.get(fieldName) || '';
              const result = validateField(fieldName, value, formData);
              
              if (result.valid) {
                showFieldSuccess(field);
              } else if (event === 'blur' || value.length > 0) {
                showFieldError(field, result.errors[0]);
              }
            });
          });
        }
      });
    }

    // Form submit
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      if (config.onSubmit) {
        config.onSubmit(e);
      }

      const validation = validateForm();
      
      if (validation.valid) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        if (config.onSuccess) {
          await config.onSuccess(data, form);
        }
      } else {
        if (config.onError) {
          config.onError(validation.errors, form);
        }
        
        // Focus first error field
        const firstErrorField = form.querySelector(`.${config.errorClass}`);
        if (firstErrorField) {
          firstErrorField.focus();
        }
      }
    });

    // Public API
    return {
      validate: validateForm,
      reset: () => {
        form.reset();
        Object.keys(config.rules).forEach(fieldName => {
          const field = form.querySelector(`[name="${fieldName}"]`);
          if (field) clearFieldStatus(field);
        });
      },
      getValues: () => {
        const formData = new FormData(form);
        return Object.fromEntries(formData);
      }
    };
  };

  /**
   * Add custom validator
   * @param {string} name - Validator name
   * @param {Function} fn - Validator function
   * @param {string} message - Default error message
   */
  window.B.addValidator = function(name, fn, message) {
    validators[name] = fn;
    if (message) {
      defaultMessages[name] = message;
    }
  };

  // Default form error styles
  const style = document.createElement('style');
  style.textContent = `
    .b-form-error {
      border-color: #ef4444 !important;
    }
    
    .b-form-success {
      border-color: #10b981 !important;
    }
    
    .b-form-error:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .b-form-success:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }
  `;
  
  if (typeof document !== 'undefined') {
    window.B.ready(() => {
      document.head.appendChild(style);
    });
  }

})();
