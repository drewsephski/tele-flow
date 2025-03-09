
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const bg = heroRef.current.querySelector('.hero-bg') as HTMLElement;
      if (bg) {
        bg.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      }
    };
    
    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="hero-bg absolute inset-0 bg-noise opacity-5 transition-transform duration-100 ease-out"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-telegram/20 to-transparent rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full subtle-glass mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-telegram mr-2 animate-pulse"></span>
            <span className="text-sm text-light-300">Telegram Automation Like Never Before</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight animate-fade-up">
            Streamline Your <span className="text-telegram">Telegram</span> Workflow
          </h1>
          
          <p className="text-xl text-light-300 max-w-2xl mx-auto mb-10 text-balance animate-fade-up animate-delay-1">
            Automate your Telegram activities with our powerful and intuitive platform. Save time, increase engagement, and never miss important messages.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-up animate-delay-2">
            <a href="#pricing" className="button-primary w-full sm:w-auto">
              Get Started
            </a>
            <a href="#features" className="button-secondary w-full sm:w-auto">
              Learn More
            </a>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto animate-fade-up animate-delay-3">
            <div className="subtle-glass rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative bg-dark-400 px-2 pt-2 pb-1 flex items-center">
                <div className="flex gap-1.5 absolute left-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="w-full text-center text-xs text-light-300">TeleFlow Dashboard</div>
              </div>
              <div className="p-4 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass rounded-xl p-4 flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-telegram/20 flex items-center justify-center text-telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">Notifications</h3>
                        <p className="text-xs text-light-400">Real-time updates</p>
                      </div>
                    </div>
                    <div className="h-20 bg-dark-300/50 rounded-lg"></div>
                  </div>
                  <div className="glass rounded-xl p-4 flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-telegram/20 flex items-center justify-center text-telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">Messages</h3>
                        <p className="text-xs text-light-400">Smart responses</p>
                      </div>
                    </div>
                    <div className="h-20 bg-dark-300/50 rounded-lg"></div>
                  </div>
                  <div className="glass rounded-xl p-4 flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-telegram/20 flex items-center justify-center text-telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">Contacts</h3>
                        <p className="text-xs text-light-400">Quick access</p>
                      </div>
                    </div>
                    <div className="h-20 bg-dark-300/50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-light-300 hover:text-light-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
