import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {
  return (
    <section className="px-8 py-10 bg-black">
      <h2 className="text-white text-3xl font-bold mb-6">
        {title}
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;