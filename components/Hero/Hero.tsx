'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import oliveLeft from '../../public/Hero/olive-left.svg';
import oliveRight from '../../public/Hero/olive-right.svg';
import leaf from '../../public/Hero/leaf.svg';
import Card from '../Card/Card';
import axios from 'axios';
import { motion } from 'framer-motion';
import search from '@/public/Search.svg';
import send from '@/public/Hero/send.svg';

const thuluth = localFont({ src: '../../fonts/thuluth-decorated.ttf' });
type Bayt = {
    number: number;
    sadr: string;
    ajoz: string;
}

type Poem = {
        id : number;
        poem_id: number;
        poem_author: string;
        poem_title: string | null;
        content: Bayt;
      }

export default function Hero() {
        const [input, setInput] = useState('');

  const [showDescription, setShowDescription] = useState(true);
  const [poems, setPoems] = useState([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        try {
        console.log(input)
        const response = await axios.post('/api/search', {
                prompt: input,
              });
              console.log(response.data.data);
      setPoems(response.data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log(poems)

  return (
    <div className={`flex gap-20 flex-col mt-0 m-6 bg-green-darker overflow-hidden items-center ${showDescription ? 'p-0 justify-center' : 'p-10 justify-start'} ${poems.length ? 'h-fit' : 'h-screen'} rounded-[32px] h-[90vh] hero relative`}>
      <Image className="absolute top-[-20%] left-[-20%] lg:top-0 lg:left-0" src={oliveLeft} alt="olive" />
      <Image className="absolute bottom-[-20%] right-[-20%] lg:bottom-0 lg:right-0" src={oliveRight} alt="olive" />
      <Image className="absolute" width={1000} src={leaf} alt="leaf" />
      <div className="flex flex-col z-50 gap-6">
        <div className={`${thuluth.className} text-5xl text-center lg:text-6xl bg-gradient-to-r from-white to-green text-transparent p-6 bg-clip-text`}>
          اكتشف عالم الشعر العربي
        </div>
        <div className={`font-amiri ${showDescription ? 'flex duration-500 ease-in-out transition-all' : 'hidden duration-500 ease-in-out transition-all'} font-light text-2xl lg:text-3xl text-center text-white`}>
          انطلق في رحلة عبر أعماق الشعر العربي
          <br /> من العصور القديمة إلى المعاصرة، من المغرب إلى الخليج
        </div>
      </div>
      <form onSubmit={handleSubmit} className="search-button w-5/6 z-50 flex rounded-2xl justify-between bg-green-light p-2" style={{ boxShadow: '0 0 30px #848C36' }}>
      <button className="bg-green rounded-xl p-3">
        <Image width={32} src={send} alt="send" />
      </button>
      <motion.input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onAnimationStart={() => setShowDescription(false)}
        onAnimationEnd={() => setShowDescription(true)}
        whileTap="tap"
        className="bg-transparent font-amiri font-bold text-right outline-none px-5 flex w-full h-full"
        type="text"
        name="prompt"
      />
      <Image width={40} src={search} alt="search" />
    </form>
      <div className="flex flex-col w-full justify-center items-center gap-5">
        {poems.map((poem, index) => (
          <Card key={index} id={poem.poem_id} poetry={poem.poem_title} author={poem.poem_author} abyat={poem.content}></Card>
        ))}
      </div>
    </div>
  );
}
