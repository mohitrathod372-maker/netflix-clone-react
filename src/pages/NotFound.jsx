import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-red-600">
        404
      </h1>

      <p className="text-2xl mt-4">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 bg-red-600 px-6 py-3 rounded hover:bg-red-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;