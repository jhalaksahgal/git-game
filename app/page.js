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

  return (
    <div className="h-screen background ">
      <div className="w-full flex justify-center">
        <div className="logo w-[15%] h-[20%] my-2">
          <Image src={gdgLogo} alt="Unable to load the logo" />
        </div>
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
