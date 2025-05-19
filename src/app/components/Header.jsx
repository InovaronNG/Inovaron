import React from "react";
import navtop from "../navigation/navtop";
import Link from "next/link";
import { useState } from "react";

const Header = ({isActive, setIsActive}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setIsActive(!isActive);
      };
  return (
    <section className="w-full px-5 pb-1 pt-1 max-md:justify-between flex items-center shadow-md gap-12">
        {/* logo............................... */}
      <div className="logo">
        <img src="/logo.png" className="w-[100px]" alt="Logo" />
      </div>

      {/* desktop menu...................... */}
      <div className="nav hidden md:flex gap-8 ">
        {navtop.map((index) => (
          <Link
            key={index}
            href={index.href}
            className="hover:text-blue-900 transition-all duration-300"
          >
            <div className="nav-item">{index.name}</div>
          </Link>
        ))}
      </div>
      <div className="menu md:hidden flex items-center " onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        
      </div>

      {/* //mobile menu //////////...........*/}
      {isActive && (
        <div className="absolute right-0 shadow-lg w-60 h-[100vh] transition translate-x-[-100] ease-in-out duration-2000 bg-white top-2">
            <div className="flex justify-end px-4 pt-9">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            onClick={handleToggle}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
            </div>
            <div className=" flex flex-col pt-18 px-4 gap-8">
                {navtop.map((ikr) => (
                <Link
                    key={ikr}
                    href={ikr.href}
                    className="hover:text-blue-900 transition-all border-b-1 border-b-gray-500 duration-300"
                >
                    <div className="nav-item">{ikr.name}</div>
                </Link>
                ))}
            </div>
        </div>
      )}
    </section>
  );
};

export default Header;
