import flagmanConnectLogo from "../../assets/Flagman_Connect_Logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store/store";
import { setDetails } from "../../features/reducers/detailsSlice";


const SideBar = () => {

  const dispatch = useDispatch();
  const selectedDetails = useSelector((state:RootState )=> state.details.selectedDetails )

  const handleButtonClick = (detailsType: string) => {
    dispatch(setDetails(detailsType));
  };


  return (
    <div className="flex flex-col m-4 h-screen">
      <img
        src={flagmanConnectLogo}
        alt="logo"
        className="w-[200px] mb-3 filter brightness-0 dark:invert"
      />

      <div className="flex justify-center h-screen">
        <ul>
          
            <button
              className={`side-options ${
                selectedDetails === "personal" ? "selected" : ""
              }`}
              onClick={() => handleButtonClick("personal")}
            >
              <PersonIcon className="side-icon" style={{ fontSize: 40 }} />
              <div>
                <h3>Personal details</h3>
                <h4>Personal details of the user</h4>
              </div>
            </button>
          

          
            <button
              className={`side-options ${
                selectedDetails === "education" ? "selected" : ""}`}
              onClick={() => handleButtonClick("education")}
            >
              {" "}
              <SchoolIcon className="side-icon" style={{ fontSize: 40 }} />
              <div>
                <h3>Educational details</h3>
                <h4>User educational details</h4>
              </div>
            </button>
          

          
          <button
              className={`side-options ${
                selectedDetails === "work" ? "selected" : ""}`}
              onClick={() => handleButtonClick("work")}
            >              
            <WorkIcon className="side-icon" style={{ fontSize: 40 }} />
              <div>
                <h3>Company details</h3>
                <h4>Previous Experience</h4>
              </div>
            </button>
          
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
