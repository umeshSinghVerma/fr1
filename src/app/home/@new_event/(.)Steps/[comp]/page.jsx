'use client'
import DateSelector from '@/components/Elements/DateSelector'
import MultipleSelector from '@/components/Elements/MultipleSelector'
import PostModal from '@/components/home/PostModal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page({ params }) {
    const firstColumn = [
        {
            title: "Name",
            entites: [
                {
                    email: 'david@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
            ],
        },
        {
            title: "Name",
            entites: [
                {
                    email: 'david@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                }
            ],
        },
        {
            title: "Name",
            entites: [
                {
                    email: 'yoshi@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
                {
                    email: 'yoshi@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
                {
                    email: 'yoshi@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
                {
                    email: 'yoshi@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
            ],
        },
        {
            title: "Name",
            entites: [
                {
                    email: 'david@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
                {
                    email: 'david@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
            ],
        },
    ]
    return (
        <div style={{maxHeight:'400px'}} className='p-4 sm:p-0 overflow-y-auto m-3'>
            {
                params.comp === '1' ?
                    (
                        <div className='w-full rounded-lg bg-white text-black relative'>
                            <div className='flex-col flex sm:flex-row text-sm gap-9 mt-4' style={{ minHeight: '200px' }}>
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
                                    <div className='flex text-xs border-gray-300 border  items-center rounded-md'>
                                        <input type="text" className='h-full outline-none p-2 rounded-lg' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex-col-reverse gap-2 sm:gap-0 sm:flex-row border-t-2 mt-4 border-solid border-gray flex justify-between items-center pt-8'>

                                <div className='text-xs ml-auto'>
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
                    ) :
                    (
                        <div className='w-full rounded-lg bg-white text-black relative sm:p-8'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col lg:flex-row pb-4 gap-4 lg:gap-20 border-b-2 border-gray'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold w-min'>title</p>
                                        <div className='flex flex-col sm:flex-row gap-3'>
                                            <div className='flex text-xs border-gray-300 border items-center'>
                                                <input type="text" className='h-full outline-none p-2' style={{ minWidth: '100px' }} />
                                            </div>
                                            <div className='flex text-xs border-gray-300 border items-center'>
                                                <input type="text" className='h-full w-full outline-none p-2' style={{ minWidth: '100px' }} />
                                                <div className='border-r p-2 border-gray-300'>050</div>
                                            </div>
                                        </div>
                                        <div className='flex text-xs border-gray-300 border items-center'>
                                            <input type="text" className='h-full w-full outline-none p-2' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold w-min'>title</p>
                                        <div className='flex flex-col sm:flex-row gap-3'>
                                            <div className='flex text-xs border-gray-300 border items-center'>
                                                <input type="text" className='h-full outline-none p-2' style={{ minWidth: '100px' }} />
                                            </div>
                                            <div className='flex text-xs border-gray-300 border items-center'>
                                                <input type="text" className='h-full w-full outline-none p-2' style={{ minWidth: '100px' }} />
                                                <div className='border-r p-2 border-gray-300'>050</div>
                                            </div>
                                        </div>
                                        <div className='flex text-xs border-gray-300 border items-center'>
                                            <input type="text" className='h-full w-full outline-none p-2' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col sm:flex-row gap-2 pt-8 text-xs items-center'>
                                        <p className='pl-2'>Textksjflskdajflskadjflsdajflk</p>
                                        <div className='bg-gray-200 p-1'>
                                            Some Text1
                                        </div>
                                        <div className='bg-gray-200 p-1'>
                                            Some Text1
                                        </div>
                                    </div>
                                    <div className='flex text-xs mt-4 mb-4 p-2 h-20 border-gray-300 border items-center'>
                                        <input type="text" className='h-full w-full outline-none p-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full '>
                                <p className='mr-auto text-white bg-black rounded-lg' style={{ width: "min-content", padding: "8px 50px" }} >Regiser</p>
                            </div>
                        </div>
                    )
            }
        </div>
    )

}
