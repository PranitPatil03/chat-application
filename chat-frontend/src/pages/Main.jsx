import { useContext, useState } from "react";
import Chat from "../components/Chat.jsx";
import Sidebar from "../components/Sidebar.jsx";
import UserContext from "../context/UserContext.js";
import { Navigate } from "react-router-dom";

const Main = () => {
  const {
    userAuth: { accessToken },
  } = useContext(UserContext); 

  const [showUserNavbar, SetShowUserNavbar] = useState("");

  const handleDataChange = (showUserNavbar) => {
    SetShowUserNavbar(showUserNavbar);
  };

  return accessToken ? (
    <div className="w-[100vw] h-[100vh] bg-light-grey flex items-center justify-center">
      <div className="flex w-[85vw] h-[85vh] shadow-md m-5 bg-white rounded-xl">
        <Sidebar onDataChange={handleDataChange}></Sidebar>
        <Chat showUserNavbar={showUserNavbar}></Chat>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Main;
