'use client'
import React from 'react'
import Image from 'next/image'
import arabic from '../../public/arabic.svg'
import Link from 'next/link'
type Bayt = {
        number: number;
        sadr: string;
        ajoz: string;
    }

interface ICard{
        id: number,
        poetry: string | null,
        author: string,
        abyat:  Bayt
}
export default function Card({id, poetry, author, abyat}:ICard) {
  return (
<Link href={`/display_poem?id=${id}`}>
    <div className="flex p-10 text-right w-[600px] flex-col bg-green-light rounded-3xl overflow-hidden relative">
        <h1 className="text-green-darker">{poetry}</h1>
        <h2 className="px-4">{author}</h2>
        <div className="flex text-center z-50 gap-4 items-center justify-center">
                        <p>{abyat.ajoz}</p>
                        <p>{abyat.sadr}</p>

        </div>
        <Image width={128} src={arabic} className='absolute darker top-[20%] left-[-10%]' alt='author'></Image>
        <Image width={128} src={arabic} className='absolute darker top-[-40%] left-[40%]' alt='author'></Image>
        <Image width={128} src={arabic} className='absolute darker bottom-[-40%] right-[10%]' alt='author'></Image>
    </div>
    </Link>

  )
}
