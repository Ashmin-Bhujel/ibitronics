import { useOutletContext } from "react-router-dom";

const DashboardOrders = () => {
  const { isAdmin } = useOutletContext();

  return (
    <h1 className="mb-8 text-2xl font-semibold">
      {isAdmin ? "All orders" : "My Order"}
    </h1>
  );
};

export default DashboardOrders;
