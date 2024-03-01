import Button from "@/components/utils/Button";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form action="" className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder="What would you like to watch today?"
        />
        <Button
          btnName="Search"
          color="bg-red"
          className="col-span-2 m-6 py-2 px-4"
        />
      </form>
    </div>
  );
};

export default GptSearchBar;
