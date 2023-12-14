// MainPage.tsx
import PersonalDetails from "../details/PersonDetails";
import EducationDetails from "../details/EducationDetails";
import WorkDetails from "../details/WorkDetails";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store/store";

const MainPage = () => {
  const selectedDetails = useSelector(
    (state: RootState) => state.details.selectedDetails
  );

  const renderDetailsComponent = () => {
    switch (selectedDetails) {
      case "personal":
        return <PersonalDetails />;
      case "education":
        return <EducationDetails />;
      case "work":
        return <WorkDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-6 h-full ">
      <div className="bg-white "></div>

      <div className="col-span-4 mx-7 mt-[100px]">
        {renderDetailsComponent()}
      </div>
      
      <div className="bg-white "></div>
    </div>
  );
};

export default MainPage;
