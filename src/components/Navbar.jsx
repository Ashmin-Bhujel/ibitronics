import { FaApple } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-dark">
      <div className="mx-auto max-w-[1600px] px-2 sm:px-6 py-8">
        <div className="flex flex-wrap items-center justify-center flex-1 gap-8 max-md:flex-col md:items-stretch md:justify-start">
          {/* Logo */}
          <Link className="flex items-center flex-shrink-0 mr-4" to="/">
            <span className="ml-2 text-3xl text-light font-barlow">
              <div className="flex items-center gap-2">
                <FaApple />
                iBitronics
              </div>
            </span>
          </Link>

          {/* Navigation */}
          <div className="md:ml-auto">
            <div className="flex flex-wrap items-center gap-4 text-lg max-md:flex-col">
              <NavLink
                to="/"
                className="px-3 py-2 text-light hover:text-primary"
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="px-3 py-2 text-light hover:text-primary"
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className="px-3 py-2 text-light hover:text-primary"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
