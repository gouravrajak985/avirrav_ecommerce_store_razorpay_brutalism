'use client';

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { searchCustomer } from "@/actions/searchCustomer";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type CheckoutFormValues = z.infer<typeof formSchema>;

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCheckout: (email: string) => void;
  storeUrl: string;
  username: string;
  productId: string;
}

export function CheckoutDialog({
  open,
  onOpenChange,
  onCheckout,
  storeUrl,
  username,
  productId,
}: CheckoutDialogProps) {
  const router = useRouter();
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: CheckoutFormValues) {
    const customer = await searchCustomer(data.email, storeUrl);
    // In a real app, we'd store this email in a global state or in localStorage
    localStorage.setItem("customerEmail", customer?.email || data.email);
    localStorage.setItem("customerId", customer?.id || "");
    localStorage.setItem("customerFullName", customer?.fullName || "");
    localStorage.setItem("customerPhone", customer?.phone || "");
    localStorage.setItem("customerShippingAddress", customer?.shippingAddress || "");
    console.log(JSON.stringify(customer?.shippingAddress));
    // Call the onCheckout callback with the email
    onCheckout(data.email);
    
    // Close the dialog
    onOpenChange(false);
    
    // Redirect to the checkout page
    router.push(`/${username}/${productId}/checkout`);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
            Enter your email address to proceed to checkout.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-full">Go to Checkout</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 