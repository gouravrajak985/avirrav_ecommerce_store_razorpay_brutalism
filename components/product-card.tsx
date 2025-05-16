interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="neu-card group cursor-pointer transition">
      <div className="aspect-square relative mb-4">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="font-bold text-xl">₹{price}</p>
      </div>
    </div>
  );
}