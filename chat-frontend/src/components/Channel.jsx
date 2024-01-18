import { useContext, useEffect, useState } from "react";
import ChannelNavbar from "../common/ChannelNavbar";
import EmptyChannelMessage from "../common/EmptyChannelMessage";
import axios from "axios";
import UserContext from "../context/UserContext";

const Channel = () => {
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
    <div className="flex flex-col w-1/3 h-screen border-r border-light-grey">
      <ChannelNavbar />
      {!status ? <EmptyChannelMessage /> : ""}
    </div>
  );
};

export default Channel;
