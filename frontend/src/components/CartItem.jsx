import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const CartItem = ({ product, quantity, removeFromCart }) => {
  return (
    <div className="flex max-xl:flex-col max-xl:gap-4 items-center justify-between p-4 mb-4 border-b border-gray-200">
      <div className="flex items-center">
        <img
          src={`/images/products/${product.image}`}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-lg"
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

      <div className="flex max-xl:flex-col max-xl:gap-4 items-center">
        <div className="mr-4 min-w-[150px] text-right font-semibold">
          <span>Total = Rs. {product.price * quantity}</span>
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
          className="h-[36px] w-full bg-red-600 hover:bg-red-500 text-light px-4 py-2 rounded-full text-center text-sm"
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
