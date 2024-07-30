import { FaCircleXmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import { toastStyle } from "../utils/toastStyle";

const AddProduct = ({ setShowAddProduct }) => {
  const [productInfo, setProductInfo] = useState({
    category: "",
    name: "",
    storage: "",
    display: "",
    chip: "",
    battery: "",
    os: "",
    price: "",
    stockAvailability: false,
  });

  const handleInput = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const handleInputCheckbox = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.checked });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.image.files[0]);
    formData.append("category", productInfo.category);
    formData.append("name", productInfo.name);
    formData.append("storage", productInfo.storage);
    formData.append("display", productInfo.display);
    formData.append("chip", productInfo.chip);
    formData.append("battery", productInfo.battery);
    formData.append("os", productInfo.os);
    formData.append("price", productInfo.price);
    formData.append("stockAvailability", productInfo.stockAvailability);

    try {
      const headersList = {
        Accept: "*/*",
      };

      const response = await fetch("/api/products/add", {
        method: "POST",
        body: formData,
        headers: headersList,
      });

      const data = await response.json();
      console.log(data);

      if (data.message === "Product added successfully") {
        console.log(data);
        setShowAddProduct(false);
        toast.success("Product added successfully", {
          style: toastStyle,
        });
        window.location.reload();
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }

    setProductInfo({
      category: "",
      name: "",
      storage: "",
      display: "",
      chip: "",
      battery: "",
      os: "",
      price: "",
      stockAvailability: false,
    });
  };

  return (
    <div className="fixed top-0 min-h-screen z-10 flex flex-col gap-4 items-center justify-center w-full h-full bg-dark/75 text-light">
      <form
        className="relative max-sm:w-[90%] md:w-[400px] flex flex-col gap-4 p-10 bg-dark rounded-xl text-light shadow-lg"
        encType="multipart/form-data"
        onSubmit={handleForm}
      >
        <div className="flex items-center">
          <div className="text-2xl font-semibold font-gilroy text-light sm:text-3xl">
            <div to="/" className="flex items-center gap-1">
              <span>Fill up product details</span>
            </div>
          </div>

          <FaCircleXmark
            className="absolute text-2xl top-8 right-8"
            onClick={() => {
              setShowAddProduct(false);
              window.location.reload();
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="image">Product Image</label>
            <input
              type="file"
              name="image"
              id="image"
              className="p-4 text-base text-dark rounded-lg"
              required
            />
          </div>

          <input
            type="text"
            name="category"
            id="category"
            placeholder="Product Category"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={productInfo.category}
            onChange={handleInput}
          />

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Product Name"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={productInfo.name}
            onChange={handleInput}
          />

          <input
            type="number"
            name="storage"
            id="storage"
            placeholder="Storage (GB)"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={productInfo.storage}
            onChange={handleInput}
          />

          <input
            type="text"
            name="display"
            id="display"
            placeholder="Display Size (In)"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={productInfo.display}
            onChange={handleInput}
          />

          <input
            type="text"
            name="chip"
            id="chip"
            placeholder="Product Chip"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={productInfo.chip}
            onChange={handleInput}
          />

          <input
            type="number"
            name="battery"
            id="battery"
            placeholder="Battery Life (Hrs)"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={productInfo.battery}
            onChange={handleInput}
          />

          <input
            type="text"
            name="os"
            id="os"
            placeholder="Operating System"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={productInfo.os}
            onChange={handleInput}
          />

          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price (NRP)"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={productInfo.price}
            onChange={handleInput}
          />

          <div className="flex gap-2 items-center justify-center text-lg">
            <input
              type="checkbox"
              name="stockAvailability"
              id="stockAvailability"
              className="p-4 text-base text-dark rounded-lg"
              value={productInfo.stockAvailability}
              onChange={handleInputCheckbox}
            />
            <label htmlFor="stockAvailability">In Stock</label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Product"
          className="px-6 py-3 font-medium text-lg rounded-full text-dark bg-lightMid hover:bg-primary hover:text-light"
        />
      </form>
    </div>
  );
};

export default AddProduct;

AddProduct.propTypes = {
  setShowAddProduct: PropTypes.func,
};
