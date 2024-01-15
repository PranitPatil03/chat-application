import ChannelNavbar from "../common/ChannelNavbar";
import EmptyChannelMessage from "../common/EmptyChannelMessage";

const Channel = () => {
  return (
    <div className="flex flex-col w-1/3 h-screen border-r border-light-grey">
      <ChannelNavbar />
      <EmptyChannelMessage/>
    </div>
  );
};

export default Channel;
