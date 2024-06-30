import { FaApple, FaCircleXmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useState } from "react";

const Login = ({ setShowLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed top-0 min-h-screen z-10 flex flex-col gap-4 items-center justify-center w-full h-full bg-dark/75 text-light">
      <form className="relative max-sm:w-[90%] md:w-[400px] flex flex-col gap-4 p-10 bg-dark rounded-xl text-light shadow-lg">
        <div className="flex items-center">
          <div className="text-2xl font-semibold font-gilroy text-light sm:text-3xl">
            <div to="/" className="flex items-center gap-1 ">
              <FaApple />
              <span>iBitronics</span>
            </div>
          </div>

          <FaCircleXmark
            className="absolute text-2xl top-8 right-8"
            onClick={() => {
              setShowLogin(false);
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          {!isLogin && (
            <>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="p-2 text-base text-dark"
                required
              />

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="p-2 text-base text-dark"
                required
              />
            </>
          )}

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 text-base text-dark"
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-2 text-base text-dark"
            required
          />
        </div>

        {!isLogin ? (
          <div className="space-x-2">
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree">I agree the terms and conditions.</label>
          </div>
        ) : (
          <div className="space-x-2">
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree">Keep me logged in.</label>
          </div>
        )}

        <input
          type="submit"
          value={isLogin ? "Log In" : "Register"}
          className="px-6 py-2 font-medium text-lg rounded-full text-dark bg-lightMid hover:bg-primary hover:text-light"
        />
      </form>

      <div className="text-center">
        {isLogin ? (
          <>
            <span>Create an new account. </span>
            <button
              className="underline text-primary"
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Register
            </button>
          </>
        ) : (
          <>
            <span>Already have an account? </span>
            <button
              className="underline text-primary"
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  setShowLogin: PropTypes.func,
};
