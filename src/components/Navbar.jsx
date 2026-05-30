import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <nav className="flex items-center justify-between px-10 py-5">

        <Link to="/">
          <h1 className="text-red-600 text-5xl font-black tracking-tight">
            NETFLIX
          </h1>
        </Link>

        <ul className="flex gap-10 text-lg font-semibold">
          <li>
            <Link
              to="/"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/search"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Search
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
};




export default Navbar;