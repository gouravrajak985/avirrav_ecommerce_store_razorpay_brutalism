import BillboardPage from "@/components/billboard";
import { Footer } from "@/components/footer";
import ImageGallery from "@/components/image-gallery";
import ProductInfo from "@/components/product-info";
import PricingInfo from "@/components/pricing-info";
import FeaturedProducts from "@/components/featured-products";
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
    <div className="flex flex-col min-h-screen bg-[#FFFAF0]">
      <Navbar storeUrl={store?.apiUrl} username={params.username} productId={params.productid} />
      
      {/* Billboard Section */}
      <div className="mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neu-border bg-white transform hover:translate-x-1 hover:-translate-y-1 transition-transform">
            <BillboardPage data={billboard} />
          </div>
        </div>
      </div>

      <main className="flex-grow mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Product Section - Gallery and Pricing side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Left Column - Image Gallery (8 columns) */}
            <div className="lg:col-span-8">
              <div className="neu-border p-6 bg-white transform hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <ImageGallery images={product.images} />
              </div>
            </div>
            
            {/* Right Column - Pricing Info (4 columns) */}
            <div className="lg:col-span-4">
              <div className="neu-border p-6 bg-white transform hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <PricingInfo 
                  items={[product]} 
                  username={params.username} 
                  productId={params.productid} 
                  storeUrl={store?.apiUrl} 
                />
              </div>
            </div>
          </div>

          {/* Product Info Section - Full width below */}
          <div className="neu-border p-6 bg-white transform hover:translate-x-1 hover:-translate-y-1 transition-transform mb-8">
            <ProductInfo product={[product]} />
          </div>

          {/* Featured Products Section */}
          <div className="neu-border p-6 bg-white transform hover:translate-x-1 hover:-translate-y-1 transition-transform mb-16">
            <FeaturedProducts products={products} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;