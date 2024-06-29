import { FaApple, FaCartShopping, FaCircleXmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../utils/contexts/StoreContext";

const MobileMenu = ({ setShowLogin, setShowMobileMenu }) => {
  const { cartItems } = useContext(StoreContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let count = 0;
    Object.values(cartItems).forEach((item) => {
      count += item;
    });
    setTotalItems(count);
  }, [cartItems]);

  return (
    <div className="absolute flex flex-col items-center justify-center gap-16 bg-dark text-light w-full h-full z-10">
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

        <button
          to="/login"
          className="px-6 py-2 font-medium text-lg rounded-full text-dark bg-lightMid hover:bg-primary hover:text-light"
          onClick={() => {
            setShowMobileMenu(false);
            setShowLogin(true);
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  setShowLogin: PropTypes.func,
  setShowMobileMenu: PropTypes.func,
};
