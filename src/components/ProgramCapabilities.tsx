
import React from 'react';
import { Mail, Inbox, MessageSquare, Redo, Eye, ThumbsUp } from 'lucide-react';

const capabilities = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Group Mailing",
    description: "Send targeted messages to specific groups with customizable templates and scheduling options."
  },
  {
    icon: <Inbox className="w-6 h-6" />,
    title: "Parsing",
    description: "Extract and analyze data from Telegram channels, groups, and public sources with advanced filtering."
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Private Messages",
    description: "Automate personalized direct messages to individual users with smart response handling."
  },
  {
    icon: <Inbox className="w-6 h-6" />,
    title: "Inwaiting",
    description: "Queue and prioritize messages for optimal delivery timing based on user activity patterns."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Commenting",
    description: "Automatically engage with posts through intelligent, context-aware commenting systems."
  },
  {
    icon: <Redo className="w-6 h-6" />,
    title: "Reposting",
    description: "Share relevant content across multiple channels with customizable reposting schedules."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "View Recruiting",
    description: "Increase content visibility with targeted view generation for maximum exposure."
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Reaction Recruiting",
    description: "Boost engagement metrics with authentic reactions and interaction management."
  }
];

const ProgramCapabilities = () => {
  return (
    <section id="capabilities" className="section bg-dark-200">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title">Program Capabilities</h2>
          <p className="section-subtitle">
            Our platform offers comprehensive automation tools to maximize your Telegram presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-5 card-hover flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-telegram/20 flex items-center justify-center text-telegram mb-4">
                {capability.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
              <p className="text-sm text-light-300 text-balance">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCapabilities;
