import React, { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // New state for errors

  const navigate = useNavigate();

  const token = Cookies.get("jwt_token");
  if (token !== undefined) {
    return <Navigate to="/home" replace />;
  }

  const onSubmitEvent = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // reset error on submit

    const userDetails = { username, email, password };
    const url = "https://spotify-clone-1-96wb.onrender.com/api/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/login", { replace: true });
        console.log("User registered successfully");
      } else {
        // Show backend error message (username/email exists)
        setErrorMessage(data.message || "Registration failed");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="bg-[url(https://i.pinimg.com/1200x/7e/fc/d9/7efcd9c359dd0a12699c94ba4c71a83c.jpg)] bg-cover bg-center h-screen w-full flex justify-center items-center">
      <form
        className="bg-[#181818] md:w-[450px] md:h-[540px] w-[296px] h-[410px] rounded-md opacity-90"
        onSubmit={onSubmitEvent}
      >
        <div className="p-2">
          <div className="md:mt-6 mt-3">
            <img src="Group.png" className="w-35 mx-auto mb-2" />
            <h1 className="text-center font-semibold text-white text-2xl">
              Register
            </h1>

            {errorMessage && (
              <p className="text-center text-red-500 font-semibold mb-2">
                {errorMessage}
              </p>
            )}

            <div className="flex flex-col md:mt-6 mt-3">
              <label className="font-semibold text-white pl-3">USERNAME</label>
              <input
                placeholder="ex:username@123"
                className="md:w-[408px] w-[250px] bg-[#D9D9D9] px-3 py-2 rounded-md m-3 outline-none font-roboto font-semibold"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
              />
            </div>

            <div className="flex flex-col ">
              <label className="font-semibold text-white pl-3">EMAIL</label>
              <input
                placeholder="example@email.com"
                className="md:w-[408px] w-[250px] bg-[#D9D9D9] px-3 py-2 rounded-md m-3 outline-none font-roboto font-semibold"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
              />
            </div>

            <div className="flex flex-col relative">
              <label className="font-semibold text-white pl-3">PASSWORD</label>
              <input
                placeholder="Enter your password"
                className="md:w-[408px] w-[250px] bg-[#D9D9D9] px-3 py-2 rounded-md m-3 outline-none pr-10"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
              />
              <span
                className="absolute right-6 top-12 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/ios-glyphs/30/visible--v1.png"
                    alt="visible--v1"
                  />
                ) : (
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/hide.png"
                    alt="hide"
                  />
                )}
              </span>
            </div>
          </div>

          <div className="md:ml-0 ml-10">
            <button
              type="submit"
              className="md:w-[408px] w-[150px] bg-green-500 px-3 py-2 rounded-md m-3 outline-none font-semibold text-black cursor-pointer"
            >
              Register
            </button>
          </div>

          <p className="text-center text-white mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-green-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
