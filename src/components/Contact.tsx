
import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-dark-light/50 section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
                Let's start a conversation
              </h3>
              <p className="text-portfolio-text-muted leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-portfolio-accent" />
                </div>
                <div>
                  <p className="text-portfolio-text font-medium">Email</p>
                  <p className="text-portfolio-text-muted">luke.salamat@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-portfolio-accent" />
                </div>
                <div>
                  <p className="text-portfolio-text font-medium">Response Time</p>
                  <p className="text-portfolio-text-muted">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-portfolio-dark-light border border-portfolio-dark-lighter rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-portfolio-text font-medium mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-portfolio-dark border-portfolio-dark-lighter text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-accent focus:ring-portfolio-accent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-portfolio-text font-medium mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-portfolio-dark border-portfolio-dark-lighter text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-accent focus:ring-portfolio-accent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-portfolio-text font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-portfolio-dark border-portfolio-dark-lighter text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-accent focus:ring-portfolio-accent resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-portfolio-accent hover:bg-portfolio-accent-light text-portfolio-dark font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-accent/30"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
