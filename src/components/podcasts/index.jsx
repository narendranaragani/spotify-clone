import { useNavigate} from "react-router-dom";
import Navbar from "../Navbar";


const PodcastDetails = ({ Details }) => {
  const navigate = useNavigate();

  const onBackFunc = () => {
    navigate("/", { replace: true });
  };



  return (
    <>
      <Navbar />
      {Details == undefined ? (
        <div
          role="status"
          className="bg-[#181818] min-h-screen p-5 flex justify-center items-center"
        >
          {/* Loader */}
        </div>
      ) : (
        <div className="p-4 text-white bg-[#242424] min-h-screen p-5">
          <div
            className="flex gap-3 mb-5 cursor-pointer w-20"
            onClick={onBackFunc}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-left.png"
              alt="long-arrow-left"
            />
            <p className="text-xl">Back</p>
          </div>

          <div className="p-5">
            <h2 className="text-xl font-bold mb-4">Podcasts</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {Details.map((podcast) => (
                <div
                  key={podcast.id}
                  className="hover:bg-[black] p-3 rounded-lg cursor-pointer"
                  onClick={()=>{navigate(`/podcast`,{state:{items:podcast.items}})}}
                >
                  <img className="rounded-md" src={podcast.img_url} />
                  <p className="font-semibold">{podcast.name}</p>
                  <p className="text-sm text-gray-400">{podcast.casts}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PodcastDetails;
