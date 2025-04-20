import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/media-logo-removebg-preview.png"

const Loader = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  // Animation variants for the Zap icon
  const zapVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  // Animation variants for the text
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Animation variants for the letter loading
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const magnetiqLetters = "Magnetiq".split("");
  const mediaLetters = "Media".split("");

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <motion.div 
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="mb-6"
          variants={zapVariants}
        >
          <img src={logo} alt="" className='w-[100px] h-[100px]' />
        </motion.div>
        
        <motion.div 
          className="flex items-center font-bold text-2xl md:text-4xl mb-8"
          variants={textVariants}
        >
          <div className="flex">
            {magnetiqLetters.map((letter, index) => (
              <motion.span 
                key={`magnetiq-${index}`} 
                variants={letterVariants}
                custom={index}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="ml-2 text-purple-500 flex">
            {mediaLetters.map((letter, index) => (
              <motion.span 
                key={`media-${index}`} 
                variants={letterVariants}
                custom={index + magnetiqLetters.length}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={textVariants}
        >
          <motion.div
            className="h-0.5 w-24 bg-purple-500 rounded-full mb-4"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ 
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
