'use client';
import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import search from '../public/Hero/search.svg';
import send from '../public/Hero/send.svg';
import { motion } from 'framer-motion';

interface IBtn {
  onClick: (isHidden: boolean) => void;
  onSubmit: (formData: FormData) => void;
}

export default function SearchBtn({ onClick, onSubmit }: IBtn) {
  const [input, setInput] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('prompt', input);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="search-button w-5/6 z-50 flex rounded-2xl justify-between bg-green-light p-2" style={{ boxShadow: '0 0 30px #848C36' }}>
      <button className="bg-green rounded-xl p-3">
        <Image width={32} src={send} alt="send" />
      </button>
      <motion.input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onAnimationStart={() => onClick(false)}
        onAnimationEnd={() => onClick(true)}
        whileTap="tap"
        className="bg-transparent font-amiri font-bold text-right outline-none px-5 flex w-full h-full"
        type="text"
        name="search"
      />
      <Image width={40} src={search} alt="search" />
    </form>
  );
}
