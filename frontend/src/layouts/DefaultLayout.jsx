import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import Login from "../components/Login";
import MobileMenu from "../components/MobileMenu";
import { Toaster } from "react-hot-toast";
import AddProduct from "../components/AddProduct";

const DefaultLayout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const outletContext = { setShowLogin, setShowAddProduct };

  return (
    <>
      <Toaster />

      {showLogin && <Login setShowLogin={setShowLogin} />}

      {showMobileMenu && (
        <MobileMenu
          setShowMobileMenu={setShowMobileMenu}
          setShowLogin={setShowLogin}
        />
      )}

      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}

      <Navbar
        setShowLogin={setShowLogin}
        setShowMobileMenu={setShowMobileMenu}
      />

      <Outlet context={outletContext} />
      <Footer />
    </>
  );
};

export default DefaultLayout;
