import { Link } from "react-router-dom";

export default function ViewAll() {
  return (
    <section className="max-w-lg px-6 m-auto my-10">
      <Link
        to="/products"
        className="block px-6 py-4 text-center bg-dark text-light rounded-xl hover:bg-dark/90"
      >
        View All Products
      </Link>
    </section>
  );
}
