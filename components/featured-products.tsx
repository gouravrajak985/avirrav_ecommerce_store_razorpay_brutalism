import { Product } from "@/types";
import { ProductCard } from "./product-card";

interface FeaturedProductsProps {
  products: Product [];
}

const  FeaturedProducts : React.FC<FeaturedProductsProps>=  ({ products })=>{
  return (
    <div className="neu-card border-0">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* ProductCard components with joined borders */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={parseFloat(product.price)}
            image={product.images[0]?.url || ""}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;