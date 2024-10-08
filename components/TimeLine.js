"use client";
import CheckPointBox from "./CheckPointBox";

export default function TimeLine() {
  return (
    <div className="background">
      <div className="text-3xl text-center font-bold my-6">
        Complete all the checkpoints for the certificate
      </div>
      <div className="flex flex-col justify-center gap-3 items-center my-10">
        <CheckPointBox
          id={1}
          title={"Make a Git Repo"}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corporis quidem laudantium quisquam molestias culpa sapiente iure mollitia ipsam quas cupiditate aliquid odio excepturi officia fuga accusantium, incidunt modi veniam?"
          }
          state={"Complete"}
        />
        <CheckPointBox
          id={2}
          title={"Some other question"}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corporis quidem laudantium quisquam molestias culpa sapiente iure mollitia ipsam quas cupiditate aliquid odio excepturi officia fuga accusantium, incidunt modi veniam?"
          }
          state={"Waiting"}
        />
        <CheckPointBox
          id={3}
          title={"Some other question"}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et corporis quidem laudantium quisquam molestias culpa sapiente iure mollitia ipsam quas cupiditate aliquid odio excepturi officia fuga accusantium, incidunt modi veniam?"
          }
          state={"Incomplete"}
        />
      </div>
    </div>
  );
}
