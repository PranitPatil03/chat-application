import Channel from "../components/Channel";
import Chat from "../components/Chat";

const ChatPage = () => {
  return (
    <>
      <div className="flex flex-row w-full h-screen">
        <Channel></Channel>
        <Chat></Chat>
      </div>
    </>
  );
};

export default ChatPage;
