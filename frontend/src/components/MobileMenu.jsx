import { FaApple, FaCartShopping, FaCircleXmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../utils/contexts/StoreContext";
import toast from "react-hot-toast";

const MobileMenu = ({ setShowLogin, setShowMobileMenu }) => {
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
    <div className="fixed top-0 min-h-screen flex flex-col items-center justify-center gap-16 bg-dark text-light w-full h-full z-10">
      <div className="flex items-center gap-4">
        <div className="text-3xl font-semibold font-gilroy text-light sm:text-4xl">
          <Link to="/" className="flex items-center gap-1 ">
            <FaApple />
            <span>iBitronics</span>
          </Link>
        </div>
        <FaCircleXmark
          className="text-3xl absolute top-8 right-8"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        />
      </div>

      <div className="items-center flex-col gap-8 flex md:text-xl">
        <NavLink
          to="/"
          className="text-light hover:text-primary"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className="text-light hover:text-primary"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        >
          Products
        </NavLink>

        <NavLink
          to="/dashboard"
          className="text-light hover:text-primary"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/cart"
          className="relative text-light hover:text-primary"
          onClick={() => {
            setShowMobileMenu(false);
          }}
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
              setShowMobileMenu(false);
              setShowLogin(true);
              toast("Login to continue shopping", {
                icon: "🔒",
                style: {
                  borderRadius: "9999px",
                  padding: "1rem",
                },
              });
            }}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  setShowLogin: PropTypes.func,
  setShowMobileMenu: PropTypes.func,
};
