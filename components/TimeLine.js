"use client";
import CheckPointBox from "./CheckPointBox";

const checkPoints = {
  1: {
    title: "Make a Git Repo",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corporis quidem laudantium quisquam molestias culpa sapiente iure mollitia ipsam quas cupiditate aliquid odio excepturi officia fuga accusantium, incidunt modi veniam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corporis quidem laudantium quisquam molestias culpa sapiente iure mollitia ipsam quas cupiditate aliquid odio excepturi officia fuga accusantium, incidunt modi veniam?",
    state: "Complete",
  },
  2: {
    title: "Some other question",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corporis quidem laudantium quisquam molestias culpa sapiente iure mollitia ipsam quas cupiditate aliquid odio excepturi officia fuga accusantium, incidunt modi veniam?",
    state: "Waiting",
  },
  3: {
    title: "Some other question",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corporis quidem laudantium quisquam molestias culpa sapiente iure mollitia ipsam quas cupiditate aliquid odio excepturi officia fuga accusantium, incidunt modi veniam?",
    state: "Incomplete",
  },
  4: {
    title: "Some other question",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corporis quidem laudantium quisquam molestias culpa sapiente iure mollitia ipsam quas cupiditate aliquid odio excepturi officia fuga accusantium, incidunt modi veniam?",
    state: "Incomplete",
  },
  5: {
    title: "Some other question",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corporis quidem laudantium quisquam molestias culpa sapiente iure mollitia ipsam quas cupiditate aliquid odio excepturi officia fuga accusantium, incidunt modi veniam?",
    state: "Incomplete",
  },
};

export default function TimeLine() {
  const user = localStorage.getItem("user");
  const realName = localStorage.getItem("realName");
  return (
    <div className="background">
      <div className="text-4xl text-center font-bold my-7 ">
        Welcome {realName}
      </div>
      <div className="text-xl text-center font-bold my-7 text-gray-300">
        Complete all the checkpoints for the certificate
      </div>
      <div className="flex flex-col justify-center gap-3 items-center my-10">
        {Object.keys(checkPoints).map((key, index) => {
          return (
            <CheckPointBox
              key={index}
              id={index}
              title={checkPoints[key].title}
              content={checkPoints[key].content}
              state={checkPoints[key].state}
            />
          );
        })}
      </div>
    </div>
  );
}
