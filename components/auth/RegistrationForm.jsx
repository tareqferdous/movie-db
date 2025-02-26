"use client";

import { registerUser } from "@/app/action";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target);
    const response = await registerUser(formData);

    if (response?.error) {
      setError(response.error);
    } else {
      event.target.reset();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="password"
          placeholder="Create Password"
          name="password"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />

        <div className="text-left text-moviedb-gray text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" required />I agree to the
            Terms of Service and Privacy Policy
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      {error && (
        <p className="text-red-600 text-center font-semibold pt-3">{error}</p>
      )}
    </>
  );
};

export default RegistrationForm;
