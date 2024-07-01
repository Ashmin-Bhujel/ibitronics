import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StoreContextProvider } from "./utils/contexts/StoreContext";
import { UserContextProvider } from "./utils/contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
