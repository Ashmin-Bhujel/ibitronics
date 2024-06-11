import Product from "./Product";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
    },
  ];

  return (
    <>
      <div>
        <h2 className="m-8 text-2xl font-semibold">Products</h2>
        <div
          id="products"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
