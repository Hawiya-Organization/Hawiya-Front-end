import Featured from '@/components/Featured/Featured'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

export default function App() {
  return (
    <div className='bg-white flex flex-col m-6 gap-4'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Featured></Featured>
    </div>
  )
}
