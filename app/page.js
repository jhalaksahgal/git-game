import LoginCard from "@/components/logincard";
import Image from "next/image";
import logo from "../images/gdgLogo.png";
export default function Home() {
  return (
    <div className="container h-screen background ">
      <div className="w-full flex justify-center">
        <div className="logo w-[15%] h-[20%] my-2">
          <Image src={logo} alt="Unable to load the logo" />
        </div>
      </div>

      <div className="mainBody flex item-center justify-center w-full h-[80%]">
        <div className="sessioLogo w-1/2 flex items-center justify-center ">
          <Image src={logo} alt="Unable to load the logo" />
        </div>
        <div className="rightBod w-1/2 flex items-center justify-center">
          <LoginCard />
        </div>
      </div>
    </div>
  );
}
