// MainPage.tsx
import PersonalDetails from '../details/PersonDetails';
import EducationDetails from '../details/EducationDetails';
import WorkDetails from '../details/WorkDetails';

const MainPage = ({ selectedDetails }: { selectedDetails: string }) => {
  const renderDetailsComponent = () => {
    switch (selectedDetails) {
      case 'personal':
        return <PersonalDetails />;
      case 'education':
        return <EducationDetails />;
      case 'work':
        return <WorkDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="col-span-4 mx-7 mt-[100px]">{renderDetailsComponent()}</div>
  );
};

export default MainPage;
