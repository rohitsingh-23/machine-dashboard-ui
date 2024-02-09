import React from "react";

const SideBar = () => {
  return (
    <div className="w-[10vw] bg-[#1d2235] h-[100vh] flex flex-col justify-between">
      <div className="flex justify-center items-center mt-[8vh]">
        <img
          className="h-[5vw] w-[5vw]"
          src="/Assets/Briefcase.png"
          alt="vdsfcs"
        />
      </div>
      {/* <img src="/Assets/Dashboard.png" alt="vdsfcs" /> */}
      <div className="flex flex-col justify-between items-end h-[25vh] mb-[15vh]">
        <div className="flex justify-center items-center text-black bg-white px-[20px] py-[10px] rounded-tl-lg rounded-bl-lg w-[8vw]">
          <img
            className="h-[20px]  pr-[10px]"
            src="/Assets/Circled-Menu.png"
            alt=""
          />
          <p className="text-[12px]">Dashboard</p>
        </div>
        <div className="flex  items-center text-white bg-black px-[20px] py-[10px] rounded-tl-lg rounded-bl-lg w-[8vw]">
          <img
            className="h-[20px]  pr-[10px]"
            src="/Assets/Support.png"
            alt=""
          />
          <p className="text-[12px]">Support</p>
        </div>
        <div className="flex  items-center text-white bg-black px-[20px] py-[10px] rounded-tl-lg rounded-bl-lg w-[8vw]">
          <img
            className="h-[20px]  pr-[10px]"
            src="/Assets/Puzzle.png"
            alt=""
          />
          <p className="text-[12px]">Plugins</p>
        </div>
        <div className="flex  items-center text-white bg-black px-[20px] py-[10px] rounded-tl-lg rounded-bl-lg w-[8vw]">
          <img className="h-[20px]  pr-[10px]" src="/Assets/Help.png" alt="" />
          <p className="text-[12px]">Help</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[100%] bg-white py-[20px]">
        <p className="text-[12px] pr-[10px]">Logout</p>
        <img
          className="h-[20px]  pr-[10px]"
          src="/Assets/ShutDown.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SideBar;
