import React from 'react'
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="min-w-[200px] cursor-pointer transition duration-300 hover:scale-105">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-[300px] object-cover rounded-lg"
        />

        <h3 className="text-white mt-2 font-semibold">
          {movie.title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCard;