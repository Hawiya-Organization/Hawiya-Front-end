'use client'
import React from 'react'
import Image from 'next/image';
import ShareBtn from './share.btn'
import search from '@/public/Hero/search.svg';
import { useRouter } from 'next/navigation'



export default function SearchBar() {
        const router = useRouter();

        const handleClick = ()=> {
                        router.push('/poems/add');
        }
  return (
    <div className="flex items-center justify-between">
        <div className="flex gap-4">
                <button className='rounded-full text-2xl px-4 py-1 text-white font-amiri justify-center items-center flex bg-green-light'> <div className="h-fit w-fit">التصفية</div></button>
                <input type="text" placeholder='...ابحث' className='border w-[280px] p-2 text-right border-green-light  rounded-lg' />
                {/* <Image width={40} src={search} alt="search" /> */}
        </div>
        <ShareBtn handleClick={handleClick} text='شارك قصيدتك هنا'></ShareBtn>
    </div>
  )
}
