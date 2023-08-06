"use client";
import React, { useState } from "react";

const PaginationComp = () => {
  const [pages, setPages] = useState(["1", "2", "3", "4", "5"]);
  const [currentPage, setCurrentPage] = useState("1");
  return (
    <div dir="ltr" className="max-w-screen-xl mx-auto mt-6 px-4 text-gray-600 md:px-8">
      <div
        className=" items-center justify-between flex"
        aria-label="Pagination"
      >
        <a
          href="javascript:void(0)"
          className="hover:text-indigo-600 flex items-center gap-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a0a0a0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </a>
        <ul className="flex items-center gap-1">
          {pages.map((item, idx) => (
            <li key={item} className="text-sm">
                <a
                  href="javascript:void(0)"
                  aria-current={currentPage == item ? "page" : false}
                  className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${
                    currentPage == item
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : ""
                  }`}
                >
                  {item}
                </a>
            </li>
          ))}
        </ul>
        <a
          href="javascript:void(0)"
          className="hover:text-indigo-600 flex items-center gap-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a0a0a0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PaginationComp;
