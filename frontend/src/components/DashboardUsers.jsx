import { Navigate, useOutletContext } from "react-router-dom";

const DashboardUsers = () => {
  const { isAdmin } = useOutletContext();

  return (
    <>
      {!isAdmin && <Navigate to="/dashboard" />}

      <h1>All Users</h1>
    </>
  );
};

export default DashboardUsers;
