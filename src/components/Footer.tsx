
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-400 py-16 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
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
            <p className="text-light-300 mb-4">
              Streamline your Telegram workflow with automated responses, analytics, and multi-channel management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-300 hover:text-telegram transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-light-300 hover:text-telegram transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-light-300 hover:text-telegram transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-light-300 hover:text-telegram transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">About</a></li>
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">Careers</a></li>
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">Press</a></li>
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">API</a></li>
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">Security</a></li>
              <li><a href="#" className="text-light-300 hover:text-light-100 transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-300 text-center">
          <p className="text-light-300">&copy; {currentYear} TeleFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
