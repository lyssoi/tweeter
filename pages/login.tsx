import React from "react";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();
  return (
    <>
      <div className="mx-20">
        <div className=" py-2 px-4 font-semibold text-white bg-green-500 hover:bg-green-700">
          <h1 className="">twitter</h1>
        </div>
        <div className=" bg-green-200 p-10 flex flex-col focus:outline-none">
          <input className="mb-3 focus:outline-none" placeholder="id"></input>
          <input className="mb-3 focus:outline-none" placeholder="pw"></input>
          <button
            className="p-3 bg-green-500 hover:bg-green-700 text-white"
            onClick={() => router.push("./tweet/0")}
          >
            {" "}
            login
          </button>
        </div>
      </div>
    </>
  );
}
