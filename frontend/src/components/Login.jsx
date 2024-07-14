import { FaApple, FaCircleXmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { toastStyle } from "../utils/toastStyle";

const Login = ({ setShowLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginAuth = async () => {
    try {
      const headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      const bodyContent = JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      });

      const response = await fetch("/api/users/auth/login", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      const data = await response.json();

      if (data.isAuthenticated) {
        toast.success(`Successfully logged in`, {
          style: toastStyle,
        });
        return true;
      } else {
        toast.error("Invalid email or password", {
          style: toastStyle,
        });
        return false;
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during authentication", {
        style: toastStyle,
      });
      return false;
    }
  };

  const handleSignUp = async () => {
    const headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify({
      username: credentials.username,
      fullName: credentials.fullName,
      email: credentials.email,
      password: credentials.password,
    });

    try {
      const response = await fetch("/api/users/create", {
        method: "POST",
        headers: headersList,
        body: bodyContent,
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success("Account created successfully", {
          style: toastStyle,
        });
        setIsLogin(true);
      } else {
        toast.error("An error occurred during account creation", {
          style: toastStyle,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during account creation", {
        style: toastStyle,
      });
    }
  };

  const getUserData = async () => {
    try {
      const headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      const bodyContent = JSON.stringify({
        email: credentials.email,
      });

      const response = await fetch("/api/users/get", {
        method: "POST",
        headers: headersList,
        body: bodyContent,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (isLogin) {
      toast
        .promise(
          loginAuth(),
          {
            loading: "Authenticating",
            success: "Authentication Complete",
            error: "Authentication Failed",
          },
          {
            style: toastStyle,
          }
        )
        .then((authStatus) => {
          localStorage.setItem("isAuthenticated", authStatus);
          if (authStatus) {
            return getUserData();
          } else {
            return {};
          }
        })
        .then((data) => {
          if (data) {
            localStorage.setItem("user", JSON.stringify(data));
          } else {
            localStorage.setItem("user", JSON.stringify({}));
          }
        })
        .then(() => {
          setTimeout(() => {
            if (JSON.parse(localStorage.getItem("isAuthenticated"))) {
              setShowLogin(false);
              const user = JSON.parse(localStorage.getItem("user"));
              toast.success(`Welcome ${user.username}`, {
                style: toastStyle,
              });
            }
          }, 1000);
        });
    } else {
      handleSignUp();
    }
  };

  return (
    <div className="fixed top-0 min-h-screen z-10 flex flex-col gap-4 items-center justify-center w-full h-full bg-dark/75 text-light">
      <form
        className="relative max-sm:w-[90%] md:w-[400px] flex flex-col gap-4 p-10 bg-dark rounded-xl text-light shadow-lg"
        onSubmit={handleForm}
      >
        <div className="flex items-center">
          <div className="text-2xl font-semibold font-gilroy text-light sm:text-3xl">
            <div to="/" className="flex items-center gap-1">
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
                className="p-4 text-base text-dark rounded-lg"
                required
                value={credentials.username}
                onChange={handleInput}
              />

              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                className="p-4 text-base text-dark rounded-lg"
                required
                value={credentials.fullName}
                onChange={handleInput}
              />
            </>
          )}

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={credentials.email}
            onChange={handleInput}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-4 text-base text-dark rounded-lg"
            required
            value={credentials.password}
            onChange={handleInput}
          />
        </div>
        <div className="space-x-2">
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree">
            {isLogin
              ? "Keep me logged in."
              : "I agree to the terms and conditions."}
          </label>
        </div>
        <input
          type="submit"
          value={isLogin ? "Log In" : "Register"}
          className="px-6 py-3 font-medium text-lg rounded-full text-dark bg-lightMid hover:bg-primary hover:text-light"
        />
      </form>

      <div className="text-center">
        {isLogin ? (
          <>
            <span>Create a new account. </span>
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
  setShowLogin: PropTypes.func.isRequired,
};
