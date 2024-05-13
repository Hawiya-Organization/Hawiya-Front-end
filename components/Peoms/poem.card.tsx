import React from 'react'
import pen from '@/public/pen-green.webp'
import Image from 'next/image'

interface IPoem{
        author: string, 
        title: string,
        writingType: string
}

export default function PoemCard({author, title, writingType}: IPoem) {
  return (
   <div className="flex flex-col p-8 gap-4 rounded-xl bg-green-light ">
                <div className="text-2xl font-amiri text-center text-green-darker">{title}</div>
                <div className="flex gap-6 items-center">
                        <div className="rounded-xl font-noto text-md py-1 px-2 bg-green">
                          {writingType}
                        </div>
                        <div className="flex items-center font-amiri gap-4">
                                <p className='text-xl'>{author}</p>
                                <Image height={48} src={pen} alt='pen'></Image>
                        </div>
                        </div>
                      
   </div>
  )
}
