import EmptyChatMessage from "../common/EmptyChatMessage";

const Chat = () => {
  return (
    <div className="flex flex-col w-2/3 h-screen">
      {/* Todo:for specific user we also need the user navbar
        Plan to create 2 components which helps in show new user the no chat and if user is already have at-least 1 user in the channel then i can display that user 
      */}
      <EmptyChatMessage />
    </div>
  );
};

export default Chat;
