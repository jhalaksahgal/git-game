"use client";
import { RxTriangleLeft } from "react-icons/rx";
import { IoIosGitNetwork } from "react-icons/io";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FaCircleCheck } from "react-icons/fa6";
import axios from "axios";
import { MdError } from "react-icons/md";
import Markdown from "react-markdown";

function CheckLoader() {
  return (
    <div className="dot-spinner">
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
    </div>
  );
}

const middleCircle = (color) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 84 84"
      fill="none"
    >
      <g filter="url(#filter0_f_71_213)">
        <circle cx="42" cy="42" r="20" fill={color} />
      </g>
      <circle cx="42.2895" cy="44.2895" r="12.2544" fill={color} />
      <defs>
        <filter
          id="filter0_f_71_213"
          x="0.701754"
          y="0.701754"
          width="82.5965"
          height="82.5965"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="9.64912"
            result="effect1_foregroundBlur_71_213"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default function CheckPointBox({ id, title, content, state, url }) {
  // const [status, setStatus] = useState(state);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [error, setError] = useState("");
  const [isMarked, setIsMarked] = useState(false);
  useEffect(() => {
    if (state == "Completed") {
      setColor("#00C0B6");
    } else if (state == "Waiting") {
      setColor("#FF995E");
    }
    console.log(color);
  }, [state]);

  console.log(state);

  const markCompleteHandler = async () => {
    setIsMarked(() => !isMarked);
    localStorage.setItem(`${id}_isMarked`, !isMarked);
    setError("");
  };

  const checkProgressHandler = async () => {
    setError("");
    setLoading(true);
    try {
      await axios
        .get(url, {
          params: {
            user: localStorage.getItem("user"),
            owner: process.env.OWNER,
            repo: process.env.REPO,
          },
        })
        .then((res) => {});
    } catch (error) {
      console.log(error);
      setError("Error Sending a request to the server");
    }
    // await axios
  };
  return (
    <div className="h-[400px]  w-full p-3 px-10">
      <div className="topbox  grid grid-cols-12 place-items-center">
        <div className="h-[35px] border-2 bg-transparent w-[35px] rounded-full "></div>
        <div
          className={clsx("statusText text-3xl w-1/7 col-span-2 font-bold", {
            "text-[#00c0b6]": state === "Completed",
            "text-[#ff995e]": state === "Waiting",
          })}
        >
          {state}
        </div>

        <div
          className={clsx("leftLine h-[2px] col-span-2  w-full flex ", {
            "bg-[#00c0b6]": state === "Completed",
            "bg-[#ff995e]": state === "Waiting",
            "bg-white": state == "Incomplete",
          })}
        ></div>
        {/* <div className="middleCircle h-[20px]  bg-transparent w-[20px] rounded-full bg-[#00C0B6] shadowComplete "></div> */}
        {middleCircle(color)}
        <div className="rightLine h-0 border-t  border-dashed col-span-3 w-full"></div>

        <div className="ml-[-15px] ">
          <RxTriangleLeft />
        </div>
      </div>
      <div className="bottomBox  h-[320px]  grid grid-cols-12 place-items-center">
        <div
          className={clsx("middleLine w-[1.5px] h-[305px] col-start-6", {
            "bg-[#00c0b6]": state === "Completed",
            "bg-[#ff995e]": state === "Waiting",
            "bg-white": state == "Incomplete",
          })}
        ></div>
        <div className="TheBox col-start-7 col-end-13 h-full p-4 w-full flex flex-col">
          <div className="title text-3xl font-bold">{title}</div>

          <div className="instructionCard  ">
            <div className="bg-white w-full my-2  rounded-lg">
              <div className="cardHeading  flex p-3 gap-1 py-3 shadow-2xl">
                <div className="instructionLogo text-black font-bold flex gap-3 items-center ">
                  <IoIosGitNetwork />
                  <div className="">Instructions</div>
                </div>
              </div>
              <div className="cardContent text-black px-6 bg-[#E7E7E7] h-[200px]  overflow-scroll overflow-x-hidden rounded-b-xl">
                <div className="cardtext py-4">
                  <Markdown>{content}</Markdown>
                </div>
                <div className="bottom flex gap-4 items-center">
                  {url && (
                    <button
                      className="bg-[#038B40] text-white hover:bg-[#106b39] my-4 px-4 py-2 rounded-lg disabled:opacity-50"
                      onClick={checkProgressHandler}
                      disabled={state === "Completed" || loading}
                    >
                      Check Progress
                    </button>
                  )}
                  {!url && (
                    <button
                      className={clsx(
                        "bg-[#038B40] text-white hover:bg-[#106b39] my-4 px-4 py-2 rounded-lg disabled:opacity-50",
                        {
                          "bg-[#038B40]": isMarked,
                          "bg-neutral-400": !isMarked,
                        }
                      )}
                      onClick={markCompleteHandler}
                      disabled={state === "Completed" || loading}
                    >
                      Mark as Completed
                    </button>
                  )}
                  {loading && <CheckLoader />}
                  {state === "Completed" ||
                    (isMarked && <FaCircleCheck className="text-2xl" />)}
                  {error && state === "Waiting" && (
                    <MdError className="text-3xl " />
                  )}
                </div>
                <div className="errorLine text-red-500 font-semibold text-sm px-2 pb-4">
                  {error}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
