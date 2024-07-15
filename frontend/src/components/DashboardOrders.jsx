import { useOutletContext } from "react-router-dom";

const DashboardOrders = () => {
  const { isAdmin } = useOutletContext();

  return <h1>{isAdmin ? "All orders" : "My Order"}</h1>;
};

export default DashboardOrders;
