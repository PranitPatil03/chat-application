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
              <br/>
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

        <div className="flex mx-5 shadow-2xl">
          <div className="border h-[35rem] w-[25rem] md:h-[40rem] md:w-[30rem]">

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
