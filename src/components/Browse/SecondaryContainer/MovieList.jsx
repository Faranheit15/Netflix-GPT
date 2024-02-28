import MovieCard from "@/components/Browse/SecondaryContainer/MovieCard";

import PropTypes from "prop-types";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
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
