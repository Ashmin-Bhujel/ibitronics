import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInput = (e) => {
    setFormData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {import.meta.env.VITE_TEST_TOKEN && <Navigate to="/homepage" />}

      <form onSubmit={handleForm}>
        <fieldset className="flex flex-col gap-4">
          <legend className="pt-4 text-2xl text-center">Login Page</legend>

          <p className="py-2 text-sm text-lightMid">
            Please enter your user credentials to login
          </p>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            className="px-5 py-3 text-lg text-darkMid"
            onChange={handleInput}
            required
            autoFocus
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            className="px-5 py-3 text-lg text-darkMid"
            onChange={handleInput}
            required
          />

          <input
            type="submit"
            value="Login"
            id="login"
            className="px-5 py-3 text-lg font-semibold bg-light text-dark active:bg-primary active:text-light"
          />
        </fieldset>
      </form>

      <p className="text-sm">
        <span>Register as a new user. </span>
        <Link
          to="/signup"
          className="underline underline-offset-2 text-primary"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}
