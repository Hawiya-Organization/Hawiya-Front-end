import Image from 'next/image'
import React from 'react'
import trash from '@/public/trash.svg'

interface IDelete{
        id: string
}

export default function DeleteBtn({id}:IDelete) {
  return (
    <button className='rounded-2xl w-[92px] text-right flex justify-between p-2 border border-green font-noto text-white bg-transparent'>
        <Image width={24} src={trash} alt=''></Image>
        حذف
    </button>
  )
}
