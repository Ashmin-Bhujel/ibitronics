import { FaApple, FaBars, FaCartShopping } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-dark">
      <div className="flex items-center justify-between p-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-2xl font-semibold font-gilroy text-light sm:text-3xl md:text-4xl">
          <Link to="/" className="flex items-center gap-1 ">
            <FaApple />
            <span>iBitronics</span>
          </Link>
        </div>

        <div className="items-center gap-8 max-md:hidden md:flex md:text-xl ">
          <NavLink to="/" className="text-light hover:text-primary">
            Home
          </NavLink>

          <NavLink to="/products" className="text-light hover:text-primary">
            Products
          </NavLink>

          <NavLink to="/dashboard" className="text-light hover:text-primary">
            Dashboard
          </NavLink>

          <Link to="/cart" className="relative text-light hover:text-primary">
            <div>
              <div className="text-sm absolute top-[-1rem] right-[-0.5rem]">
                0
              </div>
              <FaCartShopping />
            </div>
          </Link>

          <Link
            to="/login"
            className="px-6 py-2 font-medium text-lg rounded-full text-dark bg-lightMid hover:bg-primary hover:text-light"
          >
            Login
          </Link>
        </div>

        <button className="max-md:block md:hidden text-light text-2xl active:text-primary">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
