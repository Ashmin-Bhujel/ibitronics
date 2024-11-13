import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Order from "./Order";

const DashboardOrders = () => {
  const { isAdmin } = useOutletContext();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userId = user && user.id;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      if (isAdmin) {
        // Fetch all orders
        fetch("/api/orders/list")
          .then((res) => res.json())
          .then((data) => {
            setOrders(data);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        // Fetch user's orders
        fetch("/api/orders/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        })
          .then((res) => res.json())
          .then((data) => {
            setOrders(data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };

    if (!userId) return;
    getOrders();
  }, [isAdmin, userId]);

  return (
    <>
      <h1 className="mb-8 text-2xl font-semibold">
        {isAdmin ? "All orders" : "My Order"}
      </h1>

      <div className="flex flex-col items-center justify-center gap-4">
        {orders.length !== 0 && Array.isArray(orders) ? (
          orders.map((order) => <Order key={order.id} order={order} />)
        ) : (
          <p>No Orders</p>
        )}
      </div>
    </>
  );
};

export default DashboardOrders;
