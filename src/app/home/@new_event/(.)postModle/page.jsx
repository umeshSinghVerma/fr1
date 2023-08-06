'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Popup from '@/components/Popup';
import DateSelector from '@/components/Elements/DateSelector';
import MultipleSelector from '@/components/Elements/MultipleSelector';
import NormalTextBox from '@/components/Elements/NormalTextBox';
import Link from 'next/link';
import PostModalShow from '@/components/home/PostModalShow';

export default function Page() {
    const router = useRouter();
    return (
        <div>
            <Popup>
                <div className='w-full rounded-lg bg-white text-black relative p-8'>
                    <button
                        onClick={() => router.back()}
                        className='text-black absolute top-4 left-5'
                    >
                        ✖
                    </button>
                    <div className='mb-3 gap-4 flex items-center'><span className='font-bold'>החתונה של דנית ויוסי</span><span className='text-xs  border border-gray-300 rounded-full pl-2 pr-2 bg-[#D8D8FE] text-[#181894]'>חתונה</span></div>
                    <div className='border-t pt-8 border-x-gray-200'>
                        <PostModalShow />
                    </div>
                    
                </div>
            </Popup>
        </div>
    )
}

