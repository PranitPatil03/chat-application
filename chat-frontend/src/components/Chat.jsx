import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import UserNavbar from "../common/UserNavbar";
import InputBox from "../common/InputBox";
import { SendBtn } from "../assets";

const Chat = ({ showUserNavbar }) => {
  const {
    userAuth: { accessToken, userName, profile_img },
  } = useContext(UserContext);

  console.log(showUserNavbar);

  return (
    <>
      <div className="w-full">
        {showUserNavbar ? (
          <div className="w-full h-full">
            <div className="w-full">
              <UserNavbar></UserNavbar>
              <div className="flex w-full">
                <hr className="border-b-2 border-light-grey w-full" />
              </div>
            </div>

            <div className="h-[80%] w-full">
              dsadsad
            </div>

            <div className="flex flex-row gap-4  justify-center items-center mx-3">
              <div className="flex items-center">
                <i className="fi fi-rr-add text-2xl"></i>
              </div>
              <div className="w-full flex items-center justify-center">
                <InputBox
                  name="search"
                  type="text"
                  placeholder="Search a user to connect"
                  icon="fi-rr-search"
                />
              </div>
              <div className="flex items-center">
                <img src={ SendBtn}/>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Chat;
