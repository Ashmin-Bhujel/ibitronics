import { useState } from "react";

export default function Contact() {
  const emptyFormData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    review: "",
  };
  const [formData, setformData] = useState(emptyFormData);
  const [isSubmited, setIsSubmitted] = useState(false);

  return (
    <section className="min px-4 py-16">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-8 text-3xl font-bold text-center text-dark">
          Contact Us
        </h2>

        <p className="mb-8 text-xl text-center text-dark">
          {isSubmited
            ? "Form submitted successfully"
            : "Please fill up the form below"}
        </p>

        <form
          className="flex flex-col gap-4 mx-auto w-fit"
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
            console.log(formData);
          }}
        >
          <div className="flex max-md:flex-col w-full gap-4">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name"
              className="flex-1 px-6 py-4 text-xl border border-dark rounded"
              value={formData.firstName}
              onChange={(e) => {
                setformData((currentFormData) => ({
                  ...currentFormData,
                  firstName: e.target.value,
                }));
              }}
              required
            />

            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
              className="flex-1 px-6 py-4 text-xl border border-dark rounded"
              value={formData.lastName}
              onChange={(e) => {
                setformData((currentFormData) => ({
                  ...currentFormData,
                  lastName: e.target.value,
                }));
              }}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="px-6 py-4 text-xl border border-dark rounded"
            value={formData.email}
            onChange={(e) => {
              setformData((currentFormData) => ({
                ...currentFormData,
                email: e.target.value,
              }));
            }}
            required
          />

          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            className="px-6 py-4 text-xl border border-dark rounded"
            value={formData.address}
            onChange={(e) => {
              setformData((currentFormData) => ({
                ...currentFormData,
                address: e.target.value,
              }));
            }}
            required
          />

          <textarea
            name="review"
            id="review"
            rows={8}
            placeholder="Write your review here"
            className="px-6 py-4 text-xl border border-dark rounded"
            value={formData.review}
            onChange={(e) => {
              setformData((currentFormData) => ({
                ...currentFormData,
                review: e.target.value,
              }));
            }}
          ></textarea>

          <div className="flex max-md:flex-col w-full gap-4">
            <button
              type="submit"
              className="flex-1 px-6 py-4 text-xl bg-dark text-light hover:bg-dark/90 rounded-lg"
            >
              Submit
            </button>
            <button
              type="reset"
              className="flex-1 px-6 py-4 text-xl bg-dark text-light hover:bg-dark/90 rounded-lg"
              onClick={() => {
                setIsSubmitted(false);
                setformData(emptyFormData);
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
