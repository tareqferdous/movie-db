const RegistrationForm = () => {
  return (
    <form id="signupForm" class="space-y-4">
      <input
        type="text"
        placeholder="First Name"
        class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="password"
        placeholder="Create Password"
        class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        class="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />

      <div class="text-left text-moviedb-gray text-sm">
        <label class="flex items-center">
          <input type="checkbox" class="mr-2" required />I agree to the Terms of
          Service and Privacy Policy
        </label>
      </div>

      <button
        type="submit"
        class="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
};

export default RegistrationForm;
