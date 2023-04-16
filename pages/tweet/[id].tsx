import React from "react";

export default function tweet() {
  return (
    <>
      <div className="mx-20">
        <div className=" py-2 px-4 font-semibold text-white bg-blue-500 hover:bg-blue-700">
          <h1 className="">twitter</h1>
        </div>
        <div className=" bg-blue-200 p-10 flex flex-col focus:outline-none text-white">
          <h1>제목을 입력하세요</h1>
          <input className="mb-3 focus:outline-none text-gray-700"></input>
          <h1>내용을 입력하세요</h1>
          <textarea className="mb-3 focus:outline-none text-gray-700"></textarea>
          <button className="p-3 bg-blue-500 hover:bg-blue-700 text-white">
            {" "}
            submit
          </button>
        </div>
      </div>
    </>
  );
}
