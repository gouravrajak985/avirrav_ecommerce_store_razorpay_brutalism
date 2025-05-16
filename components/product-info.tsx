"use client";

import { Product } from "@/types";
import { motion } from "framer-motion";

interface ProductInfoProps {
  product: Product[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="neu-card border-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="neu-card mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">{product[0].name}</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-1 neu-border bg-[rgb(var(--accent-rgb))]">{product[0].category.name}</div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Description</h3>
          <p className="mb-4">
            {product[0].description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductInfo;