import { useSelector } from "react-redux";
import Button from "@/components/utils/Button";
import lang from "@/utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form action="" className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <Button
          btnName={lang[langKey].search}
          color="bg-red"
          className="col-span-2 m-6 py-2 px-4"
        />
      </form>
    </div>
  );
};

export default GptSearchBar;
