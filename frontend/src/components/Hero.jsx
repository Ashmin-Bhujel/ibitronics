import banner from "../assets/banner.webp";
import ViewAllHero from "./ViewAllHero";

const Hero = () => {
  return (
    <section className="bg-dark border-y border-y-darkMid">
      <div className="flex flex-col items-center mx-auto relative">
        <div className="flex flex-col items-center justify-center bg-dark/60 w-full h-full text-light absolute">
          <h1 className="max-[400px]:text-2xl max-sm:text-4xl font-semibold font-gilroy sm:text-5xl md:text-7xl">
            Welcome to iBitronics
          </h1>
          <p className="my-4 text-sm sm:text-base md:text-lg">
            Your Premier Destination for Apple Products
          </p>
          <ViewAllHero />
        </div>
        <img
          src={banner}
          alt=""
          className="max-lg:h-[400px] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
