import { useContext, useEffect, useState } from "react";
import { userPic } from "../assets/index.js";
import UserContext from "../context/UserContext.js";
import axios, { all } from "axios";

const UserCard = () => {
  const {
    userAuth: { accessToken, userName, profile_img },
  } = useContext(UserContext);

  const [allUser, setAllUser] = useState([]);

  const addUser = () => {};

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
    <div className="flex flex-col px-5 py-2 mt-2 pb-3 gap-5 ">
      {allUser.map((users, i) => {
        return (
          <div
            key={i}
            className="flex flex-row items-center gap-4 justify-between"
          >
            <div className="flex flex-row items-center gap-4">
              <img
                src={users.personal_info.profile_img}
                className="w-10 h-10 rounded-full"
              />
              <p className="text-base">{users.personal_info.userName}</p>
            </div>
            <button className="" onClick={addUser}>
              <i className="fi fi-rr-plus text-base"> Add User</i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
