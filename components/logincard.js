"use client";
import { useState } from "react";

export default function LoginCard() {
  const [errorMessage, setErrorMessage] = useState("This is an error message");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [realName, setRealName] = useState("");

  const handleProceed = () => {
    if (userName === "" || email === "" || realName === "") {
      setErrorMessage("Please fill all the fields");
    } else if (!email.includes("@iiitkottayam.ac.in")) {
      setErrorMessage("Please enter a valid IIIT Kottayam email");
    } else if (userName.includes(" ")) {
      setErrorMessage("Username should not contain spaces");
    } else {
      setErrorMessage("Proceeding");
      // checking if the user exist
    }
    console.log("Called");
  };
  return (
    /* From Uiverse.io by adamgiebl */
    <div className=" w-[450px] h-[500px] my-4 card">
      <div className="Heading text-xl  font-bold text-center py-5 my-2">
        Login with your Github UserName
      </div>
      <div className="inputField flex flex-col items-center justify-center gap-5  mx-5">
        <div className="input1 w-full px-6">
          <div className="label text-sm font-bold w-full">Github UserName</div>
          <input
            type="text"
            placeholder="Ivide thanne"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-[1.5px] border-gray-500 p-2  rounded-xl my-2 w-full  bg-transparent "
          />
        </div>

        <div className="input1 w-full px-6 ">
          <div className="label text-sm font-bold w-full">College Email</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="College Email id"
            className="border-[1.5px] border-gray-500 p-2  rounded-xl my-2 w-full bg-transparent"
          />
        </div>
        <div className="input1 w-full px-6">
          <div className="label text-sm font-bold w-full">Your Real Name</div>
          <input
            type="text"
            value={realName}
            onChange={(e) => setRealName(e.target.value)}
            placeholder="Kimi no Na wa"
            className="border-[1.5px] border-gray-500 p-2  rounded-xl my-2 w-full bg-transparent"
          />
        </div>
        <button
          className="button w-3 hover:bg-blue-600"
          onClick={handleProceed}
        >
          Proceed
        </button>
        <div className="ErrorText text-sm text-red-500 font-light">
          {errorMessage}
        </div>
      </div>
    </div>
  );
}
