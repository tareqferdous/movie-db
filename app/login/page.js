import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div class="bg-moviedb-black min-h-screen flex items-center justify-center">
      <div class="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
        <div class="text-center mb-6">
          <h1 class="text-white text-3xl font-bold mb-4">Sign In</h1>

          <LoginForm />

          <div class="mt-4 flex justify-between text-moviedb-gray text-sm">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              Remember me
            </label>
            <a href="#" class="hover:underline">
              Need help?
            </a>
          </div>

          <div class="mt-6 text-moviedb-gray">
            New to moviedb?
            <a href="#" class="text-white hover:underline">
              Sign up now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
