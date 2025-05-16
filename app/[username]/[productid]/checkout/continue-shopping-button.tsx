'use client';

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function ContinueShoppingButton() {
  const router = useRouter();
  
  return (
    <Button 
      variant="outline" 
      className="neu-button neu-shadow border-black dark:border-white hover:bg-background transition-all duration-200"
      onClick={() => router.push("/")}
    >
      Continue Shopping
    </Button>
  );
} 