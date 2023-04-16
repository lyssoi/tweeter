import React from "react";

export default function createAccount() {
  return (
    <>
      <div className="mx-20">
        <div className=" py-2 px-4 font-semibold text-white bg-red-500 hover:bg-red-700">
          <h1 className="">twitter</h1>
        </div>
        <div className=" bg-red-200 p-10 flex flex-col focus:outline-none text-white">
          <h1>가입하시겠습니까?</h1>
          <input className="mb-3 focus:outline-none" placeholder="id"></input>
          <input className="mb-3 focus:outline-none" placeholder="pw"></input>
          <button className="p-3 bg-red-500 hover:bg-red-700 text-white">
            {" "}
            submit
          </button>
        </div>
      </div>
    </>
  );
}
