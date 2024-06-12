import { FaApple } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <section className="bg-dark py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <p className="font-barlow text-2xl font-light text-lightMid sm:text-3xl md:text-3xl">
              <div className="flex items-center gap-2">
                <FaApple />
                iBitronics
              </div>
            </p>
            <p className="my-2 text-xs sm:text-sm text-lightMid">
              Made by ANSR
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
