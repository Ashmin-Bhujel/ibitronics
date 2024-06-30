import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const CartItem = ({ product, quantity, removeFromCart }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-4 border-b border-gray-200 max-xl:flex-col max-xl:gap-4">
      <div className="flex items-center">
        <img
          src={
            product.image
              ? `/images/products/${product.image}`
              : "/src/assets/placeholder.png"
          }
          alt={product.name}
          className="object-cover w-16 h-16 rounded-lg"
        />
        <div className="ml-4">
          <Link
            to={`/products/${product.id}`}
            className="text-lg font-semibold text-dark hover:text-primary"
          >
            <div>
              <span>{product.name} </span>
              <span className="text-xs">[x{quantity}]</span>
            </div>
          </Link>
          <div className="text-sm text-gray-600">Rs. {product.price}</div>
        </div>
      </div>

      <div className="flex items-center max-xl:flex-col max-xl:gap-4">
        <div className="mr-4 min-w-[150px] flex flex-col text-center font-semibold">
          <span>Total</span>
          <span>Rs. {product.price * quantity}</span>
        </div>
        <button
          onClick={() => {
            removeFromCart(product.id);
            toast.success(`One ${product.name} removed from cart`, {
              style: {
                borderRadius: "9999px",
                padding: "1rem",
              },
            });
          }}
          className="w-full bg-red-600 hover:bg-red-500 text-light px-6 py-3 rounded-full text-center text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};
