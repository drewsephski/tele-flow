
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  mobileMenuButton.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Pricing toggle
  const monthlyToggle = document.getElementById('monthly-toggle');
  const yearlyToggle = document.getElementById('yearly-toggle');
  const priceElements = document.querySelectorAll('.price-amount');
  const periodElements = document.querySelectorAll('.price-period');
  
  // Store original prices
  const originalPrices = Array.from(priceElements).map(el => el.textContent);
  
  yearlyToggle.addEventListener('click', function() {
    this.classList.add('active');
    monthlyToggle.classList.remove('active');
    
    // Update prices with 20% discount
    priceElements.forEach((el, index) => {
      const originalPrice = parseInt(originalPrices[index].replace('$', ''));
      const discountedPrice = Math.round(originalPrice * 0.8);
      el.textContent = '$' + discountedPrice;
    });
    
    // Update period text
    periodElements.forEach(el => {
      el.textContent = 'per year';
    });
  });
  
  monthlyToggle.addEventListener('click', function() {
    this.classList.add('active');
    yearlyToggle.classList.remove('active');
    
    // Restore original prices
    priceElements.forEach((el, index) => {
      el.textContent = originalPrices[index];
    });
    
    // Restore period text
    periodElements.forEach(el => {
      el.textContent = 'per month';
    });
  });
  
  // Testimonial slider
  const testimonialDots = document.querySelectorAll('.dot');
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  let currentSlide = 0;
  let testimonialInterval;
  
  function showSlide(index) {
    // Hide all slides
    testimonialSlides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    testimonialDots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show selected slide
    testimonialSlides[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    currentSlide = index;
    
    // Reset progress bar animation
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.animation = 'none';
    setTimeout(() => {
      progressBar.style.animation = 'progress 8s linear infinite';
    }, 10);
  }
  
  // Set up click event for dots
  testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      clearInterval(testimonialInterval);
      startTestimonialInterval();
    });
  });
  
  // Auto-advance slides
  function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
      let nextSlide = currentSlide + 1;
      if (nextSlide >= testimonialSlides.length) {
        nextSlide = 0;
      }
      showSlide(nextSlide);
    }, 8000);
  }
  
  // Initialize slider
  if (testimonialSlides.length > 0) {
    showSlide(0);
    startTestimonialInterval();
  }
  
  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const formError = document.getElementById('formError');
  const formSuccess = document.getElementById('formSuccess');
  const submitButton = document.getElementById('submitButton');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      submitButton.classList.add('loading');
      submitButton.querySelector('span').style.opacity = '0';
      submitButton.querySelector('.spinner').style.display = 'block';
      
      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        submitButton.classList.remove('loading');
        submitButton.querySelector('span').style.opacity = '1';
        submitButton.querySelector('.spinner').style.display = 'none';
        
        // Show success message
        formSuccess.classList.add('active');
      }, 1500);
    });
  }
  
  // Add animation to feature cards
  const featureCards = document.querySelectorAll('.feature-card, .service-card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
});
