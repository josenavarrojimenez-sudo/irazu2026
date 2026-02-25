/**
 * Real Estate Abbey - Core JavaScript
 * Replicates the original site's animations, transitions, and interactivity
 * Uses: anime.js for letter animations, CSS classes for visibility states
 */

// ==================== POPUP SYSTEM (uses 'active' class like original) ====================
document.addEventListener('DOMContentLoaded', function() {
  var popupStack = [];

  function openPopup(popupId) {
    var popup = document.querySelector('[data-id="' + popupId + '"]');
    if (!popup) return;
    var settings = {};
    try { settings = JSON.parse(popup.getAttribute('data-settings') || '{}'); } catch(e) {}
    
    // Show backdrop
    if (settings.backdrop === 'backdrop-light') {
      document.getElementById('backdrop-light').classList.add('active');
    } else if (settings.backdrop === 'backdrop-dark') {
      document.getElementById('backdrop-dark').classList.add('active');
    }
    
    // Disable scroll if needed
    if (settings.disable_scroll) {
      document.body.classList.add('noscroll');
    }
    
    popup.classList.add('active');
    popupStack.push(popupId);
  }

  function closePopup(popupId) {
    var popup = document.querySelector('[data-id="' + popupId + '"]');
    if (!popup) return;
    
    popup.classList.remove('active');
    document.querySelectorAll('.backdrop').forEach(function(b) { b.classList.remove('active'); });
    document.body.classList.remove('noscroll');
    popupStack = popupStack.filter(function(id) { return id !== popupId; });
  }

  function closeAllPopups() {
    document.querySelectorAll('[data-type="popup"]').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.backdrop').forEach(function(b) { b.classList.remove('active'); });
    document.body.classList.remove('noscroll');
    popupStack = [];
  }

  // Click to open popup
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href^="#open-popup-"]');
    if (link) {
      e.preventDefault();
      var href = link.getAttribute('href');
      var match = href.match(/^#open-popup-(.+)$/);
      if (match) {
        openPopup(match[1]);
      }
    }
  });

  // Click to close popup
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('popup-close')) {
      e.preventDefault();
      var popup = e.target.closest('[data-id]');
      if (popup) {
        closePopup(popup.getAttribute('data-id'));
      }
    }
  });

  // Backdrop click to close
  document.querySelectorAll('.backdrop').forEach(function(backdrop) {
    backdrop.addEventListener('click', function() {
      closeAllPopups();
    });
  });

  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  });

  // Browser back button support
  window.addEventListener('popstate', function(e) {
    var state = e.state;
    if (state && state.popups) {
      // Sync popups with state
      popupStack.forEach(function(id) {
        if (!state.popups.includes(id)) closePopup(id);
      });
    } else {
      closeAllPopups();
    }
  });

  // ==================== INITIALIZE ANIMATIONS ====================
  initHeroMenu();
  initHeroImage();
  initHeader();
  initFooter();
  initMenuPopupAnimations();
  initSwipers();
  initSmallTextSliders();
  initRoomsBlock();
  initHorizontalScroll();
});

// ==================== HEADER VISIBILITY ====================
function initHeader() {
  var header = document.querySelector('header');
  if (!header) return;
  
  var heroMenu = document.querySelector('.ohm-component-HeroMenu');
  
  if (heroMenu) {
    // Homepage: header becomes visible after hero animation
    // The heroMenu init handles this with a delay
  } else {
    // Subpages: header becomes visible after a short delay
    var delay = window.innerWidth < 790 ? 0 : 200;
    setTimeout(function() {
      header.classList.add('ohm-visible');
    }, delay);
    
    // Add scroll listener for white background
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        header.classList.add('ohm-white-background');
      } else {
        header.classList.remove('ohm-white-background');
      }
    });
  }
}

// ==================== FOOTER VISIBILITY ====================
function initFooter() {
  var footer = document.querySelector('footer');
  if (!footer) return;
  
  var heroMenu = document.querySelector('.ohm-component-HeroMenu');
  
  if (heroMenu) {
    // Homepage: footer is hidden, shown by heroMenu init
    footer.style.display = 'none';
    footer.classList.add('ohm-desktop-hidden');
  } else {
    // Subpages: footer becomes visible after hero animation
    setTimeout(function() {
      footer.classList.add('ohm-visible');
    }, 1000);
  }
}

// ==================== HERO MENU (Homepage) ====================
function initHeroMenu() {
  var heroMenu = document.querySelector('.ohm-component-HeroMenu');
  if (!heroMenu) return;
  
  var inner = heroMenu.querySelector('.ohm-inner');
  var header = document.querySelector('header');
  var headerInner = header ? header.querySelector('.ohm-inner') : null;
  var footer = document.querySelector('footer');
  var isMobile = window.innerWidth < 790;
  var animDelay = isMobile ? 300 : 600;
  var headerDelay = animDelay + 500;
  
  // Hide footer during homepage animation
  if (footer) {
    footer.style.display = 'none';
    footer.classList.add('ohm-desktop-hidden');
  }
  
  // Letter animation for hero menu items
  var letterElements = heroMenu.querySelectorAll('.letters');
  letterElements.forEach(function(el) {
    var text = el.textContent;
    el.innerHTML = text.split(/\s+/).map(function(word) {
      return "<span class='word'>" + word.split('').map(function(letter) {
        return "<span class='letter'>" + letter + "</span>";
      }).join('') + "</span>";
    }).join(' ');
    
    var letterDelay = isMobile ? 350 : 700;
    setTimeout(function() {
      if (typeof anime !== 'undefined') {
        anime.timeline({ loop: false }).add({
          targets: el.querySelectorAll('.letter'),
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutCubic',
          duration: isMobile ? 1000 : 2000,
          delay: function(el, i) { return isMobile ? 500 + 50 * i : 1000 + 220 * i; }
        });
      } else {
        // Fallback: just show all letters
        el.querySelectorAll('.letter').forEach(function(l) { l.style.opacity = 1; });
      }
    }, letterDelay);
  });
  
  // Remove growLine animation after delay
  setTimeout(function() {
    heroMenu.querySelectorAll('.ohm-line').forEach(function(line) {
      line.classList.remove('growLine');
    });
  }, 4500);
  
  // Show header after animation
  setTimeout(function() {
    if (header) {
      header.classList.add('ohm-visible');
    }
    if (headerInner) {
      headerInner.classList.add('ohm-border-cut');
    }
  }, headerDelay);
  
  // Mark hero as animated
  setTimeout(function() {
    if (inner) inner.classList.add('ohm-animated');
  }, animDelay);
  
  // Cut big text to first word only
  heroMenu.querySelectorAll('.ohm-big-text').forEach(function(el) {
    var words = el.textContent.trim().split(/\s+/);
    if (words.length > 0) {
      el.textContent = words[0];
    }
  });
  
  // Menu hover interactions
  var menuList = heroMenu.querySelector('.ohm-menu-list');
  var menuItems = heroMenu.querySelectorAll('.ohm-menu-list li');
  
  menuItems.forEach(function(item, index) {
    item.addEventListener('mouseenter', function() {
      menuItems.forEach(function(li, i) {
        if (i === index) {
          li.classList.add('list-hovered');
          li.classList.remove('list-non-hovered');
        } else {
          li.classList.remove('list-hovered');
          li.classList.add('list-non-hovered');
        }
      });
    });
    
    item.addEventListener('mouseleave', function() {
      menuItems.forEach(function(li) {
        li.classList.remove('list-hovered', 'list-non-hovered');
      });
    });
  });
  
  if (menuList) {
    menuList.addEventListener('mouseleave', function() {
      menuItems.forEach(function(li) {
        li.classList.remove('list-hovered', 'list-non-hovered');
      });
    });
  }
}

// ==================== HERO IMAGE (Subpages) ====================
function initHeroImage() {
  var heroImage = document.querySelector('.ohm-component-HeroImage');
  if (!heroImage) return;
  
  var inner = heroImage.querySelector('.ohm-inner');
  var headingWrapper = heroImage.querySelector('.ohm-hero-container .ohm-heading-wrapper');
  
  if (headingWrapper) {
    // Letter animation for heading
    var originalText = headingWrapper.textContent;
    headingWrapper.innerHTML = originalText.replace(/\S+/g, function(word) {
      return word.split('').map(function(letter, i, arr) {
        var cls = i === arr.length - 1 ? 'letter last-letter' : 'letter';
        return "<span class='" + cls + "'>" + letter + "</span>";
      }).join('');
    });
    
    // Show heading and animate letters
    setTimeout(function() {
      headingWrapper.classList.add('ohm-visible');
      headingWrapper.classList.remove('ohm-desktop-hidden');
      
      if (typeof anime !== 'undefined') {
        anime.timeline({ loop: false }).add({
          targets: headingWrapper.querySelectorAll('.letter'),
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1900,
          delay: function(el, i) { return 500 + 30 * i; }
        });
      } else {
        headingWrapper.querySelectorAll('.letter').forEach(function(l) {
          l.style.opacity = 1;
          l.style.transform = 'translateX(0)';
        });
      }
    }, 0);
  }
  
  // Remove black overlay
  setTimeout(function() {
    if (inner) inner.classList.add('ohm-animated');
  }, 900);
  
  // Scroll more button
  var scrollMore = heroImage.querySelector('.ohm-scroll-more');
  if (scrollMore) {
    scrollMore.addEventListener('click', function(e) {
      e.preventDefault();
      var rect = scrollMore.getBoundingClientRect();
      var scrollTarget = window.scrollY + rect.bottom;
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    });
  }
}

// ==================== SWIPER INITIALIZATION ====================
function initSwipers() {
  if (typeof Swiper === 'undefined') {
    setTimeout(initSwipers, 500);
    return;
  }
  
  // Initialize fade sliders
  document.querySelectorAll('.ohm-slider[data-initialized="false"]').forEach(function(el) {
    new Swiper(el, {
      loop: true,
      effect: 'fade',
      speed: 800,
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true
      }
    });
    el.setAttribute('data-initialized', 'true');
  });
}

// ==================== SMALL TEXT SLIDER ====================
function initSmallTextSliders() {
  if (typeof Swiper === 'undefined') {
    setTimeout(initSmallTextSliders, 500);
    return;
  }
  
  document.querySelectorAll('.ohm-component-SmallTextSlider').forEach(function(section) {
    var slider = section.querySelector('.ohm-text-slider');
    var nextBtn = section.querySelector('.swiper-button-next');
    var prevBtn = section.querySelector('.swiper-button-prev');
    
    if (slider) {
      new Swiper(slider, {
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn
        }
      });
    }
  });
}

// ==================== ROOMS BLOCK (Offices) ====================
function initRoomsBlock() {
  if (typeof Swiper === 'undefined') {
    setTimeout(initRoomsBlock, 500);
    return;
  }
  
  document.querySelectorAll('.ohm-component-RoomsBlock').forEach(function(section) {
    section.querySelectorAll('.ohm-testimonials').forEach(function(testimonials) {
      var slider = testimonials.querySelector('.ohm-testimonials-slider');
      var nextBtn = testimonials.querySelector('.swiper-button-next');
      var prevBtn = testimonials.querySelector('.swiper-button-prev');
      
      if (slider) {
        new Swiper(slider, {
          spaceBetween: 0,
          slidesPerView: 1,
          navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn
          }
        });
      }
    });
  });
}

// ==================== MENU POPUP ANIMATIONS ====================
function initMenuPopupAnimations() {
  var mainMenuPopup = document.querySelector('[data-blueprint="main_menu_popup"]');
  if (!mainMenuPopup) return;
  
  // Watch for popup becoming active
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if (mainMenuPopup.classList.contains('active')) {
          // Animate letters when menu opens
          setTimeout(function() {
            var letterContainers = mainMenuPopup.querySelectorAll('.letters');
            letterContainers.forEach(function(el) {
              el.innerHTML = el.textContent.split(/\s+/).map(function(word) {
                return "<span class='word'>" + word.split('').map(function(letter) {
                  return "<span class='letter'>" + letter + "</span>";
                }).join('') + "</span>";
              }).join(' ');
              
              if (typeof anime !== 'undefined') {
                anime.timeline({ loop: false }).add({
                  targets: el.querySelectorAll('.letter'),
                  translateX: [40, 0],
                  translateZ: 0,
                  opacity: [0, 1],
                  easing: 'easeOutExpo',
                  duration: 1900,
                  delay: function(el, i) { return 500 + 30 * i; }
                });
              }
            });
          }, 100);
        }
      }
    });
  });
  
  observer.observe(mainMenuPopup, { attributes: true, attributeFilter: ['class'] });
  
  // Menu item hover effects
  var menuItems = mainMenuPopup.querySelectorAll('.ohm-menu-wrapper li');
  var menuWrapper = menuItems.length > 0 ? menuItems[0].parentElement : null;
  
  menuItems.forEach(function(item, index) {
    item.addEventListener('mouseenter', function() {
      menuItems.forEach(function(li, i) {
        if (i === index) {
          li.classList.add('list-hovered');
          li.classList.remove('list-non-hovered');
        } else {
          li.classList.add('list-non-hovered');
          li.classList.remove('list-hovered');
        }
      });
    });
  });
  
  if (menuWrapper) {
    menuWrapper.addEventListener('mouseleave', function() {
      menuItems.forEach(function(li) {
        li.classList.remove('list-hovered', 'list-non-hovered');
      });
    });
  }
}

// ==================== HORIZONTAL SCROLL (Lenis-like for desktop) ====================
function initHorizontalScroll() {
  if (window.innerWidth < 791) return;
  
  var mainContainer = document.querySelector('.ohm-main-container');
  var header = document.querySelector('header');
  if (!mainContainer) return;
  
  // Add scroll listener for header background change
  if (header) {
    mainContainer.addEventListener('scroll', function() {
      if (mainContainer.scrollLeft > 2) {
        header.classList.add('ohm-white-background');
      } else {
        header.classList.remove('ohm-white-background');
      }
    });
  }
}

// ==================== ALPINE.JS COMPONENTS ====================
document.addEventListener('alpine:init', function() {
  // Header component
  Alpine.data('header', function() {
    return {
      scrolled: false,
      init: function() {}
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
