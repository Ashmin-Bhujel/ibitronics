import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FaTriangleExclamation className="text-9xl text-primary" />

      <p className="my-8 text-5xl font-bold font-gilroy">404 Page not found!</p>

      <Link to="/" className="text-xl cursor-pointer hover:text-primary">
        Go Back to Homepage
      </Link>
    </div>
  );
}
