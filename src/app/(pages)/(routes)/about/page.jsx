"use client";

import React from "react";
import about from "../../navigation/about";

const page = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center h-[70vh]  bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/background2.jpg')" }}
      >
        <div className="flex items-center bg-black/30 w-screen h-full justify-center px-4">
          <div className="flex flex-col ">
            <h1 className="text-3xl font-bold text-white text-wrap md:w-130">
              {" "}
              Our mission is to meet peoples needs in ways they never imagined
              possible.
            </h1>
            <p className="font-semibold pt-2 text-white">
              Tailored digital Solutions for business ready to grow
            </p>
          </div>
        </div>
      </div>
      {about.map((items) => (
        <div className="flex flex-col justify-center items-center px-2 rounded-lg shadow-lg pb-5">
          <div className="text-3xl  font-bold text-center pt-10 ">
            {items.title}
          </div>
          <div className="border-b-2 border-b-blue-700 w-40 pt-3" />
        </div>
      ))}
    </div>
  );
};

export default page;
