import { useSelector } from "react-redux";
import MovieList from "@/components/Browse/SecondaryContainer/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="bg-black">
      <div className="relative z-20 pl-4 mt-0 md:pl-12 md:-mt-52">
        {movies?.nowPlayingMovies && (
          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        )}
        {movies?.popularMovies && (
          <MovieList title="Popular" movies={movies?.popularMovies} />
        )}
        {movies?.topRatedMovies && (
          <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        )}
        {movies?.upcomingMovies && (
          <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
