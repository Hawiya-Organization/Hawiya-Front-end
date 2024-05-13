import React from 'react'
import pen from '@/public/pen.svg'
import Image from 'next/image'

interface IShare{
        text: string,
        handleClick: () => void
}

export default function ShareBtn({text,handleClick}:IShare) {
  return (
    <button onClick={handleClick} className="rounded-2xl gap-2 px-2 py-2 w-fit bg-green flex">
        <div className="text-2xl font-amiri text-white ">{text}</div>
        <Image width={24} src={pen} alt='pen'></Image>
    </button>
  )
}
