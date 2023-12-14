// import React from 'react'

import { useState } from "react";
import MainPage from "./pages/MainPage";
import SideBar from "./pages/SideBar";

const HomePage = () => {

  const [selectedDetails, setSelectedDetails] = useState<string>('personal')

  const handleDetailsChange = (detailsType: string) => {
    setSelectedDetails(detailsType);
  };

  return (
    <div className="grid grid-cols-5 h-screen ">
      <div className="bg-secondary " >
        <SideBar selectedDetails= {selectedDetails} onDetailsChange= {handleDetailsChange} />
      </div>

      <div className=" col-span-4 " >
        <MainPage selectedDetails= {selectedDetails}/>
      </div>
    </div>
  );
};

export default HomePage;
