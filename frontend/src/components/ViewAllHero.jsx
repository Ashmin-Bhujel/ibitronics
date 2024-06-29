import { Link } from "react-router-dom";

const ViewAllHero = () => {
  return (
    <section className="w-full max-w-lg px-6 m-auto my-10 max-sm:text-sm">
      <Link
        to="/products"
        className="block px-6 py-4 font-semibold text-center bg-light text-dark rounded-full hover:bg-primary/90 hover:text-light"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        Browse Products
      </Link>
    </section>
  );
};

export default ViewAllHero;
