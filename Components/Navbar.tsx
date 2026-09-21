import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black px-6 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        
        <div className="flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-blue-500">
            Home
          </Link>

          <Link to="/about" className="font-medium hover:text-blue-500">
            About
          </Link>

          <Link to="/products" className="font-medium hover:text-blue-500">
            Products
          </Link>

          <Link to="/contact" className="font-medium hover:text-blue-500">
            Contact
          </Link>

          <Link to="/profile" className="font-medium hover:text-blue-500">
            Profile
          </Link>
        </div>

      </div>
    </nav>
  );
}