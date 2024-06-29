import { Link } from "react-router-dom";

const ViewAll = () => {
  return (
    <section className="max-w-lg px-6 m-auto my-10 max-sm:text-sm">
      <Link
        to="/products"
        className="block px-6 py-4 font-semibold text-center bg-dark text-light rounded-full hover:bg-dark/90"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        View All Products
      </Link>
    </section>
  );
};

export default ViewAll;
