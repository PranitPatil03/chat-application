/* eslint-disable react/jsx-no-comment-textnodes */
import Navbar from "./Navbar";
import { user1 } from "../assets/index.js";
import { user2 } from "../assets/index.js";
import { user3 } from "../assets/index.js";
import { user4 } from "../assets/index.js";
import { user5 } from "../assets/index.js";
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex items-center gap-[15rem] py-8 px-5">
        <div className="flex flex-col items-center justify-center gap-5 my-[12%] mx-[4%] leading-7">
          <div className="text-black text-6xl">
            <h2 className="leading-[4rem]">
              Chatting Beyond <br />
              Boundaries with
              <br />
              WeChat
            </h2>
          </div>

          <div className="flex items-start ml-[-95px]">
            <div className="rounded-full px-2 py-2 z-50">
              <img src={user1} />
            </div>
            <div className="rounded-full px-2 py-2 mx-[-30px] z-40">
              <img src={user2} />
            </div>
            <div className="rounded-full px-2 py-2 z-30">
              <img src={user3} />
            </div>
            <div className="rounded-full px-2 py-2 mx-[-30px] z-20">
              <img src={user4} />
            </div>
            <div className="rounded-full px-2 py-2 z-10">
              <img src={user5} />
            </div>
          </div>
        </div>

        <div className="flex px-6 border-grey w-[500px] h-[400px] shadow-md">
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Join Us!</h1>
            <p className="mb-4">
              We're looking for amazing engineers just like you!
            </p>

            <div className="bg-white rounded-lg p-8">
              <form className="flex">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full">
                    <p className="text-black">First Name</p>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full outline-none border-[1px] border-grey rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-black">First Name</p>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full outline-none border-[1px] border-grey rounded-md"
                    />
                  </div>
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
