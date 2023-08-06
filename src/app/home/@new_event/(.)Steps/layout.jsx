'use client'
import Popup from '@/components/Popup'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function InsideEventLayout(props) {
    const router = useRouter();
    const params = useParams();
    const [currentComp,setCurrentComp]=useState(params.comp);
    useEffect(()=>{
        setCurrentComp(params.comp);
    },[params.comp])
    return (
        <div>
            <Popup>
                <div className='w-full max-h-[80vh] overflow-hidden rounded-lg bg-white text-black relative p-8'>
                    <button
                        onClick={() => router.back()}
                        className='text-black absolute top-4 left-5'
                    >
                        ✖
                    </button>
                    <div className='flex flex-col'>
                        <div className='flex items-center w-full justify-between border-b-2 border-gray border-solid p-5'>
                            <h1 className='text-black font-bold text-xl'>
                                הוספת אירוע חדש
                            </h1>
                            <div className='flex'>
                                <Link replace href='/home/Steps/1' className={`border-black  border flex p-2 gap-2 ${currentComp==1 && 'opacity-50'}`}>
                                    <p className='border-black text-sm border-solid border rounded-full w-6 flex justify-center items-center'>1</p>
                                    <p>פרטי האירוע</p>
                                </Link>
                                <Link replace href='/home/Steps/2' className={`border-black border-r-0 border flex p-2 gap-2 ${currentComp==2 && 'opacity-50'}`}>
                                    <p className='border-black text-sm border-solid border rounded-full w-6 flex justify-center items-center'>2</p>
                                    <p>פרטי החוגגים</p>
                                </Link>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    {props.children}
                </div>
            </Popup>
        </div>
    )
}