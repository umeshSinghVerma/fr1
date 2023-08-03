'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function Frame({children}) {

  return (
    <>
      {/* <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
      </div> */}
      {children}
    </>
  )
}
