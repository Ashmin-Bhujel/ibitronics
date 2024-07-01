import { useContext, useEffect, useState } from "react";
import { FaApple, FaBars, FaCartShopping } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import { StoreContext } from "../utils/contexts/StoreContext";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { toastStyle } from "../utils/toastStyle";

const Navbar = ({ setShowLogin, setShowMobileMenu }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  const user = JSON.parse(localStorage.getItem("user"));
  const { cartItems } = useContext(StoreContext);
  const [totalItems, setTotalItems] = useState(0);

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  useEffect(() => {
    try {
      let count = 0;
      Object.values(cartItems).forEach((item) => {
        count += item;
      });
      setTotalItems(count);
    } catch (error) {
      console.log(error);
    }
  }, [cartItems]);

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

          <NavLink
            to="/cart"
            className="relative text-light hover:text-primary"
          >
            <div>
              <div className="text-sm absolute top-[-1rem] right-[-0.5rem]">
                {totalItems}
              </div>
              <FaCartShopping />
            </div>
          </NavLink>

          {isAuthenticated ? (
            <div className="flex flex-col items-center gap-2 relative">
              <button
                onClick={handleSignOut}
                className="px-6 py-2 font-medium text-lg rounded-full text-dark bg-lightMid hover:bg-primary hover:text-light"
              >
                Sign Out
              </button>
              <span className="text-light text-xs absolute -bottom-5">
                {user.username}
              </span>
            </div>
          ) : (
            <button
              to="/login"
              className="px-6 py-2 font-medium text-lg rounded-full text-dark bg-lightMid hover:bg-primary hover:text-light"
              onClick={() => {
                setShowLogin(true);
                toast("Login to continue shopping", {
                  icon: "🔒",
                  style: toastStyle,
                });
              }}
            >
              Log In
            </button>
          )}
        </div>

        <button className="max-md:block md:hidden text-light text-2xl active:text-primary">
          <FaBars
            onClick={() => {
              setShowMobileMenu(true);
            }}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  setShowLogin: PropTypes.func,
  setShowMobileMenu: PropTypes.func,
};
