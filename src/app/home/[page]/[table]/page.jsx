'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import DataStats from '@/components/home/DataStats';
import { Connections } from '@/components/home/Connections';
import Table1 from '@/components/home/Table1';
import Table2 from '@/components/home/Table2';
import Page1 from '@/components/Pages/Page1';

export default function Page() {
    const params = useParams();
    const [currentComp, setCurrentComp] = useState(params.table);
    useEffect(() => {
        setCurrentComp(params.table);
    }, [params.table])
    return (
        <div className='w-full h-full overflow-auto'>
            <Page1 currentComp={currentComp} />
        </div>
    )
}
