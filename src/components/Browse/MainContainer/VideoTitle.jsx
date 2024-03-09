import { Icon } from "@iconify/react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="text-lg font-bold md:text-6xl">{title}</h1>
      <p className="hidden w-1/4 py-6 text-lg md:inline-block">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="px-3 py-1 text-xl text-black bg-white rounded-lg opacity-100 md:px-12 md:py-4 hover:bg-opacity-40 md:opacity-0 ">
          <div className="flex content-center">
            <Icon icon="mdi:play" width="24" height="24" /> Play
          </div>
        </button>
        <button className="hidden p-4 px-12 mx-2 text-xl text-white bg-gray-500 rounded-lg md:inline-block bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
