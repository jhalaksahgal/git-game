"use client";

import LoginCard from "@/components/LoginCard";
import Image from "next/image";
import gdgLogo from "../images/gdgLogo.png";
import sessionLogo from "../images/SessionLogo.png";
import TimeLine from "@/components/TimeLine";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [startLoader, setStartLoader] = useState(false);

  const logOut = () => {
    setLoggedIn(false);
    localStorage.clear();
  };

  return (
    <div className="h-screen background ">
      <div className=" flex justify-between  items-center ">
        <div className="logo w-[15%] h-[20%] my-2 mx-2">
          <Image src={gdgLogo} alt="Unable to load the logo" />
        </div>
        {loggedIn && (
          <div className="Logout mx-4">
            <button
              onClick={logOut}
              className="bg-transparent hover:bg-neutral-200 font-semibold hover:text-black border-[1.5px] border-neutral-200 text-white  my-4 px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Log Out
            </button>
          </div>
        )}
      </div>

      {!loggedIn && (
        <div className="mainBody flex item-center justify-evenly w-full h-[80%]">
          <div className="sessioLogo w-[40%] flex items-center justify-center ">
            <Image src={sessionLogo} alt="Unable to load the logo" />
          </div>
          <div className="rightBod w-1/2 flex items-center justify-center">
            <LoginCard setLoggedIn={setLoggedIn} />
          </div>
        </div>
      )}

      {loggedIn && <TimeLine />}
    </div>
  );
}
