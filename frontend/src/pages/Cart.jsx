import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../utils/contexts/StoreContext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, products, removeFromCart } = useContext(StoreContext);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    try {
      const allItemsTotalArrar = Object.keys(cartItems).map((id) => {
        return (
          products.find((product) => product.id == id).price * cartItems[id]
        );
      });
      const grandTotal = allItemsTotalArrar.reduce((a, b) => a + b, 0);
      setTotalPrice(grandTotal);
    } catch (error) {
      console.log(error);
    }
  }, [cartItems, products]);

  return (
    <div className="min-h-screen">
      <section>
        <div className="container px-6 pt-6 m-auto">
          <Link
            to="/"
            className="flex items-center text-xl text-dark hover:text-primary"
          >
            <FaArrowLeft className="inline-block mr-2" />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </section>

      <section>
        <div className="container px-6 py-10 m-auto">
          <div className="flex justify-center w-full gap-6 max-md:flex-col">
            <main className="flex-1">
              <div className="p-6 text-center rounded-lg shadow-md bg-light md:text-left">
                <h3 className="mb-6 text-2xl font-bold">Cart Items</h3>
                <div>
                  {totalItems === 0 ? (
                    <div className="text-lg">Your cart is empty</div>
                  ) : (
                    products.map((item) => {
                      if (cartItems[item.id] > 0) {
                        return (
                          <CartItem
                            key={item.id}
                            product={item}
                            quantity={cartItems[item.id]}
                            removeFromCart={removeFromCart}
                          />
                        );
                      }
                    })
                  )}
                </div>
              </div>
            </main>

            <aside className="flex flex-col flex-1 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-xl font-bold">Grand Total</h3>
                <p className="text-lg font-semibold">Rs. {totalPrice}</p>
              </div>

              <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                <h3 className="flex-1 mb-6 text-xl font-bold">Checkout</h3>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
