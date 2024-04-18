'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import localFont from 'next/font/local'
import SearchBtn from '@/utils/Search.btn'
import oliveLeft from '../../public/Hero/olive-left.svg'
import oliveRight from '../../public/Hero/olive-right.svg'
import leaf from '../../public/Hero/leaf.svg'

import Card from '../Card/Card';
import axios from 'axios';

const thuluth = localFont({ src: '../../fonts/thuluth-decorated.ttf' })


export default function Hero() {
        const [showDescription, setShowDescription] = useState(true);
        const [poems, setPoems] = useState([]);

        const handleSearch = async (formData: any) => {
                try {
                  const res = await axios.post('/api/search', formData);
                        console.log(res.data.poems);
                  setPoems(res.data.poems);
                } catch (error) {
                  console.error('Error:', error);
                }
              };
  return (
    <div className={`flex gap-20 flex-col mt-0 m-6 bg-green-darker overflow-hidden items-center ${showDescription? 'p-0 justify-center' : 'p-10 justify-start' }  ${poems.length? 'h-fit' : 'h-screen' } rounded-[32px] h-[90vh] hero relative`}>
        <Image className='absolute top-[-20%] left-[-20%] lg:top-0 lg:left-0' src={oliveLeft} alt='olive'></Image>
        <Image className='absolute bottom-[-20%] right-[-20%] lg:bottom-0 lg:right-0' src={oliveRight} alt='olive'></Image>
        <Image className='absolute' width={1000} src={leaf} alt='leaf'></Image>

        <div className="flex flex-col z-50 gap-6">

          <div className={`${thuluth.className} text-5xl text-center  lg:text-6xl bg-gradient-to-r from-white to-green text-transparent p-6 bg-clip-text`}>
            اكتشف عالم الشعر العربي
          </div>
          <div className={`font-amiri ${showDescription? 'flex duration-500 ease-in-out transition-all': 'hidden duration-500 ease-in-out transition-all'} font-light text-2xl lg:text-3xl text-center text-white`}>
            انطلق في رحلة عبر أعماق الشعر العربي
            <br /> من العصور القديمة إلى المعاصرة، من المغرب إلى الخليج
          </div>
      </div>
        <SearchBtn onSubmit={handleSearch} onClick={setShowDescription}></SearchBtn>
        <div className="flex flex-col w-full justify-center items-center gap-5">
        {poems.map((poem, index) => (
          <Card poetry={poem.poetry} author={poem.author} abyat={poem.content}></Card>
        ))}
        </div>
    </div>
  )
}
