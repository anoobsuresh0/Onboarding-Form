import { useState } from 'react';
import PersonalDetails from '../details/personDetails';
import EducationDetails from '../details/EducationDetails';
import WorkDetails from '../details/WorkDetails';

const MainPage = () => {

  const [selectedForm] = useState<string | null>(null);


  const renderSelectedForm = () => {
    switch (selectedForm) {
      case "personalDetails":
        return <PersonalDetails />;
      case "educationDetails":
        return <EducationDetails />;
      case "workDetails":
        return <WorkDetails />;
      default:
        return <PersonalDetails />;
    }
  };

  return (
    <div className="grid grid-cols-6 h-full ">
      <div className="bg-white "></div>

      <div className=" col-span-4 mx-7  mt-[100px] ">
        {renderSelectedForm()}
      </div>

      <div className="bg-white "></div>
    </div>
  );
};

export default MainPage;
