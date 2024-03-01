import { BANNER_IMAGE } from "@/utils/constants";

import GptSearchBar from "@/components/Browse/GPTSearch/GptSearchBar";
import GptMovieSuggestions from "@/components/Browse/GPTSearch/GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-full h-full overflow-hidden -z-10">
        <img
          className="w-full h-full object-cover"
          src={BANNER_IMAGE}
          alt="banner"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
