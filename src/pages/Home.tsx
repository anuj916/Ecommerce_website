import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <section className="px-6 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold text-black">
          Welcome to Our Store
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-black">
          Discover quality products at affordable prices.
          Explore our collection and find everything you need.
        </p>

        <Link
          to="/products"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          View Products
        </Link>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-xl border-2 border-blue-600 bg-white p-6 text-center">
            <h2 className="mb-3 text-2xl font-bold text-blue-600">
              Quality Products
            </h2>

            <p className="text-black">
              We provide quality products for your everyday needs.
            </p>
          </div>

          <div className="rounded-xl border-2 border-green-600 bg-white p-6 text-center">
            <h2 className="mb-3 text-2xl font-bold text-green-600">
              Affordable Prices
            </h2>

            <p className="text-black">
              Find great products at reasonable and affordable prices.
            </p>
          </div>

          <div className="rounded-xl border-2 border-red-600 bg-white p-6 text-center">
            <h2 className="mb-3 text-2xl font-bold text-red-600">
              Easy Shopping
            </h2>

            <p className="text-black">
              Browse our products and easily find what you need.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}