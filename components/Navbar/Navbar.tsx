'use client'
import React from 'react'
import logo from '../../public/logo.svg'
import search from '../../public/Search.svg';
import avatar from '@/public/avatar-side.svg'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation';
import RegisterBtn from '@/utils/Register.btn';
import LogoutBtn from '@/utils/Logout.btn';
import Image from 'next/image';
import ProfileIcon from '../icons/profile.icon';

interface param {
        inDisplay: boolean,
        isLoggedIn: boolean
}
export default function Navbar({ inDisplay, isLoggedIn }: param) {
        const router = useRouter();
        const pathname = usePathname();


        const isSelectedPage = (path: string) => {
                return path === pathname;
        }

        const handleClick = (path: string) => {
                router.push(path)
        }

        const handleClickLogo = () => {
                router.push('/');
        }
        return (
                <div className="navbar flex m-6 justify-between px-8  py-2 bg-green-darker rounded-[32px]">
                        <div className="flex justify-center items-center">
                                {isLoggedIn ?
                                        <div className="flex gap-2 justify-center items-center">
                                                <div onClick={() => handleClick('/profile/account')} className="flex justify-center cursor-pointer items-center rounded-full w-[32px] bg-green h-[32px]">
                                                        <ProfileIcon></ProfileIcon>
                                                </div>
                                                <LogoutBtn path='/' text='تسجيل الخروج'></LogoutBtn>
                                        </div>
                                        :

                                        <div className="flex gap-4 justify-center items-center">
                                                <RegisterBtn path='/auth/login' text='تسجيل الدخول'></RegisterBtn>
                                                <motion.div
                                                        whileHover={{
                                                                scale: 1.1
                                                        }}
                                                        onClick={() => handleClick('/auth/signup')}
                                                        className="text-xl hidden md:flex cursor-pointer text-green-light font-amiri ">انضم الينا
                                                </motion.div>
                                        </div>
                                }

                                {inDisplay && <motion.div
                                        whileHover={{
                                                scale: 1.1
                                        }}
                                        className="text-xl border-[2px] border-green flex justify-between items-center rounded-[20px] py-1 px-2 bg-green-light font-amiri w-[195px]"
                                        style={{ boxShadow: '0 0 10px #848C36' }}
                                >
                                        <Image src={search} alt='logo'></Image>
                                        <input
                                                type="text"
                                                placeholder='بحث'
                                                className=' bg-transparent text-right font-noto placeholder:text-green-darker placeholder:text-[20px] max-w-[155px] outline-none'
                                        />

                                </motion.div>}

                        </div>
                        {isLoggedIn &&
                                <div className="flex text-center justify-center items-center gap-10">
                                        <div onClick={() => handleClick('/poems/read')} className={`${isSelectedPage('/poems/read')? 'border border-green rounded-xl px-2 py-1 shadow-md shadow-green':'border-none'} text-xl hover:text-green cursor-pointer text-green-light font-amiri`}>قصائد</div>
                                        <div onClick={() => handleClick('/')} className={`${isSelectedPage('/')? 'border border-green rounded-xl px-2 py-1 shadow-md shadow-green':'border-none'} text-xl hover:text-green text-green-light cursor-pointer font-amiri`}>الرئيسية</div>
                                </div>}

                        <Image className=' cursor-pointer ' onClick={handleClickLogo} width={82} src={logo} alt='logo'></Image>
                </div>
        )
}
