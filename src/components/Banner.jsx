import React from 'react'
const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
      }}
    >
      <div className="ml-10 max-w-xl text-white">
        <h1 className="text-6xl font-bold mb-4">
          Stranger Things
        </h1>

        <p className="text-lg mb-6">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments and supernatural forces.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold">
            ▶ Play
          </button>

          <button className="bg-gray-600 px-6 py-2 rounded font-semibold">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;