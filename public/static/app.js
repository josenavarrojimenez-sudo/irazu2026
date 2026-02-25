/**
 * Real Estate Abbey - Core JavaScript
 * Handles popup system, menu interactions, sliders, and Alpine.js components
 */

// ==================== POPUP SYSTEM ====================
document.addEventListener('DOMContentLoaded', function() {
  // Popup open handlers
  document.querySelectorAll('a[href^="#open-popup-"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var popupId = this.getAttribute('href').replace('#open-popup-', '');
      var popup = document.querySelector('[data-id="' + popupId + '"]');
      if (popup) {
        popup.classList.add('is-open');
        // Show backdrop
        var settings = JSON.parse(popup.getAttribute('data-settings') || '{}');
        var backdrop = document.getElementById(settings.backdrop || 'backdrop-light');
        if (backdrop) backdrop.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Popup close handlers
  document.querySelectorAll('.popup-close').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var popup = this.closest('[data-type="popup"]');
      if (popup) {
        popup.classList.remove('is-open');
        document.querySelectorAll('.backdrop').forEach(function(b) { b.classList.remove('is-open'); });
        document.body.style.overflow = '';
      }
    });
  });

  // Backdrop click to close
  document.querySelectorAll('.backdrop').forEach(function(backdrop) {
    backdrop.addEventListener('click', function() {
      document.querySelectorAll('[data-type="popup"]').forEach(function(p) { p.classList.remove('is-open'); });
      document.querySelectorAll('.backdrop').forEach(function(b) { b.classList.remove('is-open'); });
      document.body.style.overflow = '';
    });
  });

  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('[data-type="popup"]').forEach(function(p) { p.classList.remove('is-open'); });
      document.querySelectorAll('.backdrop').forEach(function(b) { b.classList.remove('is-open'); });
      document.body.style.overflow = '';
    }
  });

  // Initialize Swiper sliders
  initSwipers();
});

// ==================== SWIPER INITIALIZATION ====================
function initSwipers() {
  if (typeof Swiper === 'undefined') {
    // Retry after Swiper loads
    setTimeout(initSwipers, 500);
    return;
  }
  
  document.querySelectorAll('.ohm-text-slider').forEach(function(el) {
    var container = el.closest('.ohm-slider-container');
    new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: container ? container.querySelector('.swiper-button-next') : '.swiper-button-next',
        prevEl: container ? container.querySelector('.swiper-button-prev') : '.swiper-button-prev',
      },
    });
  });
}

// ==================== ALPINE.JS COMPONENTS ====================
document.addEventListener('alpine:init', function() {
  // Header component
  Alpine.data('header', function() {
    return {
      scrolled: false,
      init: function() {
        var self = this;
        window.addEventListener('scroll', function() {
          self.scrolled = window.scrollY > 50;
        });
      }
    };
  });

  // Hero Menu component (homepage)
  window.heroMenu = function() {
    return {
      activeIndex: null,
      init: function() {}
    };
  };

  // Hero Image component (subpages)
  window.heroImage = function() {
    return {
      init: function() {}
    };
  };

  // Small Text Slider component
  window.smallTextSlider = function() {
    return {
      init: function() {}
    };
  };

  // Locations Overview component
  window.LocationsOverview = function() {
    return {
      init: function() {}
    };
  };

  // Rooms Block component (offices)
  window.roomsBlock = function() {
    return {
      init: function() {}
    };
  };

  // Contact Popup component
  Alpine.data('ContactPopup', function() {
    return {
      init: function() {}
    };
  });

  // Footer component
  Alpine.data('footer', function() {
    return {
      init: function() {}
    };
  });
});
