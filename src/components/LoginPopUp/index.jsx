import React, { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSubmitError, setShowSubmiterror] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSuccessEvent = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/", { replace: true });
  };

  const onFailureEvent = (error) => {
    setErrorMessage(error);
    setShowSubmiterror(true);
  };

  const token = Cookies.get("jwt_token");
  if (token !== undefined) {
    return <Navigate to="/"/>;
  }

  const onSubmitEvent = async (event) => {
    event.preventDefault();
    const userDetails = { email, password };
    const url = "https://spotify-clone-1-96wb.onrender.com/api/login";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === true) {
      onSuccessEvent(data.token);
    } else {
      onFailureEvent(data.message);
    }
  };

  return (
    <div className="bg-[url(/Group%20138.png)] bg-cover bg-center h-screen w-full flex justify-center items-center">
      <form
        className="bg-[#181818] md:w-[450px] md:h-[445px] w-[296px] h-[430px] rounded-md opacity-90"
        onSubmit={onSubmitEvent}
      >
        <div className="p-2">
          <div className="md:mt-6 mt-3">
            <img src="Group.png" className="w-35 mx-auto mb-2" />
            <h1 className="text-center font-semibold text-white text-2xl">
              Spotify Remix
            </h1>

            <div className="flex flex-col">
              <label className="font-semibold text-white pl-3">EMAIL</label>
              <input
                placeholder="example@email.com"
                className="md:w-[408px] w-[250px] bg-[#D9D9D9] px-3 py-2 rounded-md m-3 outline-none font-roboto font-semibold"
                onChange={onChangeEmailHandler}
                value={email}
                type="text"
              />
            </div>

            <div className="flex flex-col relative">
              <label className="font-semibold text-white pl-3">PASSWORD</label>
              <input
                placeholder="Enter your password"
                className="md:w-[408px] w-[250px] bg-[#D9D9D9] px-3 py-2 rounded-md m-3 outline-none pr-10"
                onChange={onChangePassHandler}
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
              Login
            </button>
          </div>

          {showSubmitError && (
            <p className="md:ml-3 font-semibold text-red-500 md:pl-0 pl-3">
              *{errorMessage}
            </p>
          )}
          <p className="text-center text-white mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-400 underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
