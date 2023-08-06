import Popup from '@/components/Popup'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <Popup>
        <div className='bg-white flex flex-col p-8 rounded-lg gap-5' style={{ background: 'linear-gradient(42deg, #E9E4ED 0%, #FFF 100%)' }}>
          <p className='text-center'>Contact us</p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex text-xs border-gray-300 border items-center'>
              <input type="text" className='h-full bg-transparent outline-none p-2' />
            </div>
            <div className='flex text-xs border-gray-300 border items-center'>
              <input type="text" className='h-full bg-transparent outline-none p-2' />
            </div>
          </div>
          <div className='flex text-xs border-gray-300 border items-center'>
            <input type="text" className='h-full bg-transparent outline-none p-2' />
          </div>
          <div className='flex text-xs border-gray-300 border h-20 items-center'>
            <input type="text" className='h-full bg-transparent outline-none p-2' />
          </div>
          <div className='w-full '>
            <p className='m-auto text-xs text-white bg-black rounded-md' style={{ width: "min-content", padding: "8px 50px" }} >Regiser</p>
          </div>
            <Image src='/footerLogin.png' alt='footer' width={350} height={40} />
        </div>
      </Popup>
    </div>
  )
}
