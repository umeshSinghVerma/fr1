import React from "react";
import Table1 from "../home/Table1";
import DataStats from "../home/DataStats";
import { Connections } from "../home/Connections";
import Link from "next/link";
import Table2 from "../home/Table2";
import PaginationComp from "../Elements/PaginationComp";

export default function Page2() {
  return (
    <div className="flex flex-col w-full p-4 gap-y-8">
        <span className="px-4 md:px-8">
        צהריים טובים, מתן
        </span>
      <div className="flex flex-col min-[450px]:flex-row gap-y-2 gap-x-8 px-4 md:px-8">
        <div className="flex py-1 min-[450px]:py-0 gap-x-2 border border-gray rounded-2xl items-center px-2">
          <div>
            <select className=" bg-transparent  outline-none rounded-lg">
              <option>חיפוש חופשי</option>
              <option>חיפוש חופשי</option>
              <option>חיפוש חופשי</option>
            </select>
          </div>
        </div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="חיפוש חופשי"
            className="w-full py-1 min-[450px]:py-2 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </div>
      <div className="flex flex-col">
          <Table2 />
          <PaginationComp />
      </div>
    </div>
  );
}
