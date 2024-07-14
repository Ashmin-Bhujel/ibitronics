import { useOutletContext } from "react-router-dom";

const DashboardOrders = () => {
  const { isAdmin } = useOutletContext();

  return <h1>{isAdmin ? "All orders" : "Orders Status"}</h1>;
};

export default DashboardOrders;
