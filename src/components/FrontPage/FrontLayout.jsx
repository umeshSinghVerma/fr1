import Image from 'next/image'
import React from 'react'
import Otp from './Otp'
import Forget from './Forget'
import TwoTick from './TwoTick'
import SignUp from './Signup'

export default function FrontLayout() {
    return (
        <div className='w-screen overflow-y-auto h-screen flex justify-center items-center' dir='ltr'>
            <div className='bg-yellow-50 w-screen h-screen lg:w-[80vw] lg:h-[90vh] flex flex-col sm:flex-row'>
                <div className='w-full md:w-[55%] h-[40%] rounded-lg sm:rounded-none sm:h-full bg-center bg-green-50' style={{ backgroundImage: 'url(/BannerImage.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </div>

                <div className='w-full flex-col gap-8 flex justify-center items-center md:w-[45%] h-full' style={{ background: 'linear-gradient(42deg, #E9E4ED 0%, #FFF 100%)' }}>
                    <div className='sm:hidden mt-4'>
                        <Image src='/HeaderLogin.png' width={500} height={10} alt='footer' />
                    </div>
                    {/* <Otp/> */}
                    {/* <Forget/> */}
                    {/* <TwoTick/> */}
                    <SignUp/>
                    <div className='hidden sm:block'>
                        <Image src='/footerLogin.png' width={400} height={10} alt='footer' />
                    </div>
                </div>

            </div>
        </div>
    )
}
