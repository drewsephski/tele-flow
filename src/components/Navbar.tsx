
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-telegram" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
            <path 
              d="M16.0672 7.93286L13.1672 16.0329C13.1111 16.1642 13.0154 16.2771 12.8919 16.3595C12.7684 16.4419 12.6223 16.4905 12.4716 16.4999C12.3209 16.5094 12.1699 16.4793 12.0364 16.4129C11.9029 16.3465 11.7929 16.2465 11.7192 16.1229L9.71916 12.9329L6.53916 10.9329C6.41552 10.8591 6.31554 10.7492 6.24914 10.6157C6.18273 10.4822 6.15273 10.3312 6.16216 10.1805C6.17159 10.0298 6.22021 9.88365 6.30259 9.76017C6.38497 9.63669 6.49786 9.54095 6.62916 9.48486L14.7292 6.58486C14.8565 6.53112 14.997 6.51747 15.1325 6.54557C15.268 6.57368 15.3916 6.64217 15.4865 6.74033C15.5814 6.83849 15.6434 6.96417 15.6645 7.10057C15.6855 7.23697 15.6647 7.37609 15.6052 7.50086L16.0672 7.93286Z" 
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
            <path 
              d="M9.71899 12.933L11.3602 16.0808" 
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-bold">TeleFlow</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-light-300 hover:text-light-100 transition-colors">Features</a>
          <a href="#pricing" className="text-light-300 hover:text-light-100 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-light-300 hover:text-light-100 transition-colors">Testimonials</a>
          <a href="#contact" className="button-primary">Contact Us</a>
        </nav>
        
        <button 
          className="md:hidden text-light-200" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden glass border-t border-dark-100/10 p-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-light-300 hover:text-light-100 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="text-light-300 hover:text-light-100 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className="text-light-300 hover:text-light-100 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="button-primary text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
