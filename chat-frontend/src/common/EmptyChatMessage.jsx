const EmptyChatMessage = () => {
  return (
    <div className="flex flex-col mt-5 gap-2 items-center justify-center h-screen">
      <i className="fi fi-rr-comment-alt text-8xl text-light-grey"></i>
      <p className="text-3xl text-light-grey">No chats here yet…</p>
    </div>
  );
};

export default EmptyChatMessage;
