/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState } from "react";

const userInfo = {
  personal_info: {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    bio: "",
    profile_img: "",
  },
  google_auth: "",
};

const [user, setUser] = useState({ userInfo });

const UserContext = createContext({ user, setUser });

export default UserContext;
