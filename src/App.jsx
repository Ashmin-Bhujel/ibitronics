import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://20.40.43.82/backend/api.php")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <p className="text-3xl m-8 font-semibold">{message}</p>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
