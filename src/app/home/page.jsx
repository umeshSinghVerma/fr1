'use client'
import SideNav from '@/components/SideNav'
import { SidenavContent } from '@/components/SidenavContent'
import { Connections } from '@/components/home/Connections'
import DataStats from '@/components/home/DataStats'
import ImageComp from '@/components/home/ImageComp'
import MyForm from '@/components/home/MyForm'
import Post from '@/components/home/Post'
import Sidebar from '@/components/home/SideBar'
import Link from 'next/link'
import React, { useState } from 'react'
const Page = () => {
  const [sidenavOpen, setSidenavOpen] = useState(false);

  const handleSidenavToggle = () => {
    setSidenavOpen(!sidenavOpen);
  };

  const handleSidenavClose = () => {
    setSidenavOpen(false);
  };
  return (
    <>
      {/* <Sidebar /> */}
      {/* <DataStats /> */}
      {/* <Connections /> */}
      {/* <div className='flex flex-col'>
        <Link href='/home/InsideEventDetail/1'>InsiderEventDetail1</Link>
        <Link href='/home/e1'>e1</Link>
        <Link href='/home/e2'>e2</Link>
        <Link href='/home/e11'>e11</Link>
        <Link href='/home/postModle'>PostModle</Link>
        <Link href='/contact'>Contact</Link>
      </div> */}
      {/* <Post /> */}
      {/* <ImageComp /> */}
      {/* <div id='sidenav' className='absolute left-0 z-[10000]'>
        <Connections />
      </div> */}
      {/* <div className="flex">
        <button
          className="fixed top-5 left-5 p-2 bg-gray-500 text-white"
          onClick={handleSidenavToggle}
        >
          Open Sidenav
        </button>

        <SideNav isOpen={sidenavOpen} onClose={handleSidenavClose}>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Sidenav Content</h2>
            <SidenavContent />
          </div>
        </SideNav>

    </div> */}
    <MyForm />


    </>

  )
}

export default Page