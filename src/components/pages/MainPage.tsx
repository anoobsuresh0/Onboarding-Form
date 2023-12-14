// import React from 'react'
import PersonalDetails from '../details/personDetails';

const MainPage = () => {
  return (
    <div className="grid grid-cols-6 h-full ">
      <div className="bg-white "></div>

      <div className=" col-span-4 mx-7  mt-[100px] ">
        <PersonalDetails/>
      </div>

      <div className="bg-white "></div>
    </div>
  );
};

export default MainPage;
