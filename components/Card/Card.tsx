'use client'
import React from 'react'
import Image from 'next/image'
import arabic from '../../public/arabic.svg'

interface ICard{
        poetry: string,
        author: string,
        abyat: string[]
}
export default function Card({poetry, author, abyat}:ICard) {
  return (
    <div className="flex p-10 text-right w-1/2 flex-col bg-green-light rounded-3xl overflow-hidden relative">
        <h1 className="text-green-darker">{poetry}</h1>
        <h2 className="px-4">{author}</h2>
        <div className="flex text-center flex-col items-center justify-center">
                {abyat.map((bayt, index)=> (
                        <p>{bayt}</p>
                ))}
        </div>
        <Image width={128} src={arabic} className='absolute darker top-[20%] left-[-10%]' alt='author'></Image>
        <Image width={128} src={arabic} className='absolute darker top-[-40%] left-[40%]' alt='author'></Image>
        <Image width={128} src={arabic} className='absolute darker bottom-[-40%] right-[10%]' alt='author'></Image>
    </div>
  )
}
