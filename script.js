// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.style.transform = navbar.classList.contains('active') 
      ? 'rotate(90deg)' 
      : 'rotate(0)';
  });

  // Close menu when a link is clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuToggle.style.transform = 'rotate(0)';
    });
  });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  observer.observe(section);
});

// Header shadow on scroll
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 50) {
    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    header.style.padding = '15px 8%';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    header.style.padding = '20px 8%';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Email validation helper
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation helper
function validatePhone(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Scroll animation debounced
const debouncedScroll = debounce(() => {
  // Add any additional scroll-based logic here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// Active navigation link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Button click ripple effect
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });

  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Performance monitoring (optional)
if (window.performance && window.performance.timing) {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page Load Time: ' + pageLoadTime + 'ms');
  });
}

// Service worker registration (optional - for future PWA features)
if ('serviceWorker' in navigator) {
  // Uncomment when service worker is available
  // navigator.serviceWorker.register('sw.js').catch(() => {
  //   console.log('Service Worker not available');
  // });
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    menuToggle.style.transform = 'rotate(0)';
  }
});

// Log initialization
console.log('🧘 Dirghayuyog - Yoga Classes Website Loaded Successfully!');
console.log('Transform Your Mind, Body & Soul Through Yoga');
