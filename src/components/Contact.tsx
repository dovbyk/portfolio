
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,55,55,0.05)_0,rgba(0,0,0,1)_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1 border border-white/10 rounded-full">
            <span className="text-white/80 text-sm font-medium">GET IN TOUCH</span>
          </div>
          
          <AnimatedText
            text="Contact Me"
            el="h2"
            className="text-3xl md:text-5xl font-bold mb-6"
            animation="blur-in"
          />
          
          <AnimatedText
            text="Have a project in mind or want to chat? Feel free to reach out!"
            el="p"
            className="text-white/80 max-w-2xl mx-auto"
            animation="fade-in"
            delay={200}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-2">
            <div className="glass-panel p-8" style={{ opacity: 0, animation: 'fade-in 0.8s ease-out forwards' }}>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white/80 text-sm mb-1">Email</h4>
                    <a href="mailto:contact@example.com" className="text-white hover:text-blue-400 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white/80 text-sm mb-1">Phone</h4>
                    <a href="tel:+12345678901" className="text-white hover:text-blue-400 transition-colors">
                      +1 (234) 567-8901
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5">
                    <MapPin size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white/80 text-sm mb-1">Location</h4>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/example" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/example" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com/example" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel p-8" style={{ opacity: 0, animation: 'fade-in 0.8s ease-out 0.2s forwards' }}>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Hello, I'm interested in working with you on a project..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-300",
                      "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
