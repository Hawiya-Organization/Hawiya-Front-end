'use client'

import Hero from '@/components/Display/Hero'
import Navbar from '@/components/Navbar/Navbar'

import React from 'react'

export default function DisplayPage() {
  return (
    <div className='bg-white flex flex-col m-6 gap-4 h-screen'>
    <Navbar inDisplay={true}></Navbar>
    <Hero></Hero>
    </div>
  )
}
