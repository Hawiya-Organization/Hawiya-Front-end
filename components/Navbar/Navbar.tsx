'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import search from '../../public/Search.svg';
import {motion} from 'framer-motion'

interface param{
   inDisplay : boolean
}
export default function Navbar({inDisplay} : param) {
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
        { inDisplay && <motion.div
                whileHover={{
                        scale:1.1
                }}
                 className="text-xl border-[2px] border-green flex justify-between items-center rounded-[20px] py-1 px-2 bg-green-light font-amiri w-[195px]"
                 style={{ boxShadow: '0 0 10px #848C36' }}
                                   >
                 <Image  src={search} alt='logo'></Image>
                 <input 
                  type="text" 
                  placeholder='بحث' 
                  className=' bg-transparent text-right font-noto placeholder:text-green-darker placeholder:text-[20px] max-w-[155px] outline-none'
                  />
                
        </motion.div>}
        
        </div>
        <Image width={82}  src={logo} alt='logo'></Image>
   </div>
  )
}
