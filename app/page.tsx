'use client'
import Featured from '@/components/Featured/Featured'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Numbers from '@/components/Numbers/Numbers'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function App() {
        const router = useRouter();

        const handleLoginClick = () => {
                router.push('/auth/login');
              };
  return (
    <div className='bg-white flex flex-col'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Featured></Featured>
    <Numbers num_authors={200} num_poetry={50000} num_sub={123}></Numbers>
    <Footer></Footer>
    </div>
  )
}
