'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '../../lib/user/authSlice';
import Image from 'next/image';
import logo from '../../../public/logo-white.svg';
import richa from '../../../public/richa.svg';
import flower from '../../../public/flower-corner.svg';
import frame from '@/public/frame.svg';
import Input from '@/components/Auth/Input';
import api from '../../lib/api';

interface User {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
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

    try {
      const response = await api.post('/auth/login', {
        email: user.email,
        password: user.password,
      });

      console.log('Login successful:', response.data.token);
      setErrorMessage('');
      dispatch(login({ email: response.data.user.email, username: response.data.user.name, token: response.data.token }));

      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row-reverse justify-center gap-10 items-center w-screen`}>
      <div className='flex flex-col px-8 items-center justify-center gap-4'>
        <Image src={logo} alt='img' className='w-[200px] darker lg:w-auto' />
        <p className='text-[28px] text-green-darker text-center md:text-[36px] font-amiri'>انطلق في رحلة عبر أعماق الشعر العربي</p>
        <Image width={300} src={richa} alt='img' className='hidden lg:flex' />
      </div>
      <div className='w-[85%] lg:w-[40%] rounded-3xl backdrop-blur-sm flex justify-center items-center relative'>
      <Image src={frame} alt='img' className='' />
        <form
          className='flex z-50 absolute top-[20%] flex-col w-full justify-center items-center gap-4 self-stretch flex-1'
          onSubmit={handleSubmit}
        >
          <p className='font-amiri text-[36px] text-black text-center'>تسجيل الدخول</p>
          {errorMessage && <div className="p-2 rounded-2xl border border-red text-red">{errorMessage}</div>}
          <div className='flex flex-col justify-center items-center gap-2 w-[60%]'>
            <Input title='بريد إلكتروني' name='email' placeholder='ادخل بريد إلكتروني' value={user.email} onChange={handleChange} />
            <Input title='كلمة مرور' name='password' placeholder='ادخل كلمة مرور' type="password" value={user.password} onChange={handleChange} />
          </div>
          <div className="text-black text-right font-noto text-lg ">ليس لديك حساب؟ <span className='underline'><a href="/auth/signup">إنشاء حساب</a></span></div>

          <button type="submit" className='font-amiri text-[24px] px-7 py-[6px] rounded-[30px] text-green-light bg-green-darker'>
            تسجيل الدخول
          </button>
        </form>
      </div>
      <Image src={flower} alt='img' className='absolute -z-30 left-[-5rem] bottom-[-5rem] w-[300px] lg:w-auto' />
    </div>
  );
}
