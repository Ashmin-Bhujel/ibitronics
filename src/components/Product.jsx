import PropTypes from "prop-types";

export default function Product({ product }) {
  return (
    <>
      <div className="product-card rounded-lg w-fit p-8 border-2 border-black/5 shadow-md">
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
      </div>
    </>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
