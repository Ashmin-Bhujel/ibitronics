import PropTypes from "prop-types";
import { useContext } from "react";
import { StoreContext } from "../utils/contexts/StoreContext";

const Order = ({ order }) => {
  const { products } = useContext(StoreContext);

  return (
    <div className="flex w-full p-6 rounded-lg shadow-md bg-light max-lg:flex-col max-lg:justify-center max-lg:gap-4 justify-evenly">
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">Order ID:</p>
        <p className="text-center max-lg:text-left">{order.id}</p>
      </div>
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">User ID:</p>
        <p className="text-center max-lg:text-left">{order.userId}</p>
      </div>
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">Total items:</p>
        <p className="text-center max-lg:text-left">
          {order.cartInfo.totalItems}
        </p>
      </div>
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">Products:</p>
        <p className="text-center max-lg:text-left">
          {Object.keys(order.cartInfo.products).map((productId) => {
            const product = products.find(
              (product) => product.id === Number(productId)
            );
            return (
              <span key={productId} className="block">
                {product.name} x {order.cartInfo.products[productId]}
              </span>
            );
          })}
        </p>
      </div>
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">Total Cost:</p>
        <p className="text-center max-lg:text-left">
          {order.cartInfo.totalPrice}
        </p>
      </div>
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">Placed At:</p>
        <p className="text-center max-lg:text-left">
          <span>{order.createdAt.split("T")[0]}</span>
        </p>
      </div>
    </div>
  );
};

export default Order;

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    cartInfo: PropTypes.shape({
      totalItems: PropTypes.number,
      totalPrice: PropTypes.number,
      subtotal: PropTypes.number,
      deliveryCost: PropTypes.number,
      products: PropTypes.object,
    }),
    createdAt: PropTypes.string,
  }),
};
