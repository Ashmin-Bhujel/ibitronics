import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import Login from "../components/Login";
import MobileMenu from "../components/MobileMenu";
import { Toaster } from "react-hot-toast";

const DefaultLayout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

      <Navbar
        setShowLogin={setShowLogin}
        setShowMobileMenu={setShowMobileMenu}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
