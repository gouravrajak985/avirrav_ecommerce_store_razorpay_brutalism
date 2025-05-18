"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/types";

interface GalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<GalleryProps> = ({
  images = []
}) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      {/* Main image */}
      <div className="relative mb-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage.id}
            src={activeImage.url}
            alt={activeImage.alt}
            className="w-full h-[500px] object-cover neu-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        
        {/* Navigation buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button 
            onClick={() => {
              const currentIndex = images.findIndex(img => img.id === activeImage.id);
              const prevIndex = currentIndex <= 0 ? images.length - 1 : currentIndex - 1;
              setActiveImage(images[prevIndex]);
            }}
            className="p-3 neu-border bg-white hover:bg-[#FFE5E5] transform hover:translate-x-1 hover:-translate-y-1 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => {
              const currentIndex = images.findIndex(img => img.id === activeImage.id);
              const nextIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
              setActiveImage(images[nextIndex]);
            }}
            className="p-3 neu-border bg-white hover:bg-[#FFE5E5] transform hover:translate-x-1 hover:-translate-y-1 transition-transform"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            className={`neu-border overflow-hidden transform hover:translate-x-1 hover:-translate-y-1 transition-transform ${
              activeImage.id === image.id 
                ? "border-[4px] border-[#FF4F58]" 
                : ""
            }`}
            onClick={() => setActiveImage(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;