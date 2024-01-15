const EmptyChannelMessage = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen mb-12">
      <i className="fi fi-rr-comment-alt text-8xl text-light-grey"></i>
      <p className="text-3xl text-light-grey">You currently have no channels</p>
    </div>
  );
};

export default EmptyChannelMessage;
