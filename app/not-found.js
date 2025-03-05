import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <div className="text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
          404
        </h1>

        {/* Message */}
        <p className="text-2xl mt-4 text-gray-300">
          Oops! The page you are looking for does not exist.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-lg shadow-lg hover:from-red-700 hover:to-red-900 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>

      {/* Optional: Add a red-themed animation or illustration */}
      <div className="mt-12">
        <svg
          className="w-32 h-32 text-red-600 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
    </div>
  );
}
