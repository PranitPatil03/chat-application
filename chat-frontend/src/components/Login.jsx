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
import InputBox from "../common/InputBox.jsx";

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

  const handleGoogleAuth = () => {};

  return accessToken ? (
    <Navigate to="/chat" />
  ) : (
    <>
      <Navbar />

      <section className="h-cover flex items-center justify-center">
        <Toaster />
        <form id="FormElement" className="w-[90%] md:w-[35%] max-w-250px">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            Welcome Back
          </h1>

          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon="fi-rr-envelope"
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-key"
          />

          <button
            className="btn-dark center mt-14"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

          <div className="relative w-full flex items-center gap-2 my-10 opacity-8 uppercase text-black font-black">
            <hr className="w-1/2 border-black"></hr>
            <p className="text-dark-grey">OR</p>
            <hr className="w-1/2 border-black"></hr>
          </div>

          <button
            className="btn-dark flex items-center justify-center gap-4 w-[90%] center"
            onClick={handleGoogleAuth}
          >
            <img src={googleIcon} className="w-5" /> continue with Google
          </button>

          <p className="mt-6 text-dark-grey text-xl text-center">
            Don't have an account ?
            <Link to="/signup" className="underline text-black text-xl ml-1">
              Join Now
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
