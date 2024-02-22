const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white rounded-lg p-4 px-12 text-black text-xl">
          <div className="flex align-middle">▶️ Play</div>
        </button>
        <button className="bg-gray-500 bg-opacity-80 rounded-lg p-4 px-12 mx-2 text-white text-xl">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
