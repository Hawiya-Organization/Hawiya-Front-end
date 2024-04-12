import React from 'react'
import Image from 'next/image'
import moufdi from '../../public/moufdi.png'
import arabic from '../../public/arabic.svg'


interface ICard{
        author: string,
        biography: string,
        pic: string
}
export default function FeaturedCard({author, biography, pic}: ICard) {
  return (
   <div className="flex bg-green p-10 rounded-2xl gap-2 h-72 overflow-hidden justify-between relative" >

        <Image width={198}  className='z-10' src={moufdi} alt='author'></Image>
        <div className="flex z-10 flex-col gap-4 text-right">
                <p className='text-white'>الشاعر المميز لليوم</p>
                <h2>{author}</h2>
                <p className='text-white'>{biography}</p>
        </div>
        <Image width={198} src={arabic} className='absolute opacity-80 top-[-20%] left-[-10%]' alt='author'></Image>
        <Image width={198} src={arabic} className='absolute opacity-80 bottom-[-20%] right-[-10%]' alt='author'></Image>

   </div>
  )
}
