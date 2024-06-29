import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <FaTriangleExclamation className="text-9xl text-primary" />

      <p className="my-8 text-5xl max-md:text-3xl font-bold font-gilroy">
        404 Page not found!
      </p>

      <section className="max-w-lg px-6 m-auto my-2">
        <Link
          to="/"
          className="block px-6 py-4 text-center bg-dark text-light rounded-full hover:bg-dark/90"
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          Go Back to Homepage
        </Link>
      </section>
    </div>
  );
};

export default NotFoundPage;
