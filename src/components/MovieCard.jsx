import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="relative min-w-[220px] cursor-pointer transition-all duration-300 hover:scale-110 hover:z-20 group">

        <img
          src={movie.image?.medium}
          alt={movie.name}
          className="w-full h-[330px] object-cover rounded-lg shadow-lg"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-end">
          <div className="p-4">
            <h3 className="text-white font-bold text-lg">
              {movie.name}
            </h3>

            <p className="text-gray-300 text-sm">
              ⭐ {movie.rating?.average || "N/A"}
            </p>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default MovieCard;