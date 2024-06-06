import Image from 'next/image'
import React from 'react'
import edit from '@/public/edit.svg'

interface IDelete{
        path: string,
        id: string
}

export default function EditBtn({path, id}:IDelete) {
  return (
    <button className='rounded-2xl w-[92px] flex text-right justify-between p-2 border border-white font-noto text-white bg-green'>
        <Image width={24} height={24} src={edit} alt=''></Image>
        تعديل
    </button>
  )
}
