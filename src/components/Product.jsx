import PropTypes from "prop-types";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="relative shadow-md bg-light rounded-xl">
      <div className="p-6">
        <div className="mb-2">
          <div className="my-2 text-darkMid">{product.category}</div>

          <div className="flex items-center justify-center mt-2 mb-2 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="object-center object-fill h-[350px]"
            />
          </div>

          <h3 className="text-xl font-semibold font-gilroy">{product.name}</h3>
        </div>

        <h3 className="mb-2 text-darkMid">Rs. {product.price}</h3>

        <div className="mb-5 border border-darkMid/10"></div>

        <div className="flex flex-col justify-between mb-4 lg:flex-row">
          <div className="mb-3 text-primary">{product.stockAvailibilty}</div>

          <Link
            to={`/products/${product.id}`}
            className="h-[36px] bg-dark hover:bg-dark/85 text-light px-4 py-2 rounded-lg text-center text-sm"
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          >
            <div className="flex items-center gap-2">
              <FaCartShopping />
              Shop Now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.any,
    category: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    stockAvailibilty: PropTypes.string,
  }),
};
