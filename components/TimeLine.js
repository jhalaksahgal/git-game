"use client";
import { useEffect, useState } from "react";
import CheckPointBox from "./CheckPointBox";
import Markdown from "react-markdown";
import axios from "axios";

export default function TimeLine() {
  const user = localStorage.getItem("user");
  const realName = localStorage.getItem("realName");
  const [checkPoints, setCheckPoints] = useState({});
  useEffect(() => {
    async function fetchMileStones() {
      try {
        await axios
          .get("/api/v1/getMilestones", {
            params: {
              task: 0,
              user: localStorage.getItem("user"),
            },
          })
          .then((res) => {
            console.log(res.data.data);
            setCheckPoints(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
    fetchMileStones();
  }, []);

  return (
    <div className="background">
      <div className="text-4xl text-center font-bold my-7 ">
        Welcome {realName}
      </div>
      <div className="text-xl text-center font-bold my-7 text-gray-300">
        Complete all the checkpoints for the certificate
      </div>
      <div className="flex flex-col justify-center gap-3 items-center my-10">
        {checkPoints &&
          Object.keys(checkPoints).map((key, index) => {
            return (
              <CheckPointBox
                key={index}
                id={checkPoints[key].identifier}
                title={checkPoints[key].title}
                content={checkPoints[key].content}
                state={checkPoints[key].status}
                url={checkPoints[key].url}
              />
            );
          })}
      </div>
    </div>
  );
}
