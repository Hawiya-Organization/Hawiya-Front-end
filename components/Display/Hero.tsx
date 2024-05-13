import React from 'react'
import Image from 'next/image'

import pen from "../../public/pen.svg";
import flower from "../../public/flower-corner.svg";
import Poem from './Poem';

function Hero() {
  return (
    <div className='flex flex-col justify-start items-end flex-1 self-stretch px-[20px] md:px-[200px] pt-10 gap-10'>
      <div className='flex flex-col '>
        <p className=' text-right mr-2 font-noto text-[20px] md:text-[36px] font-bold text-green-darker'>
        إنَّ قلبي بالتَّلِّ تلِّ عزازٍ
        </p>
        <div className=' flex justify-center items-center gap-6'>
            <button className=' px-6 py-2 font-noto text-[18px] bg-green-light text-center rounded-[26px]'>
            الخفيف
            </button>
            <p className=' text-[30px] font-amiri font-bold'>
            إسحاق الموصلي
            </p>
            <Image  src={pen} alt='pen'></Image>
        </div>
      </div>
      <div className='w-full flex justify-center items-center relative h-[60%] bg-green-light rounded-[30px] border-[2px] border-green-darker shadow-[6px_6px_15px_0_rgba(0,0,0,0.25)]' style={{ overflow: 'hidden' }}>
        <Image src={flower} alt='flower' className='absolute bottom-[-5rem] left-0 w-[200px]'></Image>
        <Image src={flower} alt='flower' className='absolute bottom-[-5rem] rotate-180 top-[-3rem] right-0 w-[200px]'></Image>
        <Poem/>
        </div>

    </div>
  )
}

export default Hero
