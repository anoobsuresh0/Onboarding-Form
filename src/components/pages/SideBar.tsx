// import React from 'react'

import flagmanConnectLogo from "../../assets/Flagman_Connect_Logo.svg";
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const SideBar = () => {
  return (
    <div className=" flex flex-col m-4 h-screen ">
      <img
        src={flagmanConnectLogo}
        alt="logo"
        className="w-[200px] mb-3 filter brightness-0 dark:invert  "
      />

      <div className="flex justify-center h-screen ">
        <ul>
          <li className="side-options">

            <PersonIcon className="side-icon" style={{ fontSize: 40 }} />
            <span>
              <h3>Your personal details</h3>
              <h4>Personal details of user</h4>
            </span>

          </li>
          <li className="side-options">

            <SchoolIcon className="side-icon" style={{ fontSize: 40 }} />
            <span>
              <h3>Your Educational details</h3>
              <h4>User educational details</h4>
            </span>

          </li>
          <li className="side-options">

            <WorkIcon className="side-icon" style={{ fontSize: 40 }} />
            <span>
              <h3>Your company details</h3>
              <h4>Company's basic information</h4>
            </span>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
