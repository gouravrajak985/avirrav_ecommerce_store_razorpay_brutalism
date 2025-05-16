"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const BillboardPage: React.FC<BillboardProps> = ({ data }) => {
  const hasImage = data?.imageUrl && data.imageUrl.length > 0;
  const hasLabel = data?.label && data.label.length > 0;

  return (
    <motion.div 
      className="neu-card sm:mx-8 mt-8 mb-8 p-0 overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image or Color */}
      {hasImage ? (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${data.imageUrl})` }}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-[rgb(var(--accent-rgb))]" />
      )}
      
      {/* Overlay for better text visibility (only for images) */}
      {hasImage && <div className="absolute inset-0 bg-black/50" />}
      
      <div className="neu-container py-28 px-4 flex flex-col items-center justify-center text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {hasLabel ? data.label : "Welcome to our store"}
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default BillboardPage;