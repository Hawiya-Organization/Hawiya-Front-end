'use client'
import React from 'react'
import bg from '../../../public/auth-bgg.svg';
import Image from 'next/image'
import flower from '../../../public/flower-corner.svg';
import richa from '../../../public/richa.svg';
import logo from '../../../public/logo-white.svg';
import Input from '@/components/Auth/Input';


export default function Login() {
  return (
    <div 
    className={` flex flex-col lg:flex-row-reverse justify-center gap-10 items-center h-screen w-scree`}
    style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className='flex flex-col px-8 items-center justify-center gap-4'>
          <Image   src={logo} alt='img' className=' w-[200px] lg:w-auto'></Image>
          <p className=' text-white text-[28px] text-center md:text-[36px] font-amiri'>انطلق في رحلة عبر أعماق الشعر العربي</p>
          <Image width={300} src={richa} alt='img' className=' hidden lg:flex'></Image>
        </div>
        <div className=' w-[85%] lg:w-[40%] h-[65%] lg:h-[70%] auth-info-bg flex justify-center items-center'>
          <form
          className=' flex flex-col justify-center items-center gap-4  self-stretch flex-1'
          >
            <p className=' font-amiri text-[36px] text-black text-center'>انشاء حساب جديد</p>
            <div className=' flex flex-col justify-center items-center gap-2 w-[60%]'>
              <Input title='اسم المستخدم' placeholder='ادخل اسم المستخدم '/>
              <Input title='بريد إلكتروني ' placeholder='ادخل بريد إلكتروني'/>
              <Input title='كلمة مرور ' placeholder='ادخل كلمة مرور   '/>
              <Input title='تحقق من كلمة المرور ' placeholder='ادخل كلمة مرور   '/>
            </div>
            <button type="submit" className=' font-amiri  text-[24px] px-7 py-[6px] rounded-[30px] text-green-light bg-green-darker'>
            تسجيل الدخول
            </button>
          </form>
        </div>
     <Image src={flower} alt='img' className=' absolute left-[-5rem] bottom-[-5rem] w-[300px] lg:w-auto'></Image>
    </div>
  )
}
