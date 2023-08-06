import PostModal from '@/components/home/PostModal'
import Image from 'next/image'
import React from 'react'

export default function page({ params }) {
    const firstColumn = [
        {
            title: "Name",
            entites: [
                {
                    email: 'david@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
            ],
        },
        {
            title: "Name",
            entites: [
                {
                    email: 'david@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                }
            ],
        },
        {
            title: "Name",
            entites: [
                {
                    email: 'yoshi@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
                {
                    email: 'yoshi@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
                {
                    email: 'yoshi@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
                {
                    email: 'yoshi@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
            ],
        },
        {
            title: "Name",
            entites: [
                {
                    email: 'david@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
                {
                    email: 'david@gmail.com',
                    phone: '343242342',
                    text: 'Hello'
                },
            ],
        },
    ]
    return (
        <div style={{minWidth:'50vw'}}>
            {
                params.comp === '1' ?
                    (
                        <div className=' flex flex-col sm:flex-row mt-5 gap-8 overflow-y-auto overflow-x-hidden' style={{height:'400px'}}>
                            <div className='w-full sm:w-[40%] flex flex-col'>
                                {
                                    firstColumn.map((obj, index) => {
                                        return (
                                            <div key={index} className='m-4' style={{ fontSize: '10px' }}>
                                                <p className='font-bold mb-2'>{obj.title}</p>
                                                <div>
                                                    {
                                                        obj.entites.map((obj, index) => {
                                                            return (
                                                                <div className='flex justify-between text-gray-500 mb-1' style={{ fontSize: '8px' }} key={index}>
                                                                    <span>{obj.text}</span>
                                                                    <span>{obj.phone}</span>
                                                                    <span>{obj.email}</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='w-full sm:w-[60%]' style={{ paddingRight: '40px', borderRight: 'solid 1px gray' }}>
                                <div className='flex gap-20'>
                                    <div className='m-4' style={{ fontSize: '10px' }}>
                                        <p className='font-bold mb-2'>Name</p>
                                        <div className='flex justify-between text-gray-500 mb-1' style={{ fontSize: '8px' }} >Data
                                        </div>
                                    </div>
                                    <div className='m-4' style={{ fontSize: '10px' }}>
                                        <p className='font-bold mb-2'>Name</p>
                                        <div className='flex justify-between text-gray-500 mb-1' style={{ fontSize: '8px' }} >Data
                                        </div>
                                    </div>
                                </div>
                                <div className='m-4' style={{ fontSize: '10px' }}>
                                    <p className='font-bold mb-2'>Name</p>
                                    <div className='flex justify-end gap-5 mb-2' >
                                        <Image src={'/insideEvent.png'} alt='img' width={60} height={60} />
                                        <Image src={'/insideEvent.png'} alt='img' width={60} height={60} />
                                        <div className='relative'>
                                            <Image className='opacity-50' src={'/insideEvent.png'} alt='img' width={60} height={60} />
                                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold'>5+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='m-4 mt-5 flex justify-between' style={{ fontSize: '10px' }}>
                                    <div>
                                        <p className='font-bold mb-2'>Name</p>
                                        <p className=' underline'>www,youtubezcom/-tld.fdgjjss</p>
                                    </div>
                                    <Image src={'/insideEventVideo.png'} alt='img' width={130} height={60} />
                                </div>
                                <div className='m-4' style={{ fontSize: '10px' }}>
                                    <p className='font-bold mb-2'>Name</p>
                                    <p className=' underline'>www,youtubezcom/-tld.fdgjjss</p>
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div style={{padding:'20px 0'}}>
                            <PostModal/>
                        </div>
                    )
            }
        </div>
    )

}
