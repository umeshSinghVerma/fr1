'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Popup from '@/components/Popup';
import DateSelector from '@/components/Elements/DateSelector';
import MultipleSelector from '@/components/Elements/MultipleSelector';

export default function Page() {
    const router = useRouter();
    return (
        <div>
            <Popup>
                <div className='w-full h-96 rounded-lg bg-white text-black relative p-8'>
                    <button
                        onClick={() => router.back()}
                        className='text-black absolute top-2 left-2'
                    >
                        ✖
                    </button>
                    <div className='flex flex-col'>
                        <div className='flex items-center w-full justify-between border-b-2 border-gray border-solid p-5'>
                            <h1 className='text-black font-bold text-xl'>
                                הוספת אירוע חדש
                            </h1>
                            <div className='flex gap-5'>
                                <div className='border-black border p-2'>
                                    1פרטי החוגגים
                                </div>
                                <div className='border-black border p-2'>
                                    2פרטי האירוע
                                </div>
                            </div>
                            <div></div>

                        </div>
                    </div>
                    <div className='flex text-sm gap-9 p-8'>
                        <div className='w-full flex flex-col h-52'>
                            <p className='mb-2'>סוג האירוע *</p>
                            <DateSelector />
                        </div>
                        <div className='w-full flex flex-col'>
                            <p className='mb-2'>תאריך האירוע *</p>
                            <div>
                            <MultipleSelector/>
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <p className='mb-2'>מקום האירוע *</p>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

