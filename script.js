/* ==========================================================================
   Aura Mortgage - Interactive Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCalculator();
  initRevealOnScroll();
  initStatsCounter();
  initTestimonialsSlider();
});

/* ==========================================================================
   Navigation Logic
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Change header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Burger icon animation
      const spans = mobileToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
}

/* ==========================================================================
   Mortgage Calculator Logic
   ========================================================================== */
function initCalculator() {
  const homePriceInput = document.getElementById('homePrice');
  const downPaymentInput = document.getElementById('downPayment');
  const interestRateInput = document.getElementById('interestRate');
  const loanTermSelect = document.getElementById('loanTerm');

  const homePriceVal = document.getElementById('homePriceVal');
  const downPaymentVal = document.getElementById('downPaymentVal');
  const interestRateVal = document.getElementById('interestRateVal');

  const chartValue = document.getElementById('chartValue');
  const breakdownPrincipal = document.getElementById('breakdownPrincipal');
  const breakdownTaxes = document.getElementById('breakdownTaxes');
  const breakdownInsurance = document.getElementById('breakdownInsurance');
  const chartFill = document.getElementById('chartFill');

  if (!homePriceInput) return;

  // Formatting utilities
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  const updateCalculations = () => {
    const homePrice = parseFloat(homePriceInput.value);
    let downPayment = parseFloat(downPaymentInput.value);
    const interestRate = parseFloat(interestRateInput.value);
    const loanTermYears = parseInt(loanTermSelect.value);

    // Down payment cannot exceed home price
    if (downPayment > homePrice) {
      downPayment = homePrice;
      downPaymentInput.value = homePrice;
    }
    downPaymentInput.max = homePrice;

    // Update displays
    homePriceVal.textContent = formatCurrency(homePrice);
    downPaymentVal.textContent = `${formatCurrency(downPayment)} (${Math.round((downPayment / homePrice) * 100)}%)`;
    interestRateVal.textContent = `${interestRate.toFixed(2)}%`;

    // Math
    const loanAmount = homePrice - downPayment;
    const monthlyRate = (interestRate / 12) / 100;
    const numberOfPayments = loanTermYears * 12;

    let monthlyPrincipalInterest = 0;
    if (loanAmount > 0) {
      if (monthlyRate === 0) {
        monthlyPrincipalInterest = loanAmount / numberOfPayments;
      } else {
        monthlyPrincipalInterest = loanAmount * 
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      }
    }

    // Property taxes (approx 1.2% annually of property value)
    const monthlyTaxes = (homePrice * 0.012) / 12;
    // Home insurance (approx 0.35% annually of property value)
    const monthlyInsurance = (homePrice * 0.0035) / 12;

    const totalMonthlyPayment = monthlyPrincipalInterest + monthlyTaxes + monthlyInsurance;

    // Update Result UI
    chartValue.textContent = formatCurrency(totalMonthlyPayment);
    breakdownPrincipal.textContent = formatCurrency(monthlyPrincipalInterest);
    breakdownTaxes.textContent = formatCurrency(monthlyTaxes);
    breakdownInsurance.textContent = formatCurrency(monthlyInsurance);

    // Update Chart Circle
    // SVG stroke-dasharray = 440 (2 * pi * r = 2 * 3.14 * 70 = 439.6)
    const maxOffset = 440;
    const piPct = totalMonthlyPayment > 0 ? (monthlyPrincipalInterest / totalMonthlyPayment) : 0;
    const offset = maxOffset - (maxOffset * piPct);
    chartFill.style.strokeDashoffset = offset;
  };

  // Event Listeners
  homePriceInput.addEventListener('input', updateCalculations);
  downPaymentInput.addEventListener('input', updateCalculations);
  interestRateInput.addEventListener('input', updateCalculations);
  loanTermSelect.addEventListener('change', updateCalculations);

  // Initialize
  updateCalculations();
}

/* ==========================================================================
   Intersection Observer Animations (Reveal on Scroll)
   ========================================================================== */
function initRevealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target); // Animates once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
}

/* ==========================================================================
   Statistics Count-Up Animation
   ========================================================================== */
function initStatsCounter() {
  const statsElements = document.querySelectorAll('.trust-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        const updateCount = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Easing function outQuad
          const easeProgress = progress * (2 - progress);
          const currentValue = Math.floor(easeProgress * targetValue);
          
          if (targetValue >= 1000) {
            target.textContent = (currentValue / 1000).toFixed(1) + 'k';
          } else {
            target.textContent = currentValue;
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            if (targetValue >= 1000) {
              target.textContent = (targetValue / 1000).toFixed(0) + 'k';
            } else {
              target.textContent = targetValue;
            }
          }
        };
        
        requestAnimationFrame(updateCount);
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.5
  });

  statsElements.forEach(stat => {
    observer.observe(stat);
  });
}

/* ==========================================================================
   Testimonial Slider Navigation
   ========================================================================== */
function initTestimonialsSlider() {
  const slider = document.getElementById('testimonialsSlider');
  const dots = document.querySelectorAll('.nav-dot');
  
  if (!slider || dots.length === 0) return;

  // Click on dots to scroll to corresponding testimonial card position
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const cards = slider.querySelectorAll('.testimonial-card');
      if (cards[index]) {
        const scrollPosition = cards[index].offsetLeft - slider.offsetLeft;
        slider.scrollTo({
          left: scrollPosition - 30, // Offset for spacing
          behavior: 'smooth'
        });
        
        // Update active class
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      }
    });
  });

  // Track scroll position to update dots
  slider.addEventListener('scroll', () => {
    const scrollLeft = slider.scrollLeft;
    const cards = slider.querySelectorAll('.testimonial-card');
    let activeIndex = 0;
    
    cards.forEach((card, index) => {
      const cardOffset = card.offsetLeft - slider.offsetLeft - 60;
      if (scrollLeft >= cardOffset) {
        activeIndex = index;
      }
    });
    
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });
}
