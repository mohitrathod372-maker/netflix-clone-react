import React from 'react'
import{ useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShows();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <input
        type="text"
        placeholder="Search Shows..."
        className="w-full p-3 rounded bg-gray-800 mb-8 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;