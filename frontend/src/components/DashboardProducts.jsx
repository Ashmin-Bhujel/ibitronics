import { useContext } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import { StoreContext } from "../utils/contexts/StoreContext";
import DashboardProduct from "./DashboardProduct";

const DashboardProducts = () => {
  const { isAdmin } = useOutletContext();
  const { setShowAddProduct } = useOutletContext();
  const { products } = useContext(StoreContext);

  return (
    <>
      {!isAdmin && <Navigate to="/dashboard" />}

      <div className=" flex flex-col gap-8">
        <h1 className="mb-8 text-2xl font-semibold">All Products</h1>
        <main className="flex-1">
          <div className="min-h-full p-6 text-center rounded-lg shadow-md bg-light md:text-left">
            <div>
              {products.length !== 0 && Array.isArray(products) ? (
                products.map((product) => (
                  <DashboardProduct key={product.id} product={product} />
                ))
              ) : (
                <p className="text-center">No products</p>
              )}
            </div>
          </div>
        </main>
        <button
          className="bg-dark hover:bg-dark/85 text-light px-4 py-3 rounded-full text-center text-sm"
          onClick={() => {
            setShowAddProduct(true);
          }}
        >
          Add product
        </button>
      </div>
    </>
  );
};

export default DashboardProducts;
