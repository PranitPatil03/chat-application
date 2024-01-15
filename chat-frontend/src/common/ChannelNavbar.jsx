const ChannelNavbar = () => {
  return (
    <>
      <div className="flex flex-row gap-6 mt-4 px-6 w-full">
        <i className="fi fi-rr-menu-burger text-2xl p-2 cursor-pointer font-bold"></i>
        <div className="w-full flex-row relative">
          <span className="absolute left-5 mt-[12px]">
            <i className="fi fi-rs-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="outline-0 border w-11/12 p-2 pl-12 rounded-2xl border-light-grey"
          />
        </div>
      </div>
    </>
  );
};

export default ChannelNavbar;
