'use client'
import Featured from '@/components/Featured/Featured'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function App() {
        const router = useRouter();

        const handleLoginClick = () => {
                router.push('/auth/login');
              };
  return (
    <div className='bg-white flex flex-col m-6 gap-4'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Featured></Featured>
    <button onClick={handleLoginClick}>login</button>
    </div>
  )
}
