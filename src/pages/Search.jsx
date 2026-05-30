import React from 'react'
import { useState } from "react";
import { movies } from "../data/movies";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Search = () => {
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <input
        type="text"
        placeholder="Search Movies..."
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