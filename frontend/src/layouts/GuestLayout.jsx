import { FaApple } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-4 py-12 bg-dark text-light">
      <div className="flex items-center gap-2 text-6xl">
        <FaApple />
        <span className="font-semibold font-gilroy">iBitronics</span>
      </div>
      <Outlet />
    </div>
  );
}
