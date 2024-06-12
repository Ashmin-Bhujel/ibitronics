import PropTypes from "prop-types";
import { FaCartShopping } from "react-icons/fa6";

export default function Product({ product }) {
  return (
    <>
      <div className="bg-light rounded-xl shadow-md relative">
        <div className="p-6">
          <div className="mb-6">
            <div className="text-darkMid my-2">{product.category}</div>
            <div className="flex items-center justify-center h-[400px] bg-darkMid/20 mt-4 mb-8 rounded-lg">
              <span>Placeholder Image</span>
            </div>
            <h3 className="font-barlow font-semibold text-xl">
              {product.name}
            </h3>
          </div>

          <div className="mb-5">{product.description}</div>

          <h3 className="text-darkMid mb-2">${product.price}K</h3>

          <div className="border border-darkMid/10 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-primary mb-3">{product.stockAvailibilty}</div>
            <a
              href="/"
              className="h-[36px] bg-dark hover:text-primary text-light px-4 py-2 rounded-lg text-center text-sm"
            >
              <div className="flex items-center gap-2">
                <FaCartShopping />
                Shop Now
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stockAvailibilty: PropTypes.string.isRequired,
  }).isRequired,
};
