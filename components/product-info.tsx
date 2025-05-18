"use client";

import { Product } from "@/types";
import { motion } from "framer-motion";
import { Tag, Package, Truck } from "lucide-react";

interface ProductInfoProps {
  product: Product[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-black mb-4 tracking-tight">{product[0].name}</h2>
        
        {/* Category Tag */}
        <div className="inline-flex items-center px-4 py-2 bg-[#FFE5E5] neu-border transform hover:translate-x-1 hover:-translate-y-1 transition-transform mb-6">
          <Tag className="w-4 h-4 mr-2" />
          <span className="font-bold">{product[0].category.name}</span>
        </div>

        {/* Product Features */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <Package className="w-5 h-5" />
            <span className="font-medium">Premium Quality Product</span>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5" />
            <span className="font-medium">Fast & Free Shipping</span>
          </div>
        </div>

        {/* Description */}
        <div className="neu-border p-4 bg-[#F0F8FF]">
          <h3 className="text-xl font-bold mb-3">Description</h3>
          <p className="leading-relaxed">
            {product[0].description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductInfo;