import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const StoreContext = createContext({
  cartItems: {},
  products: [],
  isLoading: false,
  productCount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  setCartItems: () => {},
  setProducts: () => {},
  setIsLoading: () => {},
});

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || {}
  );
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = (productId) => {
    if (!cartItems[productId]) {
      setCartItems((current) => {
        const newCartItems = { ...current, [productId]: 1 };
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        return newCartItems;
      });
    } else {
      setCartItems((current) => {
        const newCartItems = {
          ...current,
          [productId]: cartItems[productId] + 1,
        };
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        return newCartItems;
      });
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((current) => {
      if (cartItems[productId] > 0) {
        const newCartItems = {
          ...current,
          [productId]: cartItems[productId] - 1,
        };
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        return newCartItems;
      } else {
        const newCartItems = { ...current, [productId]: 0 };
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        return newCartItems;
      }
    });
  };

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/products/list");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();

    return () => {
      setIsLoading(false);
    };
  }, []);

  const store = {
    cartItems,
    products,
    isLoading,
    addToCart,
    removeFromCart,
    setCartItems,
    setProducts,
    setIsLoading,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
