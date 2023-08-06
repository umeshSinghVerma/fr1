import React from "react";
import SidenavUsable from "../SideNav/SidenavUsable";

const Header = () => {
  return (
    <nav className="flex justify-between text-xs min-[425px]:text-sm items-center px-2 min-[425px]:px-4 md:px-16 py-4">
      <div>
        <span className="text-gray-400 px-1">דאשבורד / </span>
        <span className="text-black px-1">כללי</span>
      </div>
      <div className="flex gap-x-3 min-[425px]:gap-x-8 items-center">
        <button
          style={{
            background:
              "linear-gradient(0deg, var(--primary-pink, #ED3C95) 0%, var(--primary-pink, #ED3C95) 100%), #4A4DE6",
          }}
          className="flex items-center gap-2 px-2 min-[425px]:px-4 py-2 text-white rounded-lg"
        >
          אירוע חדש
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_201_6522)">
              <path
                d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_201_6522">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="flex gap-x-2 min-[425px]:gap-x-4">
          <div className="relative flex-none w-8 h-8 bg-white border border-gray text-white rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="absolute -top-2 -right-2 rounded-full w-4 h-4 flex justify-center items-center bg-pink-500">
              <span className="flex-shrink-0 not-italic text-sm text-white">
                2
              </span>
            </div>
          </div>
          {/* <div className="relative flex-none w-8 h-8 bg-white border border-gray text-white rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M18.25 8.25C18.25 6.6587 17.6179 5.13258 16.4926 4.00736C15.3674 2.88214 13.8413 2.25 12.25 2.25C10.6587 2.25 9.13258 2.88214 8.00736 4.00736C6.88214 5.13258 6.25 6.6587 6.25 8.25C6.25 15.25 3.25 17.25 3.25 17.25H21.25C21.25 17.25 18.25 15.25 18.25 8.25Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.98 21.25C13.8042 21.5531 13.5519 21.8047 13.2482 21.9795C12.9446 22.1544 12.6004 22.2465 12.25 22.2465C11.8996 22.2465 11.5554 22.1544 11.2518 21.9795C10.9482 21.8047 10.6958 21.5531 10.52 21.25"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="absolute -top-2 -right-2 rounded-full w-4 h-4 flex justify-center items-center bg-pink-500">
              <span className="flex-shrink-0 not-italic text-sm text-white">
                1
              </span>
            </div>
          </div> */}
          <SidenavUsable />

        </div>
      </div>
    </nav>
  );
};

export default Header;
