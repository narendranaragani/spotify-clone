import React from 'react'
import { Link, useNavigate } from 'react-router'
import Cookies from 'js-cookie';

const Navbar = () => {

  const navigate = useNavigate();
  const onClickLogout = ()=>{
    Cookies.remove('jwt_token')
    navigate('/login',{replace: true})
  }

  return (
    <div>
      <nav className="bg-[black] h-18 fixed w-full flex justify-between items-center p-3 z-100">
        <div className="flex justify-center items-center gap-8">
          <img src="/music.png" className="w-25 md:w-30" />
          <div className="hidden md:flex">
            <Link to="/">
              <div className="w-12 h-12 bg-[#181818] rounded-3xl mr-5 flex justify-center items-center cursor-pointer hover:bg-[#242424]">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency-systems-regular/50/FFFFFF/home.png"
                  alt="home"
                />
              </div>
            </Link>
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute cursor-pointer w-5 h-5 top-2.5 left-2.5 text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="w-90 h-10 text-gray-200 hover:bg-[#333333] font-semibold bg-[#181818] px-3 py-3 rounded-3xl pl-10"
                type="text"
                placeholder="What do you want to play?"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center p-4">
          <div className=" flex justify-center items-center gap-2">
            <button className="md:mr-5  bg-[#242424] hover:bg-[#30A669] hover:text-[black] cursor-pointer text-[#969696] font-semibold md:w-15 w-12 h-8 md:text-md text-sm rounded-2xl hidden md:block">
              All
            </button>
            <Link to="/playlist">
              <button className="md:mr-5  bg-[#242424] hover:text-[white] cursor-pointer text-[#969696] font-semibold md:w-18 h-8 w-15 md:text-md text-sm rounded-2xl border-2 border-violet-500/50 hidden md:block">
                Music
              </button>
            </Link>
          </div>
          <Link to="/">
            <div className="w-12 h-12 block md:hidden bg-[#181818] rounded-3xl mr-5 flex justify-center items-center cursor-pointer hover:bg-[#242424]">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency-systems-regular/50/FFFFFF/home.png"
                alt="home"
              />
            </div>
          </Link>
          <Link to="/podcasts">
            <div className="w-12 h-12 bg-[#181818] rounded-3xl mr-5 flex justify-center items-center cursor-pointer">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/podcast.png"
                alt="podcast"
              />
            </div>
          </Link>
          <Link to="/login">
            <div className="mt-2 flex-col">
              <img
                src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
                onClick={onClickLogout}
                className="size-8 mx-auto cursor-pointer"
              />
              <button
                className="text-gray-400 text-sm font-bold"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
