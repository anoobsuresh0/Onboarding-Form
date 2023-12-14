
import MainPage from "./pages/MainPage";
import SideBar from "./pages/SideBar";

const HomePage = () => {


  return (
    <div className="grid grid-cols-5 h-screen ">
      <div className="bg-secondary " >
        <SideBar  />
      </div>

      <div className=" col-span-4 " >
        <MainPage/>
      </div>
    </div>
  );
};

export default HomePage;
