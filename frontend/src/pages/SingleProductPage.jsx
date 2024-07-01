import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCartShopping,
  FaCircleMinus,
  FaCirclePlus,
} from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../utils/contexts/StoreContext";
import toast from "react-hot-toast";
import { toastStyle } from "../utils/toastStyle";

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`/api/products/get/${id}`);

        const [data] = await response.json();

        setProduct(data);
        setIsLoading(true);
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
  }, [id]);

  return isLoading ? (
    <div className="min-h-screen text-4xl flex items-center justify-center">
      Loading Data
    </div>
  ) : (
    <>
      <section>
        <div className="container px-6 pt-6 m-auto">
          <Link
            to="/products"
            className="flex items-center text-xl text-dark hover:text-primary"
          >
            <FaArrowLeft className="inline-block mr-2" />
            <span>Back to Products Page</span>
          </Link>
        </div>
      </section>

      <section>
        <div className="container px-6 py-10 m-auto">
          <div className="flex justify-center w-full gap-6 max-md:flex-col">
            <main className="flex-1">
              <div className="min-h-full p-6 text-center rounded-lg shadow-md bg-light md:text-left">
                <div className="mb-4 text-darkMid">{product.category}</div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <img
                  src={
                    product.image
                      ? `/images/products/${product.image}`
                      : "/src/assets/placeholder.png"
                  }
                  alt={product.name}
                  className="h-[540px] object-cover mx-auto"
                />
                <p className="mb-4 text-xl font-semibold text-dark">
                  Price: {product.price}
                </p>
                <p className="text-primary">
                  {product.stockAvailability ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </main>

            <aside className="flex flex-col flex-1 gap-6">
              <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-xl font-bold">Specifications</h3>

                <ul>
                  <li>
                    <span className="font-semibold min-w-[75px] inline-block">
                      Storage:{" "}
                    </span>
                    <span>{product.storage} GB</span>
                  </li>
                  <li>
                    <span className="font-semibold min-w-[75px] inline-block">
                      Display:{" "}
                    </span>
                    <span>{product.display} Inch</span>
                  </li>
                  <li>
                    <span className="font-semibold min-w-[75px] inline-block">
                      Chip:{" "}
                    </span>
                    <span>{product.chip} Chip</span>
                  </li>
                  <li>
                    <span className="font-semibold min-w-[75px] inline-block">
                      Batery:{" "}
                    </span>
                    <span>{product.battery} Hrs (Apprx.)</span>
                  </li>
                  <li>
                    <span className="font-semibold min-w-[75px] inline-block">
                      OS:{" "}
                    </span>
                    <span>{product.os}</span>
                  </li>
                </ul>
              </div>

              <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                <h3 className="flex-1 mb-6 text-xl font-bold">Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  enim id error deserunt magnam reiciendis voluptate sequi
                  laudantium voluptatibus odit nostrum odio non doloremque vel
                  aspernatur hic, dignissimos recusandae, facilis quas maiores
                  perspiciatis! Repellat cupiditate repudiandae perferendis quis
                  eum corporis aspernatur, consectetur explicabo iusto quasi!
                  Adipisci magni voluptate possimus praesentium.
                </p>
              </div>

              <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                <h3 className="flex items-center flex-1 gap-2 mb-6 text-xl font-bold">
                  <FaCartShopping />
                  <span>Add to Cart</span>
                </h3>

                <div className="flex items-center justify-center gap-8 max-lg:flex-col">
                  <div className="flex items-center gap-4 p-4 mx-auto text-xl border rounded-full shadow-md bg-lightMid w-fit">
                    <button
                      onClick={() => {
                        removeFromCart(product.id);
                        if (cartItems[product.id] > 0) {
                          toast.success(
                            `One ${product.name} removed from cart`,
                            {
                              style: toastStyle,
                            }
                          );
                        }
                      }}
                      className="text-2xl hover:text-dark/90"
                    >
                      <FaCircleMinus />
                    </button>
                    <span className="text-center min-w-10">
                      {cartItems[product.id] || 0}
                    </span>
                    <button
                      onClick={() => {
                        addToCart(product.id);
                        toast.success(`One ${product.name} added to cart`, {
                          style: toastStyle,
                        });
                      }}
                      className="text-2xl hover:text-dark/90"
                    >
                      <FaCirclePlus />
                    </button>
                  </div>
                  <Link
                    to="/cart"
                    className="block w-full px-6 py-4 mx-auto font-semibold text-center rounded-full bg-dark text-light hover:bg-dark/90"
                  >
                    Go to Cart
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
