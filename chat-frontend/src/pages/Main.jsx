import InputBox from "../common/InputBox.jsx";

const Main = () => {
  return (
    <div className="flex items-center justify-center h-[90vh]  shadow-md m-5 bg-white rounded-xl main">
      <div className="hidden md:flex w-[90%] h-full flex-[0.25]  border-r border-grey">
        <div className="flex">
          <div className="">
            <i className="fi fi-rr-menu-burger"></i>
          </div>
          <div className="">
            <InputBox
              name="search"
              type="text"
              placeholder="Search"
              icon="fi-rr-search"
            />
          </div>
        </div>
      </div>
      <div className="flex w-[90%] h-full flex-[0.75] ">Chat</div>
    </div>
  );
};

export default Main;
