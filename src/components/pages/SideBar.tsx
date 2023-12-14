import flagmanConnectLogo from "../../assets/Flagman_Connect_Logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

interface SideBarProps {
  selectedDetails: string;
  onDetailsChange: (detailsType: string) => void;
}

const SideBar = ({ selectedDetails, onDetailsChange }: SideBarProps) => {
  const handleButtonClick = (detailsType: string) => {
    onDetailsChange(detailsType);
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
          <li className="">
            <button
              className={`side-options ${
                selectedDetails === "personal" ? "selected" : ""
              }`}
              onClick={() => handleButtonClick("personal")}
            >
              <PersonIcon className="side-icon" style={{ fontSize: 40 }} />
              <div>
                <h3>Your personal details</h3>
                <h4>Personal details of the user</h4>
              </div>
            </button>
          </li>

          <li className="">
            <button
              className={`side-options ${
                selectedDetails === "education" ? "selected" : ""}`}
              onClick={() => handleButtonClick("education")}
            >
              {" "}
              <SchoolIcon className="side-icon" style={{ fontSize: 40 }} />
              <div>
                <h3>Your Educational details</h3>
                <h4>User educational details</h4>
              </div>
            </button>
          </li>

          <li className="">
          <button
              className={`side-options ${
                selectedDetails === "education" ? "selected" : ""}`}
              onClick={() => handleButtonClick("work")}
            >              
            <WorkIcon className="side-icon" style={{ fontSize: 40 }} />
              <div>
                <h3>Your company details</h3>
                <h4>Company's basic information</h4>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
