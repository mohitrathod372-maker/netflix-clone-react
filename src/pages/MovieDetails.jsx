import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, [id]);

  if (!show) {
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <img
        src={show.image?.original}
        alt={show.name}
        className="w-80 rounded-lg mb-6"
      />

      <h1 className="text-5xl font-bold mb-4">
        {show.name}
      </h1>

      <p className="mb-4">
        Rating: {show.rating?.average || "N/A"}
      </p>

      <div
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />
    </div>
  );
};

export default MovieDetails;