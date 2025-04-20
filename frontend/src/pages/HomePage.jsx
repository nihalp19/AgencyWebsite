import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { ChevronRight, BarChart, Target, Award, ArrowRight } from 'lucide-react';


const HomePage = () => {
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
    <div className="overflow-hidden ">
      <HeroCarousel />

      {/* Why Choose Us */}
      <section className="md:p-20 py-20 px-5 bg-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Why Choose <span className="text-purple-500">Magnetiq Media</span>?</h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              We bring fresh strategy, transparent reporting, and real results. No fluff. No buzzwords. Just growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <BarChart className="h-10 w-10" />,
                title: "Data-Driven Strategy",
                description: "We use analytics and insights to create marketing strategies that deliver measurable results."
              },
              { 
                icon: <Target className="h-10 w-10" />,
                title: "Targeted Campaigns",
                description: "Reach your ideal customers with precision targeting and personalized messaging."
              },
              { 
                icon: <Award className="h-10 w-10" />,
                title: "Proven Results",
                description: "Our track record speaks for itself with case studies showcasing real client success."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="card text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 text-purple-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="md:p-20 py-20 px-5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Our <span className="text-purple-500">Services</span></h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              From SEO to social media, we provide comprehensive digital marketing solutions tailored to your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="md:p-20 py-20 px-5 bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-white mb-6"
            >
              Your Competitors Are Already Running Ads. Are You?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-white/80 text-lg mb-8"
            >
              Don't get left behind. Let's turn your clicks into clients and boost your business growth today.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="/contact" className="btn-primary bg-white text-purple-900 hover:bg-zinc-100">
                Get Started Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="md:p-20 py-20 px-5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Client <span className="text-purple-500">Success Stories</span></h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Hear what our clients have to say about our result-driven marketing strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-zinc-300 mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-zinc-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">Ready to grow your business?</h3>
                <p className="text-zinc-300">
                  Schedule a free strategy call with our marketing experts.
                </p>
              </div>
              <a href="/contact" className="btn-primary whitespace-nowrap flex items-center gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;