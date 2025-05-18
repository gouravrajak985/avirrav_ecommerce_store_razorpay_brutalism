import { Footer } from "@/components/footer";
import { CheckoutForm } from "./checkout-form";
import { ContinueShoppingButton } from "./continue-shopping-button";
import getProduct from "@/actions/getProduct";
import getStore from "@/actions/getStore";

interface CheckoutPageProps {
  params: {
    username: string;
    productid: string;
  };
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const store = await getStore(params.username);
  const product = await getProduct(params.productid, store?.apiUrl);
  const productPrice = product?.price;
  const productName = product?.name;
  
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFAF0]">
      {/* Custom navbar with checkout headline and continue shopping button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF0]">
        <div className="neu-container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-black tracking-tight">CHECKOUT</h1>
            <ContinueShoppingButton />
          </div>
        </div>
        <div className="h-[3px] bg-black" />
      </div>
      
      <main className="flex-grow pt-24">
        <div className="neu-container max-w-4xl mx-auto">
          <CheckoutForm 
            productPrice={productPrice} 
            productName={productName} 
            productId={params.productid} 
            storeUrl={store?.apiUrl} 
            username={params.username} 
            storeName={store?.name} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}