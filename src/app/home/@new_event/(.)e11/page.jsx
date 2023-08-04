'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Popup from '@/components/Popup';

export default function Page() {
    const router = useRouter();
    return (
        <div>
            <Popup>
                <div className='w-full h-52 bg-teal-50 text-black'>
                    This is the data and I am using this
                    <button
                        onClick={() => router.back()}
                    >
                        Back button
                    </button>
                </div>
            </Popup>
        </div>
    )
}

