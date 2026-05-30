import React from 'react'

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-3 rounded bg-gray-800 text-white outline-none"
    />
  );
};

export default SearchBar;