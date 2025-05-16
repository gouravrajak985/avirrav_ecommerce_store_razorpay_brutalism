'use client';

import { motion } from "framer-motion";
import { useState } from "react";

interface BuyNowButtonProps {
  onClick: () => void;
  className?: string;
}

export function BuyNowButton({ onClick, className = "" }: BuyNowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.button
      className={`neu-button relative overflow-hidden ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.03,
      }}
      transition={{ duration: 0.2 }}
    >
      <span className="relative z-10">BUY NOW</span>
      <motion.div 
        className="absolute inset-0 bg-black dark:bg-white"
        initial={{ x: '-100%', y: '100%' }}
        animate={{ 
          x: isHovered ? '0%' : '-100%', 
          y: isHovered ? '0%' : '100%' 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 bg-[rgb(var(--primary-rgb))]"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
} 