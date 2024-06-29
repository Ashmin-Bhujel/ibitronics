import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    password: "",
    confirmPassword: "",
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
          <legend className="pt-4 text-2xl text-center">Sign Up Page</legend>

          <p className="py-2 text-sm text-center text-lightMid">
            Please fill up the form below to register as a user
          </p>

          <div className="flex gap-4 max-md:flex-col">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              className="px-5 py-3 text-lg text-darkMid"
              onChange={handleInput}
              required
              autoFocus
            />

            <input
              type="text"
              name="middleName"
              id="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              className="px-5 py-3 text-lg text-darkMid"
              onChange={handleInput}
            />

            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              className="px-5 py-3 text-lg text-darkMid"
              onChange={handleInput}
              required
            />
          </div>

          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            className="px-5 py-3 text-lg text-darkMid"
            onChange={handleInput}
            required
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            className="px-5 py-3 text-lg text-darkMid"
            onChange={handleInput}
            required
          />

          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Contact Number"
            value={formData.phone}
            className="px-5 py-3 text-lg text-darkMid"
            onChange={handleInput}
            required
          />

          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={formData.address}
            className="px-5 py-3 text-lg text-darkMid"
            onChange={handleInput}
            required
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
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            className="px-5 py-3 text-lg text-darkMid"
            onChange={handleInput}
            required
          />

          <div className="flex items-center gap-4 max-md:flex-col max-md:items-start">
            <span className="text-lg font-semibold">Gender</span>
            <div className="space-x-2">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleInput}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={handleInput}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={handleInput}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          <input
            type="submit"
            value="Sign Up"
            id="login"
            className="px-5 py-3 text-lg font-semibold bg-light text-dark active:bg-primary active:text-light"
          />
        </fieldset>
      </form>

      <p className="text-sm">
        <span>Already have an account? </span>
        <Link to="/login" className="underline underline-offset-2 text-primary">
          Login
        </Link>
      </p>
    </>
  );
}
