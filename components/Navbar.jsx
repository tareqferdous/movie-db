import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="./index.html" className="text-red-600 text-4xl font-bold">
            MOVIE DB
          </a>
          <div className="ml-8 space-x-4">
            <a href="./index.html" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="./compare.html" className="text-white hover:text-gray-300">
              Compare Movies
            </a>

            <a
              href="./WatchList.html"
              className="text-white hover:text-gray-300"
            >
              Watch Later
            </a>
          </div>
        </div>
        <SearchInput />
      </div>
    </nav>
  );
};

export default Navbar;
