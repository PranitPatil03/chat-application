import { userPic } from "../assets/index.js";

const UserCard = ({userName,message,timeStamp}) => {
  return (
    <div className="w-full flex flex-row gap-2 bg-grey px-6 py-2 cursor-pointer">
      <img src={userPic} className="w-12 h-12 object-cover rounded-full" />
      <div className="w-full flex flex-col relative">
        <h2 className="text-xl font-bold">{userName}</h2>
        <p className="text-dark-grey">{message}</p>
        <span className="absolute right-0 bottom-0">{timeStamp}</span>
      </div>
    </div>
  );
};

export default UserCard;
