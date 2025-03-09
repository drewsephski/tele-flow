
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').innerText = new Date().getFullYear();
  
  // Header scroll effect
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    const bars = mobileMenuBtn.querySelectorAll('.bar');
    
    if (navMenu.classList.contains('active')) {
      bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    }
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const bars = mobileMenuBtn.querySelectorAll('.bar');
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Pricing toggle
  const monthlyToggle = document.getElementById('monthly-toggle');
  const yearlyToggle = document.getElementById('yearly-toggle');
  const priceElements = document.querySelectorAll('.price-amount');
  const originalPrices = Array.from(priceElements).map(el => parseInt(el.textContent.replace('$', '')));
  
  monthlyToggle.addEventListener('click', function() {
    monthlyToggle.classList.add('active');
    yearlyToggle.classList.remove('active');
    
    priceElements.forEach((el, index) => {
      el.textContent = `$${originalPrices[index]}`;
    });
  });
  
  yearlyToggle.addEventListener('click', function() {
    yearlyToggle.classList.add('active');
    monthlyToggle.classList.remove('active');
    
    priceElements.forEach((el, index) => {
      const yearlyPrice = Math.floor(originalPrices[index] * 0.8);
      el.textContent = `$${yearlyPrice}`;
    });
  });
  
  // Testimonial slider
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const progressBar = document.querySelector('.progress-bar');
  let currentSlide = 0;
  let slideInterval;
  
  function showSlide(index) {
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Reset animation
    progressBar.style.animation = 'none';
    void progressBar.offsetWidth; // Trigger reflow
    progressBar.style.animation = 'progress 8s linear infinite';
    
    currentSlide = index;
  }
  
  function nextSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= testimonialSlides.length) {
      nextIndex = 0;
    }
    showSlide(nextIndex);
  }
  
  // Initialize slider
  showSlide(0);
  
  // Start auto-rotation
  slideInterval = setInterval(nextSlide, 8000);
  
  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(index);
      slideInterval = setInterval(nextSlide, 8000);
    });
  });
  
  // Handle hover pause/resume for testimonials
  const testimonialWrapper = document.querySelector('.testimonial-wrapper');
  
  testimonialWrapper.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
    progressBar.style.animationPlayState = 'paused';
  });
  
  testimonialWrapper.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 8000);
    progressBar.style.animationPlayState = 'running';
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const formError = document.getElementById('formError');
  const formSuccess = document.getElementById('formSuccess');
  const submitButton = document.getElementById('submitButton');
  const submitText = submitButton.querySelector('span');
  const spinner = submitButton.querySelector('.spinner');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const contactInput = document.getElementById('contact');
    const messageInput = document.getElementById('message');
    
    // Reset previous error
    formError.style.display = 'none';
    
    // Validate
    if (!contactInput.value.trim()) {
      formError.textContent = 'Please enter your Telegram username or email';
      formError.style.display = 'block';
      return;
    }
    
    if (!messageInput.value.trim()) {
      formError.textContent = 'Please enter a message';
      formError.style.display = 'block';
      return;
    }
    
    // Show loading state
    submitText.textContent = 'Sending...';
    spinner.style.display = 'inline-block';
    submitButton.disabled = true;
    
    // Simulate form submission (Replace with actual form handling)
    setTimeout(() => {
      // Hide form, show success message
      formSuccess.classList.add('active');
      
      // Reset after 3 seconds
      setTimeout(() => {
        formSuccess.classList.remove('active');
        contactForm.reset();
        submitText.textContent = 'Send Message';
        spinner.style.display = 'none';
        submitButton.disabled = false;
      }, 3000);
    }, 1500);
  });
  
  // Add animation classes to elements when they enter the viewport
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-card, .pricing-card, .contact-card');
    
    elements.forEach(element => {
      const position = element.getBoundingClientRect();
      
      // If element is in viewport
      if (position.top < window.innerHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animated elements
  const elementsToAnimate = document.querySelectorAll('.feature-card, .pricing-card, .contact-card');
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Run once on page load
  animateOnScroll();
});
