import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Get in <span className="text-purple-500">Touch</span></h1>
            <p className="text-xl text-zinc-300 mb-8">
              Ready to boost your business growth? Reach out to discuss how we can help you achieve your marketing goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="mb-6">Contact Information</motion.h2>
              <motion.p variants={itemVariants} className="text-zinc-400 mb-8">
                Have questions or ready to start a project? Reach out to us through any of the following channels or fill out the contact form.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/20 p-3 rounded-lg">
                    <MapPin className="text-purple-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Location</h3>
                    <p className="text-zinc-400">123 Marketing St, Digital City, 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/20 p-3 rounded-lg">
                    <Mail className="text-purple-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-zinc-400">hello@magnetiqmedia.com</p>
                    <p className="text-zinc-400">support@magnetiqmedia.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/20 p-3 rounded-lg">
                    <Phone className="text-purple-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-zinc-400">(555) 123-4567</p>
                    <p className="text-zinc-400">(555) 987-6543</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-800/50 rounded-lg">
                    <p className="font-medium mb-1">Monday - Friday</p>
                    <p className="text-zinc-400">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="p-4 bg-zinc-800/50 rounded-lg">
                    <p className="font-medium mb-1">Saturday</p>
                    <p className="text-zinc-400">10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {formSubmitted ? (
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-900/20 rounded-full mb-6">
                    <CheckCircle className="text-purple-500 h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
                  <p className="text-zinc-400 mb-6">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full p-3 rounded-md bg-zinc-700/50 border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-3 rounded-md bg-zinc-700/50 border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 rounded-md bg-zinc-700/50 border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-1">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full p-3 rounded-md bg-zinc-700/50 border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="SEO">SEO</option>
                          <option value="Content Writing">Content Writing</option>
                          <option value="Social Media Marketing">Social Media Marketing</option>
                          <option value="Pay Per Click">Pay Per Click</option>
                          <option value="Influencer Marketing">Influencer Marketing</option>
                          <option value="Video Marketing">Video Marketing</option>
                          <option value="E-commerce Marketing">E-commerce Marketing</option>
                          <option value="Mobile Marketing">Mobile Marketing</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full p-3 rounded-md bg-zinc-700/50 border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              title="Our Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.697149399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5dfce1ab7%3A0xf1b3d0c0584953c4!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1608285320425!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
