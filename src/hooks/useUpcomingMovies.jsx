import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TMDB_API_OPTIONS } from "@/utils/constants";
import { addUpcomingMovies } from "@/store/redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcoming = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      TMDB_API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addUpcomingMovies(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    !upcomingMovies && getUpcoming();
  }, []);
};

export default useUpcomingMovies;
