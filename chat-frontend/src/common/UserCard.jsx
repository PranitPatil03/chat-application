import { useContext } from "react";
import { userPic } from "../assets/index.js";
import UserContext from "../context/UserContext.js";

const UserCard = () => {
  const {
    userAuth: { accessToken, userName, profile_img },
  } = useContext(UserContext);

  return (
    <div className="flex flex-col px-5 py-2 mt-2 pb-3 gap-5 ">
      <div className="flex flex-row items-center gap-4 justify-between">
        <div className="flex flex-row items-center gap-4">
          <img src={profile_img} className="w-10 h-10 rounded-full" />
          <p className="text-base">{userName}</p>
        </div>
        <button className="">
          <i className="fi fi-rr-plus text-base"> Add User</i>
        </button>
      </div>
      <div className="flex flex-row items-center gap-4 justify-between ">
        <div className="flex flex-row items-center gap-4">
          <img src={profile_img} className="w-10 h-10 rounded-full" />
          <p className="text-base">{userName}</p>
        </div>
        <button className="">
          <i className="fi fi-rr-plus text-base"> Add User</i>
        </button>
      </div>
      <div className="flex flex-row items-center gap-4 justify-between ">
        <div className="flex flex-row items-center gap-4">
          <img src={profile_img} className="w-10 h-10 rounded-full" />
          <p className="text-base">{userName}</p>
        </div>
        <button className="">
          <i className="fi fi-rr-plus text-base"> Add User</i>
        </button>
      </div>
      <div className="flex flex-row items-center gap-4 justify-between ">
        <div className="flex flex-row items-center gap-4">
          <img src={profile_img} className="w-10 h-10 rounded-full" />
          <p className="text-base">{userName}</p>
        </div>
        <button className="">
          <i className="fi fi-rr-plus text-base"> Add User</i>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
