
import React, { useState } from 'react';

const pricingPlans = [
  {
    name: "Basic",
    price: "$9",
    period: "per month",
    description: "Perfect for individuals starting out with Telegram automation.",
    features: [
      "Auto-replies for 1 channel",
      "Basic analytics",
      "5 automated workflows",
      "Email support",
      "Weekly usage reports"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "Ideal for growing businesses managing multiple channels.",
    features: [
      "Auto-replies for 5 channels",
      "Advanced analytics",
      "Unlimited workflows",
      "Priority email support",
      "Custom notifications",
      "API access"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$79",
    period: "per month",
    description: "For large organizations requiring comprehensive solutions.",
    features: [
      "Auto-replies for unlimited channels",
      "Real-time analytics dashboard",
      "Unlimited workflows",
      "24/7 dedicated support",
      "Advanced security features",
      "Full API access",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that works best for your needs. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-dark-300 p-1 rounded-full inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === 'monthly' 
                    ? 'bg-telegram text-white shadow-md' 
                    : 'text-light-300 hover:text-light-100'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === 'yearly' 
                    ? 'bg-telegram text-white shadow-md' 
                    : 'text-light-300 hover:text-light-100'
                }`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Yearly <span className="text-xs opacity-80">(-20%)</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`glass rounded-2xl overflow-hidden transition-all ${
                plan.popular 
                  ? 'border-telegram/50 ring-2 ring-telegram/20 scale-105 md:scale-100 md:transform md:hover:scale-105 z-10' 
                  : 'border-dark-100/20 md:transform md:hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="bg-telegram text-white text-center text-sm py-1">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-light-300 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      {billingPeriod === 'yearly' 
                        ? `$${Math.floor(parseInt(plan.price.replace('$', '')) * 0.8)}` 
                        : plan.price}
                    </span>
                    <span className="text-light-300 ml-2">{plan.period}</span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <div className="text-sm text-telegram mt-1">
                      Save 20% with annual billing
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-telegram mr-2 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-light-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    plan.popular 
                      ? 'bg-telegram text-white hover:bg-telegram-light' 
                      : 'border border-dark-100 hover:border-telegram/50 hover:text-telegram'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
