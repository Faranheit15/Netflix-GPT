import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@/components/utils/Button";
import lang from "@/utils/languageConstants";
import openai from "@/http/openAI";
import { TMDB_API_OPTIONS } from "@/utils/constants";
import { addGptMovieResult } from "@/store/redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((state) => state.config.lang);
  const searchTextRef = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptButtonClick = async () => {
    // Make an API call to GPT API and get Movie Results

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchTextRef.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    //   // TODO: Write Error Handling
    // }

    // console.log(gptResults.choices?.[0]?.message?.content);

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const gptMovies = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        action=""
        className="grid w-full grid-cols-12 bg-black rounded-lg md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchTextRef}
          type="text"
          className="col-span-10 p-4 m-4"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <Button
          btnName={lang[langKey]?.search}
          color="bg-red"
          className="col-span-2 px-4 py-2 m-6"
          onClick={handleGptButtonClick}
        />
      </form>
    </div>
  );
};

export default GptSearchBar;
