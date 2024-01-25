import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const {
    userAuth: { accessToken, userName, profile_img },
  } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col gap-5 w-full my-[0.4rem] p-4">
        <div className="flex flex-row items-center gap-4 justify-between">
          <div className="flex flex-row items-center gap-4">
            <img src={profile_img} className="w-10 h-10 rounded-full" />
            <Link className="text-base underline">{userName}</Link>
          </div>
          <div className="flex gap-5">
            <button className="">
              <i className="fi fi-rr-phone-call text-base"></i>
            </button>
            <button className="">
              <i className="fi fi-rr-camera text-base"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
