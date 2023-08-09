'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import DataStats from '@/components/home/DataStats';
import { Connections } from '@/components/home/Connections';
import Table1 from '@/components/home/Table1';
import Table4 from '../home/Table4';

export default function Page1(props) {
    const currentComp = props.currentComp;
    return (
        <div className='flex flex-col w-full p-4  gap-y-8'>
            <div className="flex min-[450px]:py-0 gap-x-2 rounded-2xl items-center px-4 md:px-8 ">
                <select className=" bg-transparent border border-gray outline-none rounded-lg p-1">
                    <option>חיפוש חופשי</option>
                    <option>חיפוש חופשי</option>
                    <option>חיפוש חופשי</option>
                </select>
            </div>
            <div className='w-full flex items-center justify-center'>
                <img src="/TopbannerImage.png" alt="" />
            </div>
            <div className='flex-1'>
                <DataStats />
            </div>
            <div className='max-w-full flex flex-wrap gap-8'>
                <div className='mx-auto'>
                    <Connections />
                </div>
                <div className='max-w-full flex-grow overflow-auto'>
                    <div className='flex flex-col  justify-center'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-4'>
                                <span>אהתראותחרונות</span>
                                {currentComp == 2 &&
                                    <div className='px-3 rounded-md flex items-center bg-gray-100 text-gray-500'>
                                        <div className="flex items-center gap-x-4 justify-end">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#8f8f8f"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <circle cx="18" cy="5" r="3"></circle>
                                                <circle cx="6" cy="12" r="3"></circle>
                                                <circle cx="18" cy="19" r="3"></circle>
                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                            </svg>
                                            <span className="text-[#8f8f8f]">معرفة</span>

                                        </div>
                                    </div>}
                            </div>
                            <div className='flex items-center justify-center text-xs'>
                                <Link replace href='/home/table/1' className={`flex items-center justify-center p-2 rounded-t-lg gap-2 ${currentComp == 1 ? 'bg-gray-200' : 'bg-gray-50'}`}>
                                    <p className=' rounded-[50%] w-4 flex justify-center items-center h-4 text-white bg-[#D15292]' style={{ fontSize: '10px' }}>1</p>
                                    <p>פרטי האירוע</p>
                                </Link>
                                <Link replace href='/home/table/2' className={` rounded-t-lg flex items-center justify-center p-2 gap-2 ${currentComp == 2 ? 'bg-gray-200' : 'bg-gray-50'}`}>
                                    <p className=' rounded-[50%] w-4 flex justify-center items-center h-4 text-white bg-[#D15292]' style={{ fontSize: '10px' }}>2</p>
                                    <p>פרטי החוגגים</p>
                                </Link>
                            </div>
                        </div>
                        <div>
                            {
                                currentComp == 1 ? <Table1 /> : <Table4 />
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
