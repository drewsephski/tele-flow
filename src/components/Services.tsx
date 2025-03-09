
import React from 'react';
import { Mail, FileText, UserPlus, Star, ThumbsUp, Scroll } from 'lucide-react';

const services = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Mailing Services",
    description: "Professional message delivery with analytics, A/B testing, and engagement tracking for optimal results."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Parsing Solutions",
    description: "Advanced data extraction and analysis tools to gather valuable insights from Telegram conversations and channels."
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Invitation Management",
    description: "Streamlined member acquisition and group growth with targeted invitations and conversion tracking."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Review Automation",
    description: "Generate authentic reviews and ratings to build credibility and trust for your Telegram presence."
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: "Engagement Boosting",
    description: "Increase likes, reactions, and overall engagement with our advanced interaction algorithms."
  },
  {
    icon: <Scroll className="w-8 h-8" />,
    title: "Content Scrolling",
    description: "Automate content discovery and interaction with our intelligent scrolling and engagement technology."
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-dark-300">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions to enhance your Telegram marketing strategy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 card-hover flex flex-col h-full border border-light-100/5 hover:border-telegram/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-xl bg-telegram/10 flex items-center justify-center text-telegram mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-light-300 text-balance">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
