import { useSelector } from "react-redux";
import MovieList from "@/components/Browse/SecondaryContainer/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
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
