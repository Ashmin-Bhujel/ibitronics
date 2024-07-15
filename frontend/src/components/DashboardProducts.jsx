import { Navigate, useOutletContext } from "react-router-dom";

const DashboardProducts = () => {
  const { isAdmin } = useOutletContext();
  return (
    <>
      {!isAdmin && <Navigate to="/dashboard" />}

      <h1>All Products</h1>
    </>
  );
};

export default DashboardProducts;
