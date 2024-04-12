'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import {motion} from 'framer-motion'

export default function Navbar() {
  return (
   <div className="navbar flex justify-between px-8  py-2 bg-green-darker rounded-[32px]">
        <div className="flex justify-center items-center gap-4">
        <motion.div
                whileHover={{
                        border: '1px solid rgba(132, 140, 54, 0.76)',
                        boxShadow: '0 0 10px #848C36'
                }}
                className="text-xl font-amiri px-5 py-2 text-green-darker bg-green-light rounded-3xl"
        >
                تسجيل الدخول
        </motion.div>
        <motion.div
                whileHover={{
                        scale:1.1
                }}
                 className="text-xl hidden md:flex  text-green-light font-amiri ">انضم الينا
                 </motion.div>
        </div>
        <Image width={82}  src={logo} alt='logo'></Image>
   </div>
  )
}
