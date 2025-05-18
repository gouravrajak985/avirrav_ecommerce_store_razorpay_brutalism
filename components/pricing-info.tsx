'use client';

import { useState } from "react";
import { CheckoutDialog } from "./checkout-dialog";
import { BuyNowButton } from "./buy-now-button";
import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, RefreshCcw } from "lucide-react";
import { Product } from "@/types";

interface PricingInfoProps {
  items: Product[];
  username: string;
  productId: string;
  storeUrl: string;
}

const PricingInfo: React.FC<PricingInfoProps> = ({ items, username, productId, storeUrl }) => {
  const [open, setOpen] = useState(false);

  const handleCheckout = (email: string) => {
    console.log("Proceeding to checkout with email:", email);
  };

  return (
    <div className="space-y-6">
      {/* Price Section */}
      <div className="neu-border p-6 bg-[#FFE5E5]">
        <h3 className="text-2xl font-bold mb-4">Price</h3>
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-5xl font-black">₹{items[0].price}</span>
          <span className="text-sm font-medium line-through text-gray-500">₹{parseInt(items[0].price) * 1.2}</span>
        </div>
        <BuyNowButton
          className="w-full transform hover:translate-x-1 hover:-translate-y-1 transition-transform"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Guarantees Section */}
      <div className="neu-border p-6 bg-[#F0F8FF]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 neu-border bg-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-medium">Verified Seller</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 neu-border bg-white">
              <RefreshCcw className="w-5 h-5" />
            </div>
            <span className="font-medium">Secure Payment</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 neu-border bg-white">
              <BadgeCheck className="w-5 h-5" />
            </div>
            <span className="font-medium">Genuine Products Guaranteed</span>
          </div>
        </div>
      </div>

      <CheckoutDialog 
        open={open} 
        onOpenChange={setOpen} 
        onCheckout={handleCheckout} 
        storeUrl={storeUrl}
        username={username}
        productId={productId}
      />
    </div>
  );
};

export default PricingInfo;