'use client';

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function ContinueShoppingButton() {
  const router = useRouter();
  
  return (
    <Button 
      variant="outline"
      onClick={() => router.push("/")}
      className="neu-button bg-white hover:bg-[#FFE5E5] text-black"
    >
    <ArrowLeft className="w-4 h-4 mr-2"/>
      Back
    </Button>
  );
}