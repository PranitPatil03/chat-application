import axios from "axios";
import EmptyChatMessage from "../common/EmptyChatMessage";
import UserContext from "../context/UserContext";
import { useContext, useEffect, useState } from "react";

const Chat = () => {
  const {
    userAuth: { accessToken },
  } = useContext(UserContext);

  const [status, setStatus] = useState(false);

  const handleUserStatus = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_SERVER_DOMAIN + "chat/user-status",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(data.userStatus);

      setStatus(data.userStatus);

      return data.userStatus;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userStatus = await handleUserStatus();
      console.log(userStatus);
    };

    fetchData();
  }, [accessToken]); 

  return (
    <div className="flex flex-col w-2/3 h-screen">
      {/* Todo: for a specific user, we also need the user navbar
        Plan to create 2 components which help show a new user the no chat, 
        and if the user already has at least 1 user in the channel, then I can display that user 
      */}

      {!status ? <EmptyChatMessage /> : ""}
    </div>
  );
};

export default Chat;
