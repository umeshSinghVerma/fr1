'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import DataStats from '@/components/home/DataStats';
import { Connections } from '@/components/home/Connections';
import Table1 from '@/components/home/Table1';
import Table4 from '../home/Table4';
import Table3 from '../home/Table3';

export default function Page6() {
    return (
        <div className='flex flex-col w-full p-4  gap-y-16 max-h-[540px] min-[1420px]:max-h-[580px] overflow-y-auto'>
            <div className="flex text-sm flex-wrap gap-y-2 gap-x-8 px-4 md:px-8">
                <div className="flex min-[450px]:py-0 gap-x-2 rounded-2xl items-center px-4 md:px-8 ">
                    <select className=" bg-transparent border border-gray outline-none rounded-lg p-2">
                        <option>חיפוש חופשי</option>
                        <option>חיפוש חופשי</option>
                        <option>חיפוש חופשי</option>
                    </select>
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
                        className="w-full py-1 min-[450px]:py-2 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none focus:bg-white focus:border-indigo-600"
                    />
                </div>
                <div className="flex items-center gap-x-4 px-4 py-1 justify-end rounded-2xl border">
                    <span className="text-[#8f8f8f]">معرفة</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                    >
                        <path
                            d="M13.75 1.875H1.25L6.25 7.7875V11.875L8.75 13.125V7.7875L13.75 1.875Z"
                            stroke="black"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <div className="flex items-center gap-x-4 px-4 py-1 justify-end rounded-2xl border">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M23 4V10H17"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M1 20V14H7"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3.51 9.00008C4.01717 7.56686 4.87913 6.28548 6.01547 5.27549C7.1518 4.26551 8.52547 3.55984 10.0083 3.22433C11.4911 2.88883 13.0348 2.93442 14.4952 3.35685C15.9556 3.77928 17.2853 4.56479 18.36 5.64008L23 10.0001M1 14.0001L5.64 18.3601C6.71475 19.4354 8.04437 20.2209 9.50481 20.6433C10.9652 21.0657 12.5089 21.1113 13.9917 20.7758C15.4745 20.4403 16.8482 19.7346 17.9845 18.7247C19.1209 17.7147 19.9828 16.4333 20.49 15.0001"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span className="text-[#8f8f8f]">סינכרון עם פייסבוק</span>
                </div>
                <div className="flex items-center gap-x-4 px-4 py-1 justify-end rounded-2xl border">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 25 24"
                        fill="none"
                    >
                        <path
                            d="M18.6255 8C20.2823 8 21.6255 6.65685 21.6255 5C21.6255 3.34315 20.2823 2 18.6255 2C16.9686 2 15.6255 3.34315 15.6255 5C15.6255 6.65685 16.9686 8 18.6255 8Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M6.62549 15C8.28234 15 9.62549 13.6569 9.62549 12C9.62549 10.3431 8.28234 9 6.62549 9C4.96863 9 3.62549 10.3431 3.62549 12C3.62549 13.6569 4.96863 15 6.62549 15Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M18.6255 22C20.2823 22 21.6255 20.6569 21.6255 19C21.6255 17.3431 20.2823 16 18.6255 16C16.9686 16 15.6255 17.3431 15.6255 19C15.6255 20.6569 16.9686 22 18.6255 22Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.21533 13.51L16.0453 17.49"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M16.0353 6.51001L9.21533 10.49"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span className="text-[#8f8f8f]">שתף</span>
                </div>
            </div>
            <div className='ml-auto'>
                <DataStats />
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center'>
                <Table3 />
            </div>
        </div>
    )
}
