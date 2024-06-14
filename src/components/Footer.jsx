import { FaApple } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="py-10 bg-dark">
      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-light font-gilroy text-lightMid sm:text-3xl md:text-3xl">
            <div className="flex items-center gap-2">
              <FaApple />
              iBitronics
            </div>
          </div>
          <p className="my-2 text-xs sm:text-sm text-lightMid">Made by ANSR</p>
        </div>
      </div>
    </section>
  );
}
