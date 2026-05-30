import React from 'react'
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import { fetchShows } from "../services/tvmazeApi";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getShows = async () => {
      try {
        const data = await fetchShows();
        setShows(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getShows();
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const trendingShows = shows.slice(0, 10);

  const popularShows = shows.slice(10, 20);

  const topRatedShows = [...shows]
    .sort(
      (a, b) =>
        (b.rating?.average || 0) -
        (a.rating?.average || 0)
    )
    .slice(0, 10);

  return (
    <>
      <Banner show={shows[0]} />

      <MovieRow
        title="Trending Shows"
        movies={trendingShows}
      />

      <MovieRow
        title="Popular Shows"
        movies={popularShows}
      />

      <MovieRow
        title="Top Rated Shows"
        movies={topRatedShows}
      />

      <Footer />
    </>
  );
};

export default Home;