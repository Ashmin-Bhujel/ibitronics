import PropTypes from "prop-types";
import products from "../assets/products.json";
import Product from "../components/Product";
import ViewAll from "./ViewAll";

export default function Products({ isHomePage = false }) {
  const totalProducts = isHomePage ? products.slice(0, 6) : products;

  return (
    <>
      <section className="min-h-screen px-4 py-10">
        <div className="m-auto container-xl lg:container">
          <h2 className="mb-10 text-3xl font-bold text-center text-dark">
            Browse Products
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {totalProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {isHomePage && <ViewAll />}
    </>
  );
}

Products.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
};
