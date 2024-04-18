import RegisterBtn from '@/utils/Register.btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons'
import logo from '../../public/logo.svg'
import arabic from '../../public/arabic.svg'


import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex flex-col bg-green-darker mt-10 gap-20 p-20 overflow-hidden relative">
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between z-50">
                <div className="flex order-2 lg:order-1 flex-col gap-6">
                        <div className="flex flex-col justify-center items-center gap-4">
                                <h2 className='text-white'>تواصلوا معنا</h2>
                                <div className="flex gap-3">
                                        <FontAwesomeIcon style={{color: '#BABE8E', fontSize: '48px'}} icon={faEnvelope} />
                                        <FontAwesomeIcon style={{color: '#BABE8E', fontSize: '48px'}} icon={faLinkedin} />
                                        <FontAwesomeIcon style={{color: '#BABE8E', fontSize: '48px'}} icon={faSquareFacebook} />
                                        <FontAwesomeIcon style={{color: '#BABE8E', fontSize: '48px'}}icon={faInstagram} />
                                </div>
                      
                        </div>
                        <div className="flex flex-col gap-4">
                                <RegisterBtn text='تسجيل الدخول' path='/auth/login'></RegisterBtn>
                                <RegisterBtn text='انضم إلينا' path='/auth/login'></RegisterBtn>
                        </div>
                </div>
                <Image className='white-bg order-1 lg:order-2 w-2/3 sm:w-1/3 lg:w-1/6' src={logo} alt='logo'></Image>
        </div>
        <div className="flex order-3 z-50 flex-col gap-2 text-right">
                <div className="w-full h-[2px] bg-white"></div>
                <h3 className='text-white'>{ new Date().getFullYear() } جميع الحقوق محفوظة</h3>
        </div>
        <Image src={arabic} className='absolute w-1/2 darker opacity-50 bottom-[-5%] sm:bottom-[-65%] right-[-15%]' alt='author'></Image>
        <Image src={arabic} className='absolute w-1/2 darker opacity-50 top-[-5%] sm:top-[-35%] left-[-15%]' alt='author'></Image>
    </div>
  )
}
