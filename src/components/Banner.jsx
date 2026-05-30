
import React from "react";

const Banner = ({ show }) => {
  if (!show) return null;

  const cleanSummary = show.summary
    ?.replace(/<[^>]*>/g, "")
    .slice(0, 180);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${show.image?.original})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-16 text-white">
        <h1 className="text-6xl md:text-7xl font-black mb-6 drop-shadow-lg">
          {show.name}
        </h1>

        <p className="text-lg text-gray-200 leading-relaxed mb-8">
          {cleanSummary}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition">
            ▶ Play
          </button>

          <button className="bg-gray-700/80 text-white px-8 py-3 rounded font-bold hover:bg-gray-600 transition">
            More Info
          </button>
        </div>

        <div className="mt-6 flex gap-6 text-gray-300">
          <span>
            ⭐ {show.rating?.average || "N/A"}
          </span>

          <span>
            📺 {show.type}
          </span>

          <span>
            🌍 {show.language}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;