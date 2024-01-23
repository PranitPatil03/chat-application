import { userPic } from "../assets";

const UserNavbar = ({userName,message,timeStamp}) => {
  return (
    <>
      <div className="w-full flex flex-row gap-2 bg-grey px-6 py-2 cursor-pointer">
      <img src={userPic} className="w-12 h-12 object-cover rounded-full" />
      <div className="w-full flex flex-col relative">
        <h2 className="text-xl font-bold">{userName}</h2>
        <p className="text-dark-grey">{message}</p>
      </div>
    </div>
    </>
  );
};

export default UserNavbar;
