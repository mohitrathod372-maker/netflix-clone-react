import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/">
          <h1 className="text-red-600 text-3xl font-extrabold tracking-wider cursor-pointer">
            NETFLIX
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-gray-400 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/search"
              className="hover:text-gray-400 transition duration-300"
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