import { useState } from "react";
import InputBox from "../common/InputBox";
import { UserProfile1 } from "../assets";
import { RemoveSession } from "../common/Session";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  console.log(showSideBar);

  return (
    <div className="hidden md:flex md:flex-col h-full flex-[0.25]  border-r border-grey ">
      <div className="flex w-full justify-center gap-3 px-4 pt-3">
        <div className="flex justify-center relative">
          <i
            className="fi fi-rr-menu-burger text-2xl cursor-pointer mt-4"
            onClick={() => setShowSideBar((prev) => !prev)}
          ></i>
          {showSideBar ? (
            <div className="flex flex-col w-[15.5rem] h-[15.5rem] z-3 absolute top-[6rem] left-1 shadow-md border-dark-grey bg-grey/65 rounded-lg px-3 pt-2">
              <div className="flex gap-4 items-center mb-4">
                <img src={UserProfile1} className="w-10 h-10 rounded-full" />
                <button className="text-xl hover:underline">Pranit Patil</button>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <i className="fi fi-rr-at text-xl rounded-full ml-3"></i>
                <button className="text-base ml-3 hover:underline">Mentions</button>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <i className="fi fi-rr-pencil text-xl rounded-full ml-3"></i>
                <button className="text-base ml-3 hover:underline">New Direct Message</button>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <i className="fi fi-rr-users-alt text-xl rounded-full ml-3"></i>
                <button className="text-base ml-3 hover:underline">New Group</button>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <i className="fi fi-rr-user text-xl rounded-full ml-3"></i>
                <button className="text-base ml-3 hover:underline" onClick={()=>RemoveSession("user")}>Sign Out</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full">
          <InputBox
            name="search"
            type="text"
            placeholder="Search"
            icon="fi-rr-search"
            classes=""
          />
        </div>
      </div>

      <div className="flex w-full">
        <hr className="border-b-2 border-light-grey w-full" />
      </div>
    </div>
  );
};

export default Sidebar;
