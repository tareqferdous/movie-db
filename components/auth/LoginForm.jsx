"use client";
import { performLogin } from "@/app/action";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const loggedInUser = await performLogin(formData);
      if (loggedInUser) {
        login(loggedInUser);
        // router.back();
      } else {
        setError("Please provide a valid login credential");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email or phone number"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <button
          type="submit"
          className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
        >
          Sign In
        </button>
      </form>
      {error && (
        <p className="text-red-600 text-center font-semibold pt-3">{error}</p>
      )}
    </>
  );
};

export default LoginForm;
