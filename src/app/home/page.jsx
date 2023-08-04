import { Connections } from '@/components/home/Connections'
import DataStats from '@/components/home/DataStats'
import Sidebar from '@/components/home/SideBar'
import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <>
      {/* <Sidebar />
      <DataStats />
      <Connections /> */}
      <Link href='/home/e1'>first</Link>
    </>

  )
}

export default page