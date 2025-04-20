import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { CheckCircle } from 'lucide-react';

const ServicesPage = () => {
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
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Our <span className="text-purple-500">Services</span></h1>
            <p className="text-xl text-zinc-300 mb-8">
              Comprehensive digital marketing solutions designed to drive growth and maximize ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="md:p-20 py-20 px-5">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl p-12 flex items-center justify-center">
                    <div className="text-white ">
                      <img src={service.image} alt="" className='' />
                    </div>
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={itemVariants} className="text-purple-500 mb-2">
                      Service 0{service.id}
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
                      {service.title}
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-zinc-400 text-lg mb-8">
                      {service.description}
                    </motion.p>

                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3"
                            variants={itemVariants}
                            custom={i}
                          >
                            <CheckCircle className="text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
                            <span className="text-zinc-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-8">
                      <button className="btn-primary">Learn More</button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="md:p-20 py-20 px-5 bg-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Our <span className="text-purple-500">Process</span></h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Our strategic approach to delivering successful marketing campaigns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We learn about your business, goals, audience, and competition to develop a deep understanding of your needs."
              },
              {
                number: "02",
                title: "Strategy",
                description: "We create a customized marketing plan tailored to your specific goals and target audience."
              },
              {
                number: "03",
                title: "Implementation",
                description: "Our team executes the strategy with precision, constantly monitoring performance."
              },
              {
                number: "04",
                title: "Optimization",
                description: "We analyze results and refine our approach to continuously improve performance and ROI."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="card relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-6 -left-2 text-5xl font-bold text-purple-900/30">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="md:p-20 py-20 px-5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Frequently Asked <span className="text-purple-500">Questions</span></h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to see results from digital marketing?",
                answer: "Results vary by channel and strategy. SEO typically takes 3-6 months to show significant results, while paid advertising can drive traffic immediately. We set realistic timelines and expectations based on your specific goals and industry."
              },
              {
                question: "Do you offer customized marketing plans?",
                answer: "Absolutely. Every business is unique, and we create fully customized marketing strategies tailored to your specific goals, audience, and budget. We don't believe in one-size-fits-all solutions."
              },
              {
                question: "How do you measure the success of your marketing campaigns?",
                answer: "We establish clear KPIs aligned with your business goals from the start. These might include metrics like conversion rate, customer acquisition cost, ROI, organic traffic growth, and more. We provide regular reporting to track progress against these metrics."
              },
              {
                question: "What makes Magnetiq Media different from other agencies?",
                answer: "We focus on measurable results and business impact rather than vanity metrics. We value transparency, communication, and true partnership with our clients. Our team brings specialized expertise across all digital marketing channels with a data-driven approach."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Transform Your Marketing?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/80 text-lg mb-8"
            >
              Schedule a free consultation with our marketing experts to discuss your needs.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="/contact" className="btn-primary bg-white text-purple-900 hover:bg-zinc-100">
                Get Started Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;