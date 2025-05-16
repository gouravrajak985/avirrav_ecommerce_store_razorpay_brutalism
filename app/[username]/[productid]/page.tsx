import  BillboardPage  from "@/components/billboard";
import { Footer } from "@/components/footer";
import  ImageGallery  from "@/components/image-gallery";
import  ProductInfo  from "@/components/product-info";
import PricingInfo  from "@/components/pricing-info";
import FeaturedProducts  from "@/components/featured-products";
import { Navbar } from "@/components/ui/navbar";
import getStore from "@/actions/getStore";
import getProduct from "@/actions/getProduct";
import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";

interface StorePageProps {
  params: {
    username: string;
    productid: string;
  };
}


const Home = async ({params}: StorePageProps) => {
  const store = await getStore(params.username);
  const products = await getProducts({ isFeatured: true }, store?.apiUrl);
  const product = await getProduct(params.productid, store?.apiUrl);
  const billboard = await getBillboard(store?.homeBillboardId, store?.apiUrl);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar storeUrl={store?.apiUrl} username={params.username} productId={params.productid} />
      <main className="flex-grow pt-20 mt-8">
        <div className="neu-container">
          {/* Billboard section with matching border */}
          <div className="border-2">
            <BillboardPage data={billboard} />
          </div>
          
          {/* Main-1 section with matching border width */}
          <div className="grid grid-cols-1 border-2 border-t-0 lg:grid-cols-10">
            <div className="lg:col-span-7 p-2 flex items-center justify-center border-b lg:border-b-0 lg:border-r">
              <div className="w-full h-full">
                <ImageGallery images={product.images} />
              </div>
            </div>
            <div className="lg:col-span-3 p-4">
              <PricingInfo items={[product]} username={params.username} productId={params.productid} storeUrl={store?.apiUrl} />
            </div>
          </div>
          
          {/* Rest of the sections maintain the connected borders */}
          <div className="border-2 border-t-0">
            <div className="p-4">
              <ProductInfo product={[product]} />
            </div>
          </div>
          
          <div className="border-2 border-t-0">
            <div className="p-4">
              <FeaturedProducts products={products} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;