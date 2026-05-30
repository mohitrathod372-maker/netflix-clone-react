import React from 'react'
import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

const MovieDetails = () => {
  const { id } = useParams();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="h-screen bg-black text-white flex justify-center items-center">
        Movie Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">

        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full md:w-80 rounded-lg"
        />

        <div>
          <h1 className="text-5xl font-bold mb-4">
            {movie.title}
          </h1>

          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, dolore. This is a sample movie description.
          </p>

          <button className="bg-red-600 px-6 py-3 rounded hover:bg-red-700">
            ▶ Watch Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default MovieDetails;