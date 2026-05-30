import React from 'react'
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";
import { movies } from "../data/movies";

const Home = () => {
  return (
    <>
      <Banner />

      <MovieRow
        title="Trending Now"
        movies={movies}
      />

      <MovieRow
        title="Popular Movies"
        movies={movies}
      />

      <MovieRow
        title="Top Rated"
        movies={movies}
      />
    </>
  );
};

export default Home;