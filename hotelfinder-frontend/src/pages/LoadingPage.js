import React from 'react';
import { motion } from 'framer-motion';
import { letterAnimation, containerAnimation } from '../constants/LoadingAnimations';

const LoadingPage = () => {
  const text = "Welcome to HotelSeek".split("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="flex space-x-1"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        {text.map((letter, index) => (
          <motion.span
            key={index}
            className="text-5xl font-bold text-gray-800"
            variants={letterAnimation}
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="w-20 h-20 border-4 border-blue-500 border-solid rounded-full mt-8"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{ borderTopColor: 'transparent' }}
      />
      
      <h2 className="text-2xl font-semibold mt-6 text-gray-700">Checking location permissions...</h2>
    </div>
  );
};

export default LoadingPage;
