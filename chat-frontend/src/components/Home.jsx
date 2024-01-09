/* eslint-disable react/jsx-no-comment-textnodes */
import Navbar from "./Navbar";
import { googleIcon } from "../assets/index.js";
import { Link } from "react-router-dom";
import Hero from "../common/Hero.jsx";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col xl:flex-row items-center gap-[3rem] xl:gap-[20rem] py-8 px-[15vw] my-8">
        <Hero />

        <div className="mx-5 shadow-2xl rounded-lg">
          <div className="flex flex-col h-[45rem] w-[20rem] md:h-[39rem] md:w-[30rem] py-5 px-5">
            <div className="m-5">
              <h1 className="text-5xl">Join Us !</h1>
              <p className="text-black mt-2">
                We're looking for amazing engineers just like you! asdasd
              </p>
            </div>
            <div className="mt-3 mx-0 md:mx-2 w-full">
              <form className="">
                <div className="flex flex-col md:flex-row w-full ">
                  <div className="flex flex-col md:mr-3 w-full">
                    <label htmlFor="firstName" className="text-black">
                      First Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="border-grey outline-none border-2 rounded-md mt-1 px-3 py-2 md:px-2 md:py-1"
                    />
                  </div>
                  <div className="flex flex-col md:mr-3 w-full mt-3 md:mt-0">
                    <label htmlFor="firstName" className="text-black">
                      Last Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="border-grey outline-none border-2 rounded-md mt-1 px-3 py-2 md:px-2 md:py-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row mt-3">
                  <div className="flex flex-col md:mr-3 w-full">
                    <label htmlFor="firstName" className="text-black">
                      Email address <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
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
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="border-grey outline-none border-2 rounded-md mt-1 px-3 py-2 md:px-2 md:py-1"
                    />
                  </div>
                </div>
                <div className="flex mt-5">
                  <button className="flex align-center justify-center w-full p-2 rounded-md md:mr-3 bg-blue/90 text-white">
                    <p>Sign Up</p>
                  </button>
                </div>
                <div className="flex item-center justify-center mt-6 md:mr-3 w-full">
                  <p className="">
                    Already a user?{" "}
                    <span className="text-blue ml-2">
                      <Link to="/login">Login</Link>
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

export default Home;
