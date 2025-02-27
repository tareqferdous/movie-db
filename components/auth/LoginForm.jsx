"use client";
import { performLogin } from "@/app/action";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { auth, setAuth } = useAuth();
  console.log(auth);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const loggedInUser = await performLogin(formData);
      if (loggedInUser) {
        setAuth(loggedInUser);
        // router.push("/");
      } else {
        setError("Please provide a valid login credential");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form id="loginForm" class="space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email or phone number"
          class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <button
          type="submit"
          class="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
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
