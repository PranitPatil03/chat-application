import Chat from "../components/Chat.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Main = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-light-grey flex items-center justify-center">
      <div className="flex items-center justify-center w-[85vw] h-[85vh] shadow-md m-5 bg-white rounded-xl">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
};

export default Main;
