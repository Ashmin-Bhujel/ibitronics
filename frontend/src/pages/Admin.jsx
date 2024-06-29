import { Navigate } from "react-router-dom";

export default function Admin() {
  return (
    <>
      {import.meta.env.VITE_TEST_NOTADMIN === "true" && (
        <Navigate to="/homepage" />
      )}
      <h2>Admin Dashboard</h2>
    </>
  );
}
