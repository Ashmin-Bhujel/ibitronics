import { Navigate, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user ? Boolean(user.isAdmin) : false;
  const outletContext = { isAdmin };

  return (
    <>
      {!isAuthenticated && <Navigate to="/" />}

      <div className="flex flex-col">
        <h1>Dashboard</h1>
        <NavLink to="/dashboard/orders">Orders</NavLink>

        {isAdmin && (
          <>
            <NavLink to="/dashboard/users">Users</NavLink>
            <NavLink to="/dashboard/products">Products</NavLink>
          </>
        )}
      </div>

      <Outlet context={outletContext} />
    </>
  );
};

export default Dashboard;
