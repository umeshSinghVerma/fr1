import React from 'react'

export default function TwoTick() {
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
                    <label htmlFor="otptext" className='text-[#808194]'>טלפון</label>
                    <div className='flex gap-2 p-2 border border-green-300 rounded-lg'>
                        <input id='otptext' type="text" className='bg-transparent outline-none w-full' />
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
                <div className='flex flex-col gap-2' dir='rtl'>
                    <div className='flex gap-2 p-2 border border-green-300 rounded-lg'>
                        <input type="text" className='bg-transparent outline-none w-full' />
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
                <div className='bg-[#ED3C95] p-2 text-white rounded flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M23.8337 12.0034V13.0001C23.8323 15.3362 23.0759 17.6093 21.6771 19.4804C20.2783 21.3514 18.3122 22.7202 16.072 23.3826C13.8317 24.045 11.4374 23.9654 9.246 23.1559C7.05465 22.3463 5.1837 20.85 3.9122 18.8902C2.6407 16.9304 2.03677 14.6121 2.19048 12.2811C2.34418 9.95 3.2473 7.73108 4.76513 5.95522C6.28296 4.17936 8.33418 2.94172 10.6129 2.42688C12.8916 1.91204 15.2756 2.14759 17.4095 3.09839" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.8333 4.33337L13 15.1775L9.75 11.9275" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='flex items-center justify-center gap-1'>
                    <p className='underline font-bold decoration-[#ED3C95]'>צור אותו כעת </p>
                    <p dir='rtl'>אין לך חשבון עדיין?</p>
                </div>
            </div>
        </div>
    )
}
