'use client'
import SideNav from '@/components/SideNav/SideNav'
import SidenavUsable from '@/components/SideNav/SidenavUsable'
import { SidenavContent } from '@/components/SideNav/SidenavContent'
import { Connections } from '@/components/home/Connections'
import DataStats from '@/components/home/DataStats'
import ImageComp from '@/components/home/ImageComp'
import MyForm from '@/components/home/MyForm'
import Post from '@/components/home/Post'
import Sidebar from '@/components/home/SideBar'
import Link from 'next/link'
import React, { useState } from 'react'
const page = () => {
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
      <MyForm/>

      <SidenavUsable/>


    </>

  )
}

export default page