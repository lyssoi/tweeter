import React from "react";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1>Hello</h1>
      <button
        className="p-3 m-3 bg-yellow-200"
        onClick={() => router.push("/login")}
      >
        login
      </button>
      <button
        className="p-3 m-3 bg-cyan-200"
        onClick={() => router.push("./createAccount")}
      >
        createAccount
      </button>
    </div>
  );
}
