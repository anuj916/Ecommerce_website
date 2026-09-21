import Button from "../Components/Buttons";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  onAddToCart?: (id: number) => void;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      
      <div className="h-56 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="mb-1 text-sm text-gray-500">
          {category}
        </p>

        <h2 className="mb-3 text-lg font-semibold text-gray-800">
          {name}
        </h2>

        <p className="mb-4 text-xl font-bold text-blue-600">
          ${price}
        </p>

        <Button
          text="Add to Cart"
          onClick={() => onAddToCart?.(id)}
        />
      </div>
    </div>
  );
}