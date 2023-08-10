import "./NavBar.css";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="bg-primary">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="mx-auto flex justify-between items-center p-4">
          <img className="h-10 w-auto" src={logo} alt="Quiz Lit" />

          <div className="relative w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 text-sm placeholder-secondary bg-accent rounded-lg focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>

          <button
            type="button"
            className="relative rounded-full bg-secondary p-2 text-black font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
        active:border-b-[0px] transition-all duration-150"
          >
            Login / Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
