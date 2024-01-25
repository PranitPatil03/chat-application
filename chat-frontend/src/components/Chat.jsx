import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import UserNavbar from "../common/UserNavbar";
import { SendBtn } from "../assets";
import io from "socket.io-client";
const socket = io("http://localhost:3000");

const Chat = ({ showUserNavbar }) => {
  const {
    userAuth: { accessToken, userName, profile_img },
  } = useContext(UserContext);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(userName);

  useEffect(() => {
    socket.emit("joinRoom", currentUser);

    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [currentUser]);

  const sendMessage = () => {
    if (newMessage === "") {
      return;
    }
    const messageData = {
      userName: userName,
      message: newMessage,
      date: new Date(),
    };
    socket.emit("send-message", messageData);
  };

  return (
    <>
      <div className="w-full">
        {showUserNavbar ? (
          <div className="w-full h-full">
            <div className="w-full">
              <UserNavbar></UserNavbar>
              <div className="flex w-full">
                <hr className="border-b-2 border-light-grey w-full" />
              </div>
            </div>

            <div className="h-[80%] w-full">
              <div className="p-4 h-[90%] mb-4">
                {messages.map((message, index) => (
                  <div key={index} className="mb-2">
                    <strong>{message.from}:</strong> {message.content}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-row gap-4  justify-center items-center mx-3">
              <div className="flex items-center">
                <i className="fi fi-rr-add text-2xl"></i>
              </div>
              <div className="w-full flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-l focus:outline-none input-box"
                />
              </div>
              <div className="flex items-center">
                <img src={SendBtn} onClick={sendMessage} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Chat;
