'use client'
import { useSelector } from 'react-redux'
import { RootState } from '../lib/store'

import Hero from '@/components/Display/Hero'
import Navbar from '@/components/Navbar/Navbar'

import React from 'react'

export default function DisplayPage() {
        const auth = useSelector((state: RootState) => state.auth);

  return (
    <div className='bg-white flex flex-col gap-4 h-screen'>
    <Navbar isLoggedIn={auth.isLoggedIn} inDisplay={false}></Navbar>
    <Hero></Hero>
    </div>
  )
}
