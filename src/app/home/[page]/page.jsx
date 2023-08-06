'use client'
import Page1 from '@/components/Pages/page1'
import Table1 from '@/components/home/Table1'
import Table2 from '@/components/home/Table2'
import { ContentWidthContext } from '@/contexts/ContentWidthContext'
import React, { useContext } from 'react'

export default function Page({ params }) {
    if (params.page == 1) {
        return (
            <div className='w-full h-full overflow-auto'>
                <Page1 />
            </div>
        )
    }
    else if (params.page == 2) {
        return (
            <div className=' h-full overflow-x-auto' ><Table2 /></div>
        )
    }
    return null
}
