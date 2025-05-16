import { Customer } from "@/types";

export const searchCustomer = async (email: string, storeUrl?: string): Promise<Customer | null> => {
    console.log(storeUrl);
  const res = await fetch(`${storeUrl || process.env.NEXT_PUBLIC_API_URL}/customers/search?email=${email}`);
  
  if (!res.ok) {
    console.log("Customer not found");
    return null;
  }
  
  const data = await res.json();
  if (!data || Object.keys(data).length === 0) {
    console.log("Customer not found");
    return null;
  }
  
  return data;
};
