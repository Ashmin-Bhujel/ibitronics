import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function SingleProductPage() {
  const emptyFormData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
  };
  const [formData, setformData] = useState(emptyFormData);
  const [isSubmited, setIsSubmitted] = useState(false);
  const [product, setProduct] = useState([]);
  const [specs, setSpecs] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        const response = await fetch(`/api/products/${id}`, {
          signal: controller.signal,
        });

        const data = await response.json();

        setProduct(data);
        setSpecs(data.specs);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();

    return () => {
      controller.abort();
      setIsLoading(false);
    };
  }, [id]);

  return isLoading ? (
    "Loading"
  ) : (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/products"
            className="text-dark text-xl hover:text-primary flex items-center"
          >
            <FaArrowLeft className="inline-block mr-2" />
            <span>Back to Job Listings</span>
          </Link>
        </div>
      </section>

      <section className="bg-lightMid">
        <div className="container m-auto py-10 px-6">
          <div className="flex max-md:flex-col justify-center w-full gap-6">
            <main>
              <div className="bg-light p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-darkMid mb-4">{product.category}</div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[540px] object-cover"
                />
                <p className="text-dark text-xl mb-4 font-semibold">
                  Price: {product.price}
                </p>
                <p className="text-primary">{product.stockAvailibility}</p>
              </div>
            </main>

            <aside className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 flex-1">
                  Specifications
                </h3>

                <ul>
                  <li>Storage: {specs.storage} GB</li>
                  <li>Display: {specs.display} Inch</li>
                  <li>Chip: {specs.chip} Chip</li>
                  <li>Batery: {specs.battery} Hrs (Apprx.)</li>
                  <li>OS: {specs.os}</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-bold mb-6">
                  {isSubmited ? (
                    <span className="text-primary">Order placed</span>
                  ) : (
                    "Place your order"
                  )}
                </h3>
                <form
                  className="flex flex-col gap-4 mx-auto w-fit"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                >
                  <div className="flex max-md:flex-col w-full gap-4">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="First Name"
                      className="flex-1 px-6 py-4 text-xl border border-dark rounded"
                      value={formData.firstName}
                      onChange={(e) => {
                        setformData((currentFormData) => ({
                          ...currentFormData,
                          firstName: e.target.value,
                        }));
                      }}
                      required
                    />

                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="Last Name"
                      className="flex-1 px-6 py-4 text-xl border border-dark rounded"
                      value={formData.lastName}
                      onChange={(e) => {
                        setformData((currentFormData) => ({
                          ...currentFormData,
                          lastName: e.target.value,
                        }));
                      }}
                      required
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="px-6 py-4 text-xl border border-dark rounded"
                    value={formData.email}
                    onChange={(e) => {
                      setformData((currentFormData) => ({
                        ...currentFormData,
                        email: e.target.value,
                      }));
                    }}
                    required
                  />

                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    className="px-6 py-4 text-xl border border-dark rounded"
                    value={formData.address}
                    onChange={(e) => {
                      setformData((currentFormData) => ({
                        ...currentFormData,
                        address: e.target.value,
                      }));
                    }}
                    required
                  />

                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    placeholder="Contact Number"
                    className="px-6 py-4 text-xl border border-dark rounded"
                    value={formData.contact}
                    onChange={(e) => {
                      setformData((currentFormData) => ({
                        ...currentFormData,
                        contact: e.target.value,
                      }));
                    }}
                    required
                  />

                  <div className="flex max-md:flex-col w-full gap-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-4 text-xl bg-dark text-light hover:bg-dark/90 rounded-lg"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="flex-1 px-6 py-4 text-xl bg-dark text-light hover:bg-dark/90 rounded-lg"
                      onClick={() => {
                        setIsSubmitted(false);
                        setformData(emptyFormData);
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
