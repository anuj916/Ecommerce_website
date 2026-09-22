import { products } from "../Data/Products";

export default function Products() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-black">
        Products
      </h1>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border-2 border-blue-600 bg-white p-5 shadow-md"
          >
            <h2 className="mb-2 text-xl font-bold text-black">
              {product.name}
            </h2>

            <p className="mb-2 text-green-600">
              {product.category}
            </p>

            <p className="text-xl font-bold text-blue-600">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}