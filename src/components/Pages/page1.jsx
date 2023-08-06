import React from 'react'
import Table1 from '../home/Table1'
import DataStats from '../home/DataStats'
import { Connections } from '../home/Connections'
import Link from 'next/link'

export default function Page1() {
    return (
        <div className='flex flex-col w-full p-4  gap-y-8'>
            <div className='ml-auto'>
                <DataStats />
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center'>
                <div>
                    <Connections />
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <span>אהתראותחרונות</span>

                    </div>
                    <Table1 />
                </div>
            </div>
        </div>
    )
}
