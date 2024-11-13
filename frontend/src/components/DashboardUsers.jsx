import { useContext } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import { UserContext } from "../utils/contexts/UserContext";
import User from "./User";

const DashboardUsers = () => {
  const { isAdmin } = useOutletContext();
  const { users } = useContext(UserContext);

  return (
    <>
      {!isAdmin && <Navigate to="/dashboard" />}

      <h1 className="mb-8 text-2xl font-semibold">All Users</h1>

      <div className="flex flex-col items-center justify-center gap-4">
        {users.length !== 0 && Array.isArray(users) ? (
          users.map((user) => <User key={user.id} user={user} />)
        ) : (
          <p>No Users</p>
        )}
      </div>
    </>
  );
};

export default DashboardUsers;
