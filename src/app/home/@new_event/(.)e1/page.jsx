'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Popup from '@/components/Popup';
import DateSelector from '@/components/Elements/DateSelector';
import MultipleSelector from '@/components/Elements/MultipleSelector';
import NormalTextBox from '@/components/Elements/NormalTextBox';
import Link from 'next/link';

export default function Page() {
    const router = useRouter();
    return (
        <div>
            <Popup>
                <div className='w-full rounded-lg bg-white text-black relative p-8'>
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
                                <div className='border-black border-l-0 border flex p-2 gap-2'>
                                    <p className='border-black text-sm border-solid border rounded-full w-6 flex justify-center items-center'>1</p>
                                    <p>פרטי האירוע</p>
                                </div>
                                <div className='border-black border flex p-2 gap-2'>
                                    <p className='border-black text-sm border-solid border rounded-full w-6 flex justify-center items-center'>2</p>
                                    <p>פרטי החוגגים</p>
                                </div>
                            </div>
                            <div></div>

                        </div>
                    </div>
                    <div className='flex-col flex md:flex-row h-52 text-sm gap-9 p-8 '>
                        <div className=' flex flex-col'>
                            <p className='mb-2'>סוג האירוע *</p>
                            <MultipleSelector text={'בחר מרשימה'} />
                        </div>
                        <div className=' flex flex-col'>
                            <p className='mb-2'>תאריך האירוע *</p>
                            <div>
                                <DateSelector />
                            </div>
                        </div>
                        <div className=' flex flex-col'>
                            <p className='mb-2'>מקום האירוע *</p>
                            <div>
                                <NormalTextBox />
                            </div>
                        </div>
                    </div>
                    <div className='border-t-2 border-solid border-gray flex justify-between items-center pt-8'>

                        <div className='text-xs'>
                            <p className='font-bold'>העלאה מרוכזת</p>
                            <p className='font-bold' style={{ fontSize: "10px" }}>אין לך זמן להעלות אירוע-אירוע, אנחנו מבינים אותך</p>
                            <p style={{ fontSize: "10px" }}>העלה קובץ מסודר ואנחנו נעשה בשבילך את העבודה <Link href='/' className='text-blue-800 underline'>הורד קובץ לדוגמא </Link></p>
                        </div>

                        <div className='flex justify-end gap-4 items-center' style={{ flexGrow: 4 }}>
                            <div className='rounded-md text-white gap-4 items-center flex text-xs p-3' style={{ backgroundColor: '#00AC47' }} >
                                <p>
                                    העלאת קובץ אקסל
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M3.72985 0.327999V5.44796H0.120117V18.6138H3.72985V22.2708H22.4985V0.327999H3.72985ZM3.72985 9.10496H5.64336L6.61633 10.5679L7.58931 9.10496H9.50282L7.58931 12.0309L9.50282 14.9568H7.58931L6.61633 13.4939L5.64336 14.9568H3.72985L5.64336 12.0309L3.72985 9.10496ZM21.0569 20.8079H5.1739V18.6138H13.1158V14.2249H18.8912V12.762H13.1158V11.299H18.8912V9.83603H13.1158V8.37389H18.8912V6.91093H13.1158V5.44796H5.1739V1.79096H21.0569V20.8079Z" fill="white" />
                                </svg>

                            </div>
                            <div className='rounded-md  bg-black text-white text-xs p-4' >
                                הוספת אירוע
                            </div>

                        </div>

                    </div>
                </div>
            </Popup>
        </div>
    )
}

