const LoginForm = () => {
  return (
    <form id="loginForm" class="space-y-4">
      <input
        type="email"
        placeholder="Email or phone number"
        class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="password"
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
  );
};

export default LoginForm;
