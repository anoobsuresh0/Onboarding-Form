// import React from 'react'

import MainPage from "./pages/MainPage";
import SideBar from "./pages/SideBar";

const HomePage = () => {
  const setSelectedForm = () => {
    // implementation goes here
  };

  return (
    <div className="grid grid-cols-5 h-screen ">
      <div className="bg-secondary " >
        <SideBar setSelectedForm={setSelectedForm} />
      </div>

      <div className=" col-span-4 " >
        <MainPage />
      </div>
    </div>
  );
};

export default HomePage;
