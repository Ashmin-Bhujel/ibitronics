import { useState } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user ? Boolean(user.isAdmin) : false;
  const outletContext = { isAdmin };
  const [ordersActive, setOrdersActive] = useState(true);

  return (
    <>
      {!isAuthenticated && <Navigate to="/" />}

      <h1>Dashboard</h1>
      <div className="flex flex-col">
        <NavLink
          className={ordersActive && "active"}
          to="/dashboard/orders"
          onClick={() => {
            setOrdersActive(true);
          }}
        >
          {isAdmin ? "Orders" : "My Orders"}
        </NavLink>
        {isAdmin && (
          <>
            <NavLink
              to="/dashboard/users"
              onClick={() => {
                setOrdersActive(false);
              }}
            >
              Users
            </NavLink>
            <NavLink
              to="/dashboard/products"
              onClick={() => {
                setOrdersActive(false);
              }}
            >
              Products
            </NavLink>
          </>
        )}
      </div>

      <Outlet context={outletContext} />
    </>
  );
};

export default Dashboard;
