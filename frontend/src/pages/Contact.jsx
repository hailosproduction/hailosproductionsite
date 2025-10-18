export default News;
Let me continue with the final pages...

13. Create frontend/src/pages/Contact.jsx:

import React, { useState } from 'react';
import { Mail, MessageCircle, Users, Calendar, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactTypes = [
    { value: 'fan-message', label: 'Fan Message', icon: MessageCircle, description: 'Share your thoughts and feedback' },
    { value: 'collaboration', label: 'Collaboration', icon: Users, description: 'Musical or artistic collaboration opportunities' },
    { value: 'booking', label: 'Booking', icon: Calendar, description: 'Performance and event bookings' },
    { value: 'general', label: 'General Inquiry', icon: Mail, description: 'Other questions or comments' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
          <p className="text-gray-400 mb-6">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Contact</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Let's connect – whether it's about music, collaboration, or just to say hello
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    What's this about?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {contactTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <label key={type.value} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="type"
                            value={type.value}
                            checked={formData.type === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.type === type.value
                              ? 'border-pink-500 bg-pink-500/10'
                              : 'border-gray-700 bg-gray-900/30 hover:border-gray-600'
                          }`}>
                            <div className="flex items-center gap-3">
                              <IconComponent className={`${
                                formData.type === type.value ? 'text-pink-400' : 'text-gray-400'
                              }`} size={20} />
                              <div>
                                <div className="font-medium text-white text-sm">{type.label}</div>
                                <div className="text-xs text-gray-400">{type.description}</div>
                              </div>
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-300"
                    placeholder="What's on your mind?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-300 resize-none"
                    placeholder="Share your thoughts, ideas, or questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4">For Bookings & Collaborations</h3>
                  <div className="space-y-3">
                    <a 
                      href="mailto:hello@hailo-music.com"
                      className="flex items-center gap-3 text-pink-400 hover:text-pink-300 transition-colors duration-300"
                    >
                      <Mail size={20} />
                      hello@hailo-music.com
                    </a>
                    <p className="text-gray-400 text-sm">
                      For performance bookings, collaboration opportunities, and business inquiries.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
                  <p className="text-gray-300 mb-3">
                    I aim to respond to all messages within 24-48 hours. For urgent booking requests, 
                    please mention "URGENT" in your subject line.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Please be patient – I read every message personally and want to give you a thoughtful response.
                  </p>
                </div>

                <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4">What to Expect</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      Personal response from Hāịlō
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      Thoughtful consideration of collaborations
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      Respectful dialogue about advocacy work
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      Connection with the community
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
