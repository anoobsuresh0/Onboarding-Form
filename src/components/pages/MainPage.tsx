import PersonalDetails from '../details/PersonDetails';
import EducationDetails from '../details/EducationDetails';
import WorkDetails from '../details/WorkDetails';

const MainPage = () => {


  return (
    <div className="grid grid-cols-6 h-full ">
      <div className="bg-white "></div>

      <div className=" col-span-4 mx-7  mt-[100px] ">
        <PersonalDetails />
        <EducationDetails />
        <WorkDetails />
      </div>

      <div className="bg-white "></div>
    </div>
  );
};

export default MainPage;
