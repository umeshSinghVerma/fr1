import { Connections } from '@/components/home/Connections'
import DataStats from '@/components/home/DataStats'
import ImageComp from '@/components/home/ImageComp'
import Post from '@/components/home/Post'
import Sidebar from '@/components/home/SideBar'
import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <>
      {/* <Sidebar /> */}
      {/* <DataStats /> */}
      {/* <Connections /> */}
      <Link href='/home/InsideEventDetail/1'>first</Link>
      <Link href='/home/e11'>second</Link>
      <Link href='/home/e1'>third</Link>
      {/* <Link href='/home/e1'>first</Link> */}
      {/* <Link href='/home/e2'>first</Link> */}
      {/* <Post /> */}
      {/* <ImageComp /> */}

    </>

  )
}

export default page