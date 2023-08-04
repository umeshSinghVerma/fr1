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
                        <div className='flex w-[50vw] pt-8 pb-8 gap-20 border-b-2 border-gray'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold w-min'>title</p>
                                <div className='flex gap-3 w-min'>
                                    <div className='flex text-xs border-gray-300 border items-center'>
                                        <input type="text" className='h-full outline-none p-2' style={{ maxWidth: '100px' }} />
                                    </div>
                                    <div className='flex text-xs border-gray-300 border items-center'>
                                        <input type="text" className='h-full outline-none p-2' style={{ maxWidth: '100px' }} />
                                        <div className='border-r p-2 border-gray-300'>050</div>
                                    </div>
                                </div>
                                <div className='flex text-xs border-gray-300 border items-center'>
                                    <input type="text" className='h-full outline-none p-2' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold w-min'>title</p>
                                <div className='flex gap-3 w-min'>
                                    <div className='flex text-xs border-gray-300 border items-center'>
                                        <input type="text" className='h-full outline-none p-2' style={{ maxWidth: '100px' }} />
                                    </div>
                                    <div className='flex text-xs border-gray-300 border items-center'>
                                        <input type="text" className='h-full outline-none p-2' style={{ maxWidth: '100px' }} />
                                        <div className='border-r p-2 border-gray-300'>050</div>
                                    </div>
                                </div>
                                <div className='flex text-xs border-gray-300 border items-center'>
                                    <input type="text" className='h-full outline-none p-2' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-2 pt-8 text-xs items-center'>
                                <p className='pl-2'>Textksjflskdajflskadjflsdajflk</p>
                                <div className='bg-gray-200 p-1'>
                                    Some Text1
                                </div>
                                <div className='bg-gray-200 p-1'>
                                    Some Text1
                                </div>
                            </div>
                            <div className='flex text-xs mt-4 mb-4 p-2 h-20 border-gray-300 border items-center'>
                                <input type="text" className='h-full outline-none p-2' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full '>
                        <p className='mr-auto text-white bg-black rounded-lg' style={{ width: "min-content", padding: "8px 50px" }} >Regiser</p>
                    </div>

                </div>
            </Popup>
        </div>
    )
}

