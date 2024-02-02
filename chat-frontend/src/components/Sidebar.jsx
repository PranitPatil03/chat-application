import { useContext, useEffect, useState } from "react";
import InputBox from "../common/InputBox";
import { UserProfile1 } from "../assets";
import { RemoveSession } from "../common/Session";
import UserContext from "../context/UserContext";
import toast, { Toaster } from "react-hot-toast";
import UserCard from "../common/UserCard";
import axios from "axios";

const Sidebar = ({ onDataChange }) => {
  const {
    userAuth: { accessToken, userName, profile_img },
  } = useContext(UserContext);

  console.log(accessToken);

  const [showSideBar, setShowSideBar] = useState(false);
  const [showUserSearchBar, setShowUserSearchBar] = useState(false);

  const [allUser, setAllUser] = useState([]);

  const [showUserProfileNavbar, setShowUserProfileNavbar] = useState(false);

  const showUserSearchBox = () => {
    setShowUserSearchBar((prev) => !prev);
  };

  const handleSignOut = () => {
    RemoveSession("user");
    toast.success("You has been sign out successfully");
  };

  const handleUserProfileClick = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    const targetID = e.target.innerHTML;

    if (targetID.tagName == 'IMG') { 
      console.log(targetID.tagName)
    }


    setShowUserProfileNavbar((prev) => !prev);
    onDataChange(showUserProfileNavbar);
  };

  const fetchAllUser = () => {
    axios
      .post(
        import.meta.env.VITE_SERVER_DOMAIN + "user/fetchAllUsers",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setAllUser(data.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(allUser);

  useEffect(() => {
    fetchAllUser();
  }, []);

  return (
    <>
      <div className="hidden md:flex md:flex-col h-full border-r border-grey w-[250px] xl:w-[350px]">
        <Toaster />
        <div className="flex w-full justify-center gap-3 px-4 pt-3">
          <div className="flex justify-center relative">
            <i
              className="fi fi-rr-menu-burger text-2xl cursor-pointer mt-4"
              onClick={() => setShowSideBar((prev) => !prev)}
            ></i>
            {showSideBar ? (
              <div className="flex flex-col w-[15.5rem] h-[15.5rem] z-3 absolute top-[6rem] left-1 shadow-md border-dark-grey bg-light-grey rounded-lg px-3 pt-2">
                <div className="flex gap-4 items-center mb-4">
                  <img
                    src={profile_img || UserProfile1}
                    className="w-10 h-10 rounded-full"
                  />
                  <button className="text-xl hover:underline">
                    {userName || "UserName"}{" "}
                  </button>
                </div>
                <div className="flex gap-4 items-center mb-4">
                  <i className="fi fi-rr-at text-xl rounded-full ml-3"></i>
                  <button className="text-base ml-3 hover:underline">
                    Mentions
                  </button>
                </div>
                <div className="flex gap-4 items-center mb-4">
                  <i className="fi fi-rr-pencil text-xl rounded-full ml-3"></i>
                  <button
                    className="text-base ml-3 hover:underline"
                    onClick={showUserSearchBox}
                  >
                    New Direct Message
                  </button>
                </div>
                <div className="flex gap-4 items-center mb-4">
                  <i className="fi fi-rr-users-alt text-xl rounded-full ml-3"></i>
                  <button className="text-base ml-3 hover:underline">
                    New Group
                  </button>
                </div>
                <div className="flex gap-4 items-center mb-4">
                  <i className="fi fi-rr-user text-xl rounded-full ml-3"></i>
                  <button
                    className="text-base ml-3 hover:underline"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="w-full mb-3">
            <InputBox
              name="search"
              type="text"
              placeholder="Search"
              icon="fi-rr-search"
            />
          </div>
        </div>

        <div className="flex w-full">
          <hr className="border-b-2 border-light-grey w-full" />
        </div>

        <div className="flex flex-col px-5 py-2 mt-2 pb-3 gap-5">
          {allUser.map((users, i) => {
            return (
              <button
                key={i}
                className="flex flex-row items-center gap-4 justify-between"
                onClick={(e) => handleUserProfileClick(e)}
              >
                <div className="flex flex-row items-center gap-4">
                  <img
                    src={users.personal_info.profile_img}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-sm">{users.personal_info.userName}</p>
                </div>
                <p className="text-sm hidden xl:block line-clamp-1">12:32 AM</p>
              </button>
            );
          })}
        </div>
      </div>

      {showUserSearchBar ? (
        <div className="absolute left-[50%] top-[25%]">
          <div className="hidden lg:flex w-[90%] h-full flex-[0.75] ">
            <div className="w-[35rem] h-[25rem] border-2 border-light-grey shadow-xl rounded-lg ">
              <div className="flex justify-center items-center mx-3 my-3">
                <InputBox
                  name="search"
                  type="text"
                  placeholder="Search a user to connect"
                  icon="fi-rr-search"
                />
              </div>
              <div className="flex w-full ">
                <hr className="border-b-2 border-light-grey w-full" />
              </div>
              <div className="">
                <p className="mx-5 mt-3">All Users</p>
              </div>
              <UserCard></UserCard>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
