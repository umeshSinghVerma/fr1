'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Otp() {
    const router = useRouter();
    return (
        <div className='flex w-full sm:w-[70%] flex-col'>
            <div className='sm:bg-white sm:shadow-lg flex flex-col gap-5 rounded-lg' style={{ padding: '48px 24px' }}>
                <h1
                    style={{
                        color: "#10277C",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "22px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal"
                    }}
                >שמחים שחזרת אלינו!</h1>
                <h2
                    style={{
                        color: "#808194",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "normal",
                    }}
                >מערכת הספקים החדשה של וודרויוז</h2>
                <div className='flex flex-col gap-2' dir='rtl'>
                    <label htmlFor="otp" className='text-[#808194]'>טלפון</label>
                    <div className='flex gap-2 p-2 border border-green-300 rounded-lg'>
                        <input id='otp' type="text" className='bg-transparent outline-none w-full' />
                        <div className='flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clip-path="url(#clip0_326_8082)">
                                    <path d="M16.5 8.31002V9.00002C16.4991 10.6173 15.9754 12.191 15.007 13.4864C14.0386 14.7818 12.6775 15.7294 11.1265 16.1879C9.57557 16.6465 7.91794 16.5914 6.40085 16.031C4.88376 15.4705 3.58849 14.4346 2.70822 13.0778C1.82795 11.721 1.40984 10.1161 1.51626 8.50226C1.62267 6.88844 2.24791 5.35227 3.29871 4.12283C4.34951 2.89338 5.76959 2.03656 7.34714 1.68013C8.92469 1.3237 10.5752 1.48677 12.0525 2.14502" stroke="#4FC979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.5 3L9 10.5075L6.75 8.2575" stroke="#4FC979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_326_8082">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <div className='w-full border-t border-gray-200' style={{ height: "1px" }}></div>
                    <p className='ml-auto'>או</p>
                    <div className='w-full border-t border-gray-200' style={{ height: "1px" }}></div>
                </div>
                <div className='flex justify-center items-center gap-2 p-2 border border-[#E0E0E5] rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M10.3277 0C11.7573 0 13.1006 0.271132 14.3577 0.813397C15.6148 1.35566 16.7116 2.09511 17.6482 3.03175C18.5849 3.96839 19.3243 5.06114 19.8666 6.30999C20.4089 7.55884 20.68 8.89807 20.68 10.3277C20.68 11.7573 20.4089 13.1006 19.8666 14.3577C19.3243 15.6148 18.5849 16.7116 17.6482 17.6482C16.7116 18.5849 15.6148 19.3243 14.3577 19.8666C13.1006 20.4089 11.7573 20.68 10.3277 20.68C8.89807 20.68 7.55884 20.4089 6.30999 19.8666C5.06114 19.3243 3.96839 18.5849 3.03175 17.6482C2.09511 16.7116 1.35566 15.6148 0.813397 14.3577C0.271132 13.1006 0 11.7573 0 10.3277C0 8.89807 0.271132 7.55884 0.813397 6.30999C1.35566 5.06114 2.09511 3.96839 3.03175 3.03175C3.96839 2.09511 5.06114 1.35566 6.30999 0.813397C7.55884 0.271132 8.89807 0 10.3277 0ZM14.2221 4.51066H12.0284C11.6012 4.51066 11.2068 4.5846 10.8453 4.73249C10.4838 4.88038 10.1675 5.07757 9.89633 5.32405C9.6252 5.57054 9.41568 5.84988 9.26779 6.1621C9.1199 6.47431 9.04596 6.78652 9.04596 7.09874V8.4051H7.09874V10.9685H9.04596V16.1447H11.634V10.9685H13.5566V8.4051H11.634V7.73959C11.634 7.54241 11.7121 7.3863 11.8682 7.27128C12.0243 7.15625 12.1599 7.09874 12.2749 7.09874H14.2221V4.51066Z" fill="#5B88FD" />
                    </svg>
                    <p>התחבר עם פייסבוק</p>
                </div>
                <div className='bg-[#ED3C95] p-3 cursor-pointer text-white rounded flex justify-center items-center' onClick={()=>{
                    router.push('/home/table/1');
                }}>
                    <p>התחבר</p>
                </div>
                <div className='flex items-center justify-center gap-1'>
                    <p className='underline font-bold decoration-[#ED3C95]'>צור אותו כעת </p>
                    <p dir='rtl'>אין לך חשבון עדיין?</p>
                </div>
            </div>
        </div>
    )
}
