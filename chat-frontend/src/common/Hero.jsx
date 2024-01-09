import { user1, user2, user4, user5, user6 } from "../assets/index.js";

const Hero = () => {
  return (
    <div className="max-md:hidden flex flex-col gap-5 my-[5%] md:my-[12%] ">
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
  );
};

export default Hero;
