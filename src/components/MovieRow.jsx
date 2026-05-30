import React from 'react'
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {
  return (
   <section className="px-8 py-6 bg-black">
  <h2 className="text-white text-2xl font-bold mb-4">
    {title}
  </h2>

  <div className="flex gap-4 overflow-x-auto pb-4">
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    ))}
  </div>
</section>
  );
};

export default MovieRow;