import { Navigate } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      {!localStorage.getItem("isAuthenticated") && <Navigate to="/login" />}

      <h2>Homepage</h2>

      <button
        onClick={() => {
          localStorage.removeItem("isAuthenticated");
          <Navigate to="/login" />;
        }}
      >
        Log Out
      </button>
    </>
  );
}
