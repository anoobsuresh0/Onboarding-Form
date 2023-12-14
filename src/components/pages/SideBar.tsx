// import React from 'react'

import flagmanConnectLogo from "../../assets/Flagman_Connect_Logo.svg"



const SideBar = () => {
  return (
    <div className="m-4 bg-blue-800 h-screen" >
          <img
        src={flagmanConnectLogo}
        alt="logo"
        className="w-[200px] mb-3 filter brightness-0 dark:invert  "
      />



    </div>
  )
}

export default SideBar