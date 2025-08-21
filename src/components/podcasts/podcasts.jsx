import { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";



const PodcastPage = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const {state} = useLocation()
  const navigate = useNavigate()
  console.log(state)

 
  return (
    <div className="bg-gradient-to-b from-[#3d1f1f] to-black min-h-screen text-white">

      <div className="flex justify-end p-4">
        <button
          onClick={() => navigate(-1)}
          className="p-4 text-white hover:text-gray-400"
        >
          ← Back
        </button>
      </div>

      <div className="p-5 flex flex-col sm:flex-row items-center gap-5 mb-6">
        <img
          src={state.items[0]?.images[0].url} // show first podcast image
          alt={state.items[0]?.name}
          className="w-42 h-42 sm:w-48 sm:h-48 md:w-50 md:h-50 rounded-md"
        />
        <div>
          <p className="text-sm text-gray-400">Podcast</p>
          <h1 className="font-bold text-4xl mb-3 sm:text-3xl md:text-5xl lg:text-6xl">
            {state.items[0]?.name}
          </h1>
          <p className="text-sm md:text-md text-gray-400 mb-3 font-semibold">
            {state.items[0]?.html_description}
          </p>
          <p className="text-gray-400 text-sm mt-1">
            {state.items.length} episodes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 md:grid md:grid-cols-4 list-none text-center mb-3">
        <span>#</span>
        <span>Title</span>
        <span className="hidden md:block">Casts</span>
        <span>Duration</span>
      </div>
      <hr className="w-full text-gray-600" />

    
      <div className="text-center mt-5">
        {state.items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setCurrentSong(item)}
            className="grid grid-cols-3 md:grid md:grid-cols-4 text-center py-2 max-h-screen gap-3 hover:bg-[#282828] rounded-md cursor-pointer transition"
          >
            <span>{index + 1}</span>
            <span className="hidden md:block">
              {item.name || item.description}
            </span>
            <span>{item.description}</span>
            <span>
              {Math.floor(item.duration_ms / 60000)}:
              {String(Math.floor((item.duration_ms % 60000) / 1000)).padStart(
                2,
                "0"
              )}
            </span>
          </div>
        ))}
      </div>

      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 gap-3">
          <div className="flex items-center gap-4">
            <img
              src={state.items[0]?.images[0].url}
              className="w-12 h-12 rounded"
            />
            <div>
              <p className="text-white font-bold">
                {currentSong.name || currentSong.casts}
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                {currentSong.description}
              </p>
            </div>
          </div>
          <audio
            controls
            autoPlay
            src={currentSong.audio_url || currentSong.audio_preview_url}
            className="md:w-250 sm:w-50"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default PodcastPage;
