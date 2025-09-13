import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';

const FirstHome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home", { replace: true });
  };

  
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        src="https://cdn.pixabay.com/video/2017/03/19/8437-209165711_large.mp4"
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-8 md:px-20 py-3 text-white">
        <img src="./Group.png" className="mb-8 mt-2"/>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Welcome to Spotify-remix
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-snug">
              Your music.
              <br />
              Your podcasts.
              <br />
              Your Home.
            </h1>

            <button
              onClick={handleClick}
              className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Get Started
            </button>
      
          </div>
          <div className="mt-10 md:mt-0">
            <img
              src="https://i.pinimg.com/1200x/5d/7e/01/5d7e017ec53130afef340b6683d295a6.jpg"
              alt="Spotify-like App Preview"
              className="w-72 md:w-96 shadow-lg rounded-lg bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHome;
