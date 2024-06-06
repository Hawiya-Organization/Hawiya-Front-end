'use client'
import Featured from '@/components/Featured/Featured'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Numbers from '@/components/Numbers/Numbers'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from './lib/store'
import React from 'react'

export default function App() {
        const auth = useSelector((state: RootState) => state.auth);

        const router = useRouter();
        console.log(auth.user?.token)


        const handleLoginClick = () => {
                router.push('/auth/login');
              };
  return (
    <div className='bg-white flex flex-col'>
    <Navbar isLoggedIn={auth.isLoggedIn} inDisplay={false}></Navbar>
    <Hero></Hero>
    <Featured></Featured>
    <Numbers num_authors={200} num_poetry={50000} num_sub={123}></Numbers>
    <Footer></Footer>
    </div>
  )
}
