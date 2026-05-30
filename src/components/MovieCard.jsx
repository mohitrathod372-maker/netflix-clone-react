import React from 'react'
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="cursor-pointer hover:scale-105 transition-all duration-300">
        <img
          src={movie.image?.medium}
          alt={movie.name}
          className="w-full h-[300px] min-w-[200px] object-cover rounded-lg"
        />

        <h3 className="text-white mt-2">
          {movie.name}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCard;