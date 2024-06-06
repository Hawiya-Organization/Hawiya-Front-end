'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import flower from '../../../public/flower-corner.svg';
import richa from '../../../public/richa.svg';
import logo from '../../../public/logo-white.svg';
import Input from '@/components/Auth/Input';
import frame from '@/public/frame.svg';


interface User {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default function Signup() {
        const [errorMessage, setErrorMessage] = useState('');
        const [successMessage, setSuccessMessage] = useState('');

  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.password !== user.password_confirmation) {
      alert('Passwords do not match');
      return;
    }


    try {
        const response = await axios.post('/api/auth/signup', {
                name: user.name,
                email: user.email,
                password: user.password,
                password_confirmation: user.password_confirmation
              });
              
      
      console.log('Registered successful:', response.data);
      setSuccessMessage('تم إنشاء حسابك بنجاح!')
      setErrorMessage('')
      // Handle successful login (e.g., redirect to a dashboard)
    } catch (error) {
      console.error('Registered error:', error);
      setErrorMessage(error.message)
      setSuccessMessage('')

    }
  };

  return (
        <div className={`flex flex-col lg:flex-row-reverse justify-center gap-10 items-center w-screen`}>
        <div className='flex flex-col px-8 items-center justify-center gap-4'>
        <Image src={logo} alt='img' className='w-[200px] darker lg:w-auto' />
        <p className='text-[28px] text-green-darker text-center md:text-[36px] font-amiri'>انطلق في رحلة عبر أعماق الشعر العربي</p>
        <Image width={300} src={richa} alt='img' className='hidden lg:flex' />
      </div>
      <div className='w-[85%] lg:w-[40%] z-50 rounded-3xl backdrop-blur-sm flex justify-center items-center relative'>
      <Image src={frame} alt='img' className='' />

        <form
          className='flex z-50 absolute top-4 flex-col w-full justify-center items-center gap-3 self-stretch flex-1'
          onSubmit={handleSubmit}
        >
          <p className='font-amiri text-[36px] text-black text-center'>انشاء حساب جديد</p>
          {successMessage &&  <div className="p-2 rounded-2xl border border-green text-green">{successMessage}</div>
}
{errorMessage &&  <div className="p-2 rounded-2xl border border-red text-red">{errorMessage}</div>}

          <div className='flex flex-col justify-center items-center gap-2 w-[80%]'>
            <Input title='اسم المستخدم' name='name' placeholder='ادخل اسم المستخدم' value={user.name} onChange={handleChange} />
            <Input title='بريد إلكتروني' name='email' placeholder='ادخل بريد إلكتروني' value={user.email} onChange={handleChange} />
            <Input title='كلمة مرور' name='password' placeholder='ادخل كلمة مرور' type="password" value={user.password} onChange={handleChange} />
            <Input title='تحقق من كلمة المرور' name='password_confirmation' placeholder='ادخل كلمة مرور' type="password" value={user.password_confirmation} onChange={handleChange} />
          </div>
          <div className="text-black text-right font-noto text-lg ">هل لديك حساب؟  <span className='underline'><a href="/auth/login">تسجيل الدخول</a></span></div>
          <button type="submit" className='font-amiri text-[24px] px-7 py-[6px] rounded-[30px] text-green-light bg-green-darker'>
            انشاء حساب
          </button>
        </form>
      </div>
      <Image src={flower} alt='img' className='absolute left-[-5rem] bottom-[-5rem] w-[300px] lg:w-auto' />
    </div>
  );
}
