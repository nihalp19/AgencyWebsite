import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
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
            <h1 className="mb-6 text-4xl font-bold text-white">
              About <span className="text-purple-500">Magnetiq Media</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8">
              We're not just another agency. We're your growth partner focused on delivering real, measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="md:p-20 py-20 px-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Our team"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="mb-6 text-3xl font-bold">
                Our Story
              </motion.h2>
              <motion.p variants={itemVariants} className="text-zinc-400 mb-4">
                Magnetiq Media was born out of a frustration with the status quo in digital marketing. We saw too many businesses being promised the world by agencies that delivered little more than flashy reports and vanity metrics.
              </motion.p>
              <motion.p variants={itemVariants} className="text-zinc-400 mb-4">
                We set out to build a different kind of agency—one that measures success not by impressions or clicks, but by business growth and ROI. One that combines data-driven strategy with creative execution to deliver marketing that actually works.
              </motion.p>
              <motion.p variants={itemVariants} className="text-zinc-400">
                Today, we're proud to have helped hundreds of businesses across diverse industries achieve sustainable growth through our transparent, results-focused approach.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                {[
                  { number: "200+", label: "Clients" },
                  { number: "500+", label: "Projects" },
                  { number: "30", label: "Team Members" },
                  { number: "15", label: "Awards" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-zinc-800/50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-500 mb-2">{stat.number}</div>
                    <div className="text-zinc-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="md:p-20 py-20 px-5 bg-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white">
              Our <span className="text-purple-500">Values</span>
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              The core principles that guide everything we do at Magnetiq Media.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10" />,
                title: "Results Over Reports",
                description: "We focus on delivering measurable business outcomes rather than vanity metrics.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "True Partnership",
                description: "We act as an extension of your team, deeply invested in your success.",
              },
              {
                icon: <Trophy className="h-10 w-10" />,
                title: "Transparency",
                description: "Clear communication and honest reporting are the foundation of our client relationships.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="card text-center p-6 bg-zinc-900 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 text-purple-500 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold">
              Meet Our <span className="text-purple-500">Team</span>
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              The talented individuals behind our award-winning marketing strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                position: "CEO & Founder",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              },
              {
                name: "Jamie Lee",
                position: "Creative Director",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              },
              {
                name: "Sam Rivera",
                position: "Head of SEO",
                image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              },
              {
                name: "Taylor Kim",
                position: "Social Media Director",
                image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-purple-500 mb-3">{member.position}</p>
                <div className="flex justify-center gap-3">
                  {['Twitter', 'LinkedIn', 'Email'].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-zinc-400 hover:text-purple-500 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
