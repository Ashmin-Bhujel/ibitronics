import { FaApple } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-8 bg-dark text-light">
      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center gap-2 text-3xl font-gilroy max-sm:text-2xl">
            <FaApple />
            <span>iBitronics</span>
          </div>

          <p className="my-2 text-sm max-sm:text-xs">Made by ANSR</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
