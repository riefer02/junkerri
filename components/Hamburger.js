import React from "react";
import { useContext } from "react";
import NavigationContext from "../contexts/NavigationContext";

export default function Hamburger() {
  const { isActive, setIsActive } = useContext(NavigationContext);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button className={`relative block sm:hidden`} onClick={handleToggle}>
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ${
            isActive ? "ring-4" : ""
          } ring-opacity-30 duration-200 shadow-md`}
        >
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
          >
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isActive ? "translate-x-10" : ""
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                isActive ? "translate-x-10" : ""
              } delay-75`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isActive ? "translate-x-10" : ""
              } delay-150`}
            ></div>

            <div
              className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
                isActive ? "translate-x-0 w-12" : ""
              } flex w-0 `}
            >
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                  isActive ? "rotate-45" : ""
                }`}
              ></div>
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                  isActive ? "-rotate-45" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
