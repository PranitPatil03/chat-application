/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import Navbar from "./Navbar";
import { googleIcon } from "../assets/index.js";
import { Link, Navigate } from "react-router-dom";
import Hero from "../common/Hero.jsx";
import toast, { Toaster } from "react-hot-toast";
import { emailRegex, passwordRegex } from "../../constants/constants.js";
import axios from "axios";
import UserContext from "../context/UserContext.js";
import { useContext } from "react";
import { StoreSession } from "../common/Session.jsx";

const Login = () => {
  const {
    userAuth: { accessToken },
    setUserAuth,
  } = useContext(UserContext);

  console.log("AccessToken", accessToken);

  const handleCreateUser = async (serverRoute, formData) => {
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "auth" + serverRoute,
        formData
      );
      console.log("Data ==>", data);
      StoreSession("user", JSON.stringify(data));
      setUserAuth(data);
    } catch (error) {
      toast.error(error?.response?.data.error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(FormElement);

    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    console.log("FormData:", formData);

    const { email, password } = formData;

    if (!email.length) {
      return toast.error("Enter Mail");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Mail is Invalid");
    }

    if (!passwordRegex.test(password)) {
      return toast.error("Password is Invalid");
    }

    handleCreateUser("/login", formData);
  };

  return accessToken ? (
    <Navigate to="/chat" />
  ) : (
    <>
      <Navbar />

      <div className="flex flex-col xl:flex-row items-center gap-[3rem] xl:gap-[20rem] py-8 px-[15vw] my-8">
        <Hero />

        <div className="mx-5 shadow-2xl rounded-lg">
          <div className="flex flex-col h-[45rem] w-[20rem] md:h-[38rem] md:w-[30rem] py-6 px-5">
            <div className="m-5">
              <h1 className="text-5xl">Log in your Account!</h1>
              <p className="text-black mt-2">
                We're looking for amazing engineers just like you! asdasd
              </p>
            </div>
            <div className="mt-1 mx-0 md:mx-2 w-full">
              <Toaster />
              <form id="FormElement" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row mt-3">
                  <div className="flex flex-col md:mr-3 w-full">
                    <label htmlFor="firstName" className="text-black">
                      Email address <span className="text-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="border-grey outline-none border-2 rounded-md mt-1 px-3 py-2 md:px-2 md:py-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row mt-3">
                  <div className="flex flex-col md:mr-3 w-full">
                    <label htmlFor="firstName" className="text-black">
                      Password <span className="text-red">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      className="border-grey outline-none border-2 rounded-md mt-1 px-3 py-2 md:px-2 md:py-1"
                    />
                  </div>
                </div>
                <div className="flex mt-5">
                  <button
                    type="submit"
                    className="flex align-center justify-center w-full p-2 rounded-md md:mr-3 bg-blue/90 text-white"
                  >
                    <p>Login</p>
                  </button>
                </div>
                <div className="flex item-center justify-center mt-6 md:mr-3 w-full">
                  <p className="">
                    A New user?{" "}
                    <span className="text-blue ml-2">
                      <Link to="/login">Sign up</Link>
                    </span>{" "}
                  </p>
                </div>
                <div className="flex mt-8">
                  <button className="flex align-center justify-center w-full p-3 rounded-lg md:mr-3 text-blue bg-white shadow-md">
                    <img src={googleIcon} alt="googleIcon" />
                    <p className="ml-2">Sign up with Google</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
