/* eslint-disable react/jsx-no-comment-textnodes */
import Navbar from "./Navbar";
import { user1, user2, user4, user5, user6 } from "../assets/index.js";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col xl:flex-row items-center gap-[3rem] xl:gap-[20rem] py-8 px-[15vw] my-8">
        <div className="flex flex-col gap-5 my-[12%] shadow-sm">
          <div className="text-black text-6xl">
            <h2 className="leading-[5rem] text-bold">
              Chatting Beyond... <br />
              Boundaries...
              <br />
              WeChat
            </h2>
          </div>

          <div className="flex items-start sm:ml-0">
            <div className="user z-50">
              <img src={user1} alt="User 1" />
            </div>
            <div className="user mx-[-30px] z-40">
              <img src={user2} alt="User 2" />
            </div>
            <div className="user z-30">
              <img src={user6} alt="User 6" />
            </div>
            <div className="user mx-[-30px] z-20">
              <img src={user4} alt="User 4" />
            </div>
            <div className="user z-10">
              <img src={user5} alt="User 5" />
            </div>
          </div>
        </div>

        <div className="mx-5 shadow-2xl rounded-lg">
          <div className="flex flex-col h-[35rem] w-[20rem] md:h-[40rem] md:w-[30rem] py-5 px-5">
            <div className="m-5">
              <h1 className="text-5xl">Join Us !</h1>
              <p className="text-black mt-2">
                We're looking for amazing engineers just like you! asdasd
              </p>
            </div>
            <div className="mt-8 mx-0 md:mx-2 w-full">
              <form className="">
                <div className="flex flex-col md:flex-row w-full">
                  <div className="flex flex-col md:mr-3 w-full">
                    <label htmlFor="firstName" className="text-black">
                      First Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="border-grey outline-none border-2 rounded-md mt-1 px-2 py-1"
                    />
                  </div>
                  <div className="flex flex-col md:mr-3 w-full">
                    <label htmlFor="firstName" className="text-black">
                      Last Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      className="border-grey outline-none border-2 rounded-md mt-1 px-2 py-1"
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
                      className="border-grey outline-none border-2 rounded-md mt-1 px-2 py-1"
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
                      className="border-grey outline-none border-2 rounded-md mt-1 px-2 py-1"
                    />
                  </div>
                </div>
                <div className="flex mt-5">
                  <button className="flex align-center justify-center w-full p-2 rounded-md md:mr-3 bg-blue/90 text-white">
                    <p>Sign Up</p>
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
