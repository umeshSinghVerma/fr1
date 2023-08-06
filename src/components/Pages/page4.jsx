import React from "react";
import Table1 from "../home/Table1";
import DataStats from "../home/DataStats";
import { Connections } from "../home/Connections";
import Link from "next/link";
import Table2 from "../home/Table2";
import PaginationComp from "../Elements/PaginationComp";
import Post from "../home/Post";
import MyForm from "../home/MyForm";
import MyForm2 from "../home/MyForm2";

export default function Page4() {
    const currentComp=null;
    return (
        <div className="flex flex-col w-full p-4">
            <div className='flex flex-col '>
                <div className='flex flex-col sm:flex-row mt-8 sm:mt-0 items-center w-full justify-between border-b-2 border-gray border-solid'>
                    <h1 className='text-black font-bold text-xl mb-2'>
                        הוספת אירוע חדש
                    </h1>
                    <div className='flex items-center justify-center text-xs mb-2 ml-4'>
                        <div className={`flex items-center justify-center p-2 rounded-t-lg gap-2 ${currentComp == 1 ? 'bg-gray-200' : 'bg-gray-50'}`}>
                            {/* <p className=' rounded-[50%] w-4 flex justify-center items-center h-4 text-white bg-[#D15292]' style={{ fontSize: '10px' }}>1</p> */}
                            <p>פרטי האירוע</p>
                        </div>
                        <div className={` rounded-t-lg flex items-center justify-center p-2 gap-2 ${currentComp == 2 ? 'bg-gray-200' : 'bg-gray-50'}`}>
                            {/* <p className=' rounded-[50%] w-4 flex justify-center items-center h-4 text-white bg-[#D15292]' style={{ fontSize: '10px' }}>2</p> */}
                            <p>פרטי החוגגים</p>
                        </div>
                    </div>
                    <div></div>

                </div>
            </div>
            <div className="pt-2">
                <MyForm2 />
            </div>
        </div>
    );
}
