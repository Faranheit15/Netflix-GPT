import MovieCard from "@/components/Browse/SecondaryContainer/MovieCard";

import PropTypes from "prop-types";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="py-4 text-lg text-white md:text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll hover:overflow-scroll">
        <div className="flex cursor-pointer">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              originalTitle={movie.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
};

export default MovieList;
