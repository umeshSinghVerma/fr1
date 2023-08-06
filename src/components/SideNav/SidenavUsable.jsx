'use client'
import React, { useState } from 'react'
import SideNav from './SideNav';
import { SidenavContent } from './SidenavContent';

export default function SidenavUsable() {
    const [sidenavOpen, setSidenavOpen] = useState(false);

    const handleSidenavToggle = () => {
        setSidenavOpen(!sidenavOpen);
    };

    const handleSidenavClose = () => {
        setSidenavOpen(false);
    };
    return (
        <div className="flex">
            <div onClick={handleSidenavToggle} className="cursor-pointer relative flex-none w-8 h-8 bg-white border border-gray text-white rounded-lg flex items-center justify-center">
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
          </div>
            <SideNav isOpen={sidenavOpen} onClose={handleSidenavClose}>
                <SidenavContent />
            </SideNav>

        </div>
    )
}
