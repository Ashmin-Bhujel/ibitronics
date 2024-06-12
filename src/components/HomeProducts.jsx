import Product from "./Product";
import products from "../assets/products.json";

export default function HomeProducts() {
  return (
    <>
      <section className="px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">
            Browse Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="/"
          className="block bg-dark text-light text-center py-4 px-6 rounded-xl hover:text-primary"
        >
          View All Products
        </a>
      </section>
    </>
  );
}
