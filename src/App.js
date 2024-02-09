import "./App.css";
import Line from "./components/Line";
import Pi from "./components/Pi";
import Table from "./components/Table";
import ProfileCard from "./components/ProfileCard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App bg-[#e8edff] flex">
      <div className="">
        <SideBar />
      </div>
      <div className="w-[85vw]">
        <div className="flex justify-between items-end w-[85vw] px-[2vw] pt-[1vh]">
          <p className="text-[18px]">Good Morning ! 🌞</p>
          <div className="flex items-center rounded-lg px-[10px] mr-[3vw] py-[5px] bg-white">
            <div className="pr-[10px]">
              <p className="text-[18px]">John Doe</p>
              <p className="text-[14px]">john@doe.com</p>
            </div>
            <div>
              <img src="/Assets/Rectangle-10.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex w-[80vw] justify-between items-center  mt-[2%] mb-[4%]">
          <div className="bg-white shadow-md p-[10px] rounded-lg ml-[30px]">
            <Line />
          </div>
          <div className="bg-white shadow-md p-[10px] rounded-lg">
            <Pi />
          </div>
        </div>
        <div className="flex w-[80vw] justify-between items-center  mt-[2%] mb-[4%] ">
          <Table />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default App;
