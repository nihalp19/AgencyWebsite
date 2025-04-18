import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className="card group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mb-4 text-purple-500 group-hover:text-purple-400 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-zinc-400">
        {description}
      </p>
      <div className="mt-6">
        <a href="#" className="text-purple-500 hover:text-purple-400 inline-flex items-center gap-1 font-medium transition-colors">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
