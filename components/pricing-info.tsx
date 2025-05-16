'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckoutDialog } from "./checkout-dialog";
import { BuyNowButton } from "./buy-now-button";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Product } from "@/types";

interface PricingInfoProps {
  items: Product[];
  username: string;
  productId: string;
  storeUrl: string;
}

const PricingInfo: React.FC<PricingInfoProps> = ({ items, username, productId, storeUrl }) => {
  const router = useRouter(); 
  const [open, setOpen] = useState(false);
  // This would typically come from an API or state management
  const salesCount = 247;

  const handleCheckout = (email: string) => {
    // In a real application, you would save the email and redirect to checkout
    console.log("Proceeding to checkout with email:", email);
    // Example: redirect to a checkout page
    // router.push(`/checkout?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="lg:border-l-0"> {/* Remove left border on desktop */}
      <div className="neu-card border-b-0">
        <div className="neu-card mb-8 bg-[rgb(var(--primary-rgb))] text-white">
          <h3 className="text-2xl font-bold mb-4">Pricing</h3>
          <div className="flex items-end gap-2 mb-6">
            <span className="text-4xl font-black">₹{items[0].price}</span>
          </div>
          <BuyNowButton
            className="w-full mb-4"
            onClick={() => setOpen(true)}
          />
          
          {/* Sales Count Box */}
          {/* <motion.div 
            className="neu-border bg-[rgb(var(--accent-rgb))] text-black p-3 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <BadgeCheck size={18} />
            <span className="font-bold">{salesCount}</span>
            <span className="font-medium">Orders</span>
          </motion.div> */}
        </div>
      </div>
      <div className="neu-card">
        <div className="neu-card bg-[rgb(var(--secondary-rgb))]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full flex items-center justify-center neu-border bg-white">
              <span className="font-bold">!</span>
            </div>
            <h3 className="text-xl font-bold">NOTE</h3>
          </div>
          <p>Thank you for shopping with us!
            If you have any questions or need support, feel free to contact us.
            We're always happy to help!</p>
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