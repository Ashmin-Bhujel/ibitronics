import { FaArrowLeft } from "react-icons/fa6";
import {
  Link,
  Navigate,
  NavLink,
  Outlet,
  useOutletContext,
} from "react-router-dom";

const Dashboard = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user ? Boolean(user.isAdmin) : false;
  const { setShowAddProduct } = useOutletContext();
  const outletContext = { isAdmin, setShowAddProduct };

  return (
    <>
      {!isAuthenticated && <Navigate to="/" />}

      <section className="min-h-screen px-4 py-16">
        <div className="m-auto container-xl lg:container">
          <h2 className="mb-8 text-3xl font-bold text-center text-dark">
            Dashboard
          </h2>
        </div>

        <div className="container px-6 m-auto mb-8">
          <Link
            to="/"
            className="flex items-center text-xl text-dark hover:text-primary"
          >
            <FaArrowLeft className="inline-block mr-2" />
            <span>Back to Homepage</span>
          </Link>
        </div>

        <div className="flex flex-col text-center">
          <div className="flex justify-center gap-8 mb-8 text-lg">
            <NavLink to="/dashboard/orders">Orders</NavLink>
            {isAdmin && (
              <>
                <NavLink to="/dashboard/users">Users</NavLink>
                <NavLink to="/dashboard/products">Products</NavLink>
              </>
            )}
          </div>

          <Outlet context={outletContext} />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
