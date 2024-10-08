"use client";
import { RxTriangleLeft } from "react-icons/rx";
import { IoIosGitNetwork } from "react-icons/io";
import { useEffect, useState } from "react";
import clsx from "clsx";

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

export default function CheckPointBox({ id, title, content, state }) {
  // const [status, setStatus] = useState(state);
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    if (state == "Complete") {
      setColor("#00C0B6");
    } else if (state == "Waiting") {
      setColor("#FF995E");
    }
    console.log(color);
  }, [state]);
  console.log(state);
  const checkProgressHandler = () => {};
  return (
    <div className="h-[400px]  w-full p-3 px-10">
      <div className="topbox  grid grid-cols-12 place-items-center">
        <div className="h-[35px] border-2 bg-transparent w-[35px] rounded-full "></div>
        <div
          className={clsx("statusText text-3xl w-1/7 col-span-2 ", {
            "text-[#00c0b6]": state === "Complete",
            "text-[#ff995e]": state === "Waiting",
          })}
        >
          {state}
        </div>

        <div
          className={clsx("leftLine h-[2px] col-span-2  w-full flex ", {
            "bg-[#00c0b6]": state === "Complete",
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
            "bg-[#00c0b6]": state === "Complete",
            "bg-[#ff995e]": state === "Waiting",
            "bg-white": state == "Incomplete",
          })}
        ></div>
        <div className="TheBox col-start-7 col-end-13 h-full p-4 w-full flex flex-col">
          <div className="title text-3xl font-bold">{title}</div>

          <div className="instructionCard  ">
            <div class="bg-white w-full my-2  rounded-lg">
              <div class="flex p-3 gap-1 py-3">
                <div className="instructionLogo text-black font-bold flex gap-3 items-center">
                  <IoIosGitNetwork />
                  <div className="">Instructions</div>
                </div>
              </div>
              <div class="cardContent text-black px-6 bg-[#E7E7E7] h-[200px]  overflow-scroll">
                <div className="cardtext py-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis eligendi maiores itaque necessitatibus odit esse libero
                  expedita reprehenderit hic officiis odio numquam soluta, iste
                  minima error ipsa quis suscipit placeat nisi aliquam. Totam,
                  quasi. Temporibus cumque sit molestiae. Mollitia, soluta
                  obcaecati! Sit Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sapiente eius officia obcaecati officiis
                  expedita repellat a omnis enim. Tenetur temporibus illo sunt,
                  cumque corporis et nisi dolores perferendis vitae nemo
                  voluptatibus unde aliquid suscipit ut vel. Veniam adipisci
                  expedita maxime obcaecati nihil hic placeat debitis excepturi
                  dolor? Aliquid autem repellat consequatur ipsum fuga voluptas!
                  Perspiciatis, sequi asperiores repudiandae quidem inventore
                  labore? Esse, harum consectetur sed commodi error, rem
                  deserunt reprehenderit deleniti dicta accusantium, pariatur
                  tempore! Asperiores, labore tempora quibusdam recusandae,
                  dignissimos incidunt debitis atque in, sunt quas est magni
                  quisquam molestias provident. Ea laboriosam unde eaque
                  consequatur eveniet corrupti laborum.
                </div>
                <div className="bottom flex gap-4 items-center">
                  <button
                    className="bg-neutral-600 text-white hover:bg-neutral-500 my-4 px-4 py-2 rounded-lg"
                    onClick={checkProgressHandler}
                  >
                    Check Progress
                  </button>
                  <div className="circle w-2 bg-blue-500 h-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
