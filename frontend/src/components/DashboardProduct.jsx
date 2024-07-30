import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { toastStyle } from "../utils/toastStyle";

const DashboardProduct = ({ product }) => {
  const removeProduct = async (id, image) => {
    try {
      const headersList = {
        Accept: "*/*",
      };

      const response = await fetch(`/api/products/delete/${id}&${image}`, {
        method: "DELETE",
        headers: headersList,
      });

      const data = await response.json();

      if (data.success) {
        console.log(data);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }

    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4 border-b border-gray-200 max-xl:flex-col max-xl:gap-4">
      <div className="flex items-center gap-4">
        <div className="text-xl font-semibold">{product.id}</div>
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
          <div>
            <span>{product.name} </span>
          </div>
          <div className="text-sm text-gray-600">Rs. {product.price}</div>
          <div className="text-sm text-primary">
            {product.stockAvailability ? "In Stock" : "Out of Stock"}
          </div>
        </div>
      </div>

      <div className="flex items-center max-xl:flex-col max-xl:gap-4">
        <button
          onClick={() => {
            removeProduct(product.id, product.image);
            toast.success(`${product.name} removed from database`, {
              style: toastStyle,
            });
          }}
          className="w-full bg-red-600 hover:bg-red-500 text-light px-6 py-3 rounded-full text-center text-sm"
        >
          Remove Product
        </button>
      </div>
    </div>
  );
};

export default DashboardProduct;

DashboardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};
