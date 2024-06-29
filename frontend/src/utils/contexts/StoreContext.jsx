import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const StoreContext = createContext({
  products: [],
  isLoading: false,
  productCount: 0,
  setProducts: () => {},
  setIsLoading: () => {},
});

const StoreContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const store = { products, isLoading, setProducts, setIsLoading };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
