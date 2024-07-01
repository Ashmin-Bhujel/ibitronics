import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Product from "../components/Product";
import ViewAll from "./ViewAll";
import { StoreContext } from "../utils/contexts/StoreContext";
import ProductFilter from "./ProductFilter";

const Products = ({ isHomePage = false }) => {
  const { products, isLoading } = useContext(StoreContext);
  const [category, setCategory] = useState("All");

  let totalProducts = isHomePage ? products.slice(0, 3) : products;

  if (!isHomePage && category === "All") {
    totalProducts;
  } else if (!isHomePage) {
    totalProducts = totalProducts.filter(
      (product) => product.category === category
    );
  }

  return (
    <>
      <section className="min-h-screen px-4 py-16">
        <div className="m-auto container-xl lg:container">
          <h2 className="mb-10 text-3xl font-bold text-center text-dark">
            {isHomePage ? "Some Recent Products" : "Browse Products"}
          </h2>

          {!isHomePage && (
            <ProductFilter category={category} setCategory={setCategory} />
          )}

          {isLoading ? (
            <h2 className="text-4xl text-center">Loading Data</h2>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {totalProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        {isHomePage && <ViewAll />}
      </section>
    </>
  );
};

export default Products;

Products.propTypes = {
  isHomePage: PropTypes.bool,
};
