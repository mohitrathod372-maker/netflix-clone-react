import React from 'react'
const Banner = ({ show }) => {
  if (!show) return null;

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${show.image?.original})`,
      }}
    >
      <div className="bg-black/60 p-8 rounded ml-10 max-w-xl text-white">
        <h1 className="text-5xl font-bold mb-4">
          {show.name}
        </h1>

        <p>
          {show.summary?.replace(/<[^>]*>/g, "").slice(0, 200)}
        </p>
      </div>
    </div>
  );
};

export default Banner;