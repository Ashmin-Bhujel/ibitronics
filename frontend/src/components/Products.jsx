import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Product from "../components/Product";
import ViewAll from "./ViewAll";

export default function Products({ isHomePage = false }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function fetchProducts() {
      const apiURL = isHomePage
        ? `api/products/list?_limit=3`
        : `api/products/list`;

      try {
        const response = await fetch(apiURL);

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();

    return () => {
      setIsLoading(false);
    };
  }, [isHomePage]);

  let totalProducts = isHomePage ? products.slice(0, 3) : products;

  {
    if (!isHomePage && category === "All") {
      totalProducts;
    } else if (!isHomePage) {
      totalProducts = totalProducts.filter(
        (product) => product.category === category
      );
    }
  }

  return (
    <>
      <section className="min-h-screen px-4 py-16">
        <div className="m-auto container-xl lg:container">
          <h2 className="mb-10 text-3xl font-bold text-center text-dark">
            {isHomePage ? "Some Recent Products" : "Browse Products"}
          </h2>

          {!isHomePage && (
            <div className="text-dark text-xl my-12 mx-auto">
              <ul className="flex flex-wrap max-md:flex-col items-center justify-center gap-12">
                <li>
                  <button
                    className={`${
                      category === "All" && "active"
                    } hover:text-primary`}
                    onClick={() => {
                      setCategory("All");
                    }}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    className={`${
                      category === "MacBook" && "active"
                    } hover:text-primary`}
                    onClick={() => {
                      setCategory("MacBook");
                    }}
                  >
                    MacBook
                  </button>
                </li>
                <li>
                  <button
                    className={`${
                      category === "iPhone" && "active"
                    } hover:text-primary`}
                    onClick={() => {
                      setCategory("iPhone");
                    }}
                  >
                    iPhone
                  </button>
                </li>
                <li>
                  <button
                    className={`${
                      category === "Apple Watch" && "active"
                    } hover:text-primary`}
                    onClick={() => {
                      setCategory("Apple Watch");
                    }}
                  >
                    Apple Watch
                  </button>
                </li>
                <li>
                  <button
                    className={`${
                      category === "iPad" && "active"
                    } hover:text-primary`}
                    onClick={() => {
                      setCategory("iPad");
                    }}
                  >
                    iPad
                  </button>
                </li>
              </ul>
            </div>
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
}

Products.propTypes = {
  isHomePage: PropTypes.bool,
};
