import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products isHomePage={true} />
    </div>
  );
};

export default Home;
