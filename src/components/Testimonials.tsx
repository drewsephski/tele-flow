
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "TeleFlow completely transformed how I manage my Telegram channels. The automation features save me hours every day.",
    author: "Sarah Johnson",
    role: "Digital Marketing Manager",
    rating: 5
  },
  {
    id: 2,
    content: "As someone who runs multiple Telegram groups, I can't imagine going back to manual management. This tool is a game-changer.",
    author: "Michael Chen",
    role: "Community Manager",
    rating: 5
  },
  {
    id: 3,
    content: "The analytics features help me understand my audience better and create more engaging content. Well worth the investment.",
    author: "Jessica Miller",
    role: "Content Creator",
    rating: 4
  },
  {
    id: 4,
    content: "Customer support has been exceptional. Any time I've had questions, they've responded quickly and effectively.",
    author: "David Wilson",
    role: "Small Business Owner",
    rating: 5
  },
  {
    id: 5,
    content: "I was hesitant at first, but after the free trial I was completely sold. Now I recommend it to all my colleagues.",
    author: "Emily Rodriguez",
    role: "Social Media Consultant",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="section bg-dark-300">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our customers have to say about TeleFlow.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1">
              <div 
                className="h-full bg-telegram"
                style={{
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  transition: 'width 8s linear'
                }}
              ></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[activeIndex].rating 
                        ? 'text-telegram' 
                        : 'text-dark-100'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 text-balance leading-relaxed">
                "{testimonials[activeIndex].content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-telegram to-telegram-light flex items-center justify-center text-white font-bold">
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{testimonials[activeIndex].author}</div>
                  <div className="text-light-300 text-sm">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-telegram scale-125' 
                    : 'bg-dark-100 hover:bg-dark-100/80'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
