import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FaTriangleExclamation className="text-9xl text-primary" />

      <p className="my-8 text-5xl font-bold font-gilroy">404 Page not found!</p>

      <section className="max-w-lg px-6 m-auto my-2">
        <Link
          to="/"
          className="block px-6 py-4 text-center bg-dark text-light rounded-xl hover:bg-dark/90"
        >
          Go Back to Homepage
        </Link>
      </section>
    </div>
  );
}
