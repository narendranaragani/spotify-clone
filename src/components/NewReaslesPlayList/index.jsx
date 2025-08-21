import React from 'react'
import { Link, useNavigate } from 'react-router';

const NewReleasesPlayList = ({ newReleases }) => {
  const navigate = useNavigate()
  console.log(newReleases)

  return (
    <div className="min-h-screen p-5">
      <h1 className="text-[#FFFFFF] font-bold text-xl mb-5">New Releases</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {newReleases.map((item) => (
            <div
              key={item.id}
              className="bg-[#242424] p-3 rounded-lg hover:bg-[#2e2e2e] transition duration-200"
              onClick={() => {
                navigate(`/newreleases/${item.id}`);
              }}
            >
              <img
                className="rounded-lg mb-2 cursor-pointer w-full h-[155px] object-cover"
                src={item.images[1]?.url || item.images[0]?.url}
                alt={item.name}
              />
              <p className="text-sm text-gray-400 font-semibold truncate">
                {item.name}
              </p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleasesPlayList;
