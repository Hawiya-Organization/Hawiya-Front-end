'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import {motion} from 'framer-motion'
import RegisterBtn from '@/utils/Register.btn'
import { useRouter } from 'next/navigation'

export default function Navbar() {
        const router = useRouter();

        const handleClick = ()=> {
                        router.push('/');
        }
  return (
   <div className="navbar flex justify-between px-8 m-6 py-2 bg-green-darker rounded-[32px]">
        <div className="flex justify-center items-center gap-4">
        <RegisterBtn text='تسجيل الدخول' path='/auth/login'></RegisterBtn>
        <motion.div
                whileHover={{
                        scale:1.1
                }}
                 className="text-xl hidden md:flex  text-green-light font-amiri ">انضم الينا
                 </motion.div>
        </div>
        <Image className=' cursor-pointer ' onClick={handleClick} width={82}  src={logo} alt='logo'></Image>
   </div>
  )
}
