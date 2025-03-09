
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    contact: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    // Validate form
    if (!formData.contact.trim()) {
      setError('Please enter your Telegram username or email');
      setSubmitting(false);
      return;
    }
    
    if (!formData.message.trim()) {
      setError('Please enter a message');
      setSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ contact: '', message: '' });
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions about our services? Interested in a custom solution? Let us know how we can help.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-16 h-16 rounded-full bg-telegram/20 flex items-center justify-center text-telegram mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-light-300 text-center">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-group">
                    <label htmlFor="contact" className="block text-light-200 mb-2 font-medium">
                      Telegram Username or Email
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      placeholder="@username or your@email.com"
                      className="input"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="block text-light-200 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="How can we help you?"
                      className="input resize-none"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="text-red-400 text-sm py-2 px-3 rounded-lg bg-red-400/10">
                      {error}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="button-primary w-full"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="subtle-glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-telegram/20 flex items-center justify-center text-telegram mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Phone</h3>
              <p className="text-light-300">+1 (555) 123-4567</p>
            </div>
            
            <div className="subtle-glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-telegram/20 flex items-center justify-center text-telegram mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-light-300">support@teleflow.com</p>
            </div>
            
            <div className="subtle-glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-telegram/20 flex items-center justify-center text-telegram mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Telegram</h3>
              <p className="text-light-300">@TeleFlow_Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
