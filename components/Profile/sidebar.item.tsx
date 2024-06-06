import { useRouter } from 'next/navigation'
import React from 'react'

interface IItem{
        title: string, 
        icon: React.ReactNode;
        isSelected: boolean,
        path: string
}

export default function SidebarItem({title, icon, path, isSelected} : IItem) {
        const router = useRouter();
        const handleClick = () =>{
                router.push(path);
        }
  return (
        <div onClick={handleClick} className={`flex ${isSelected? 'bg-green-darker ':'bg-green'} cursor-pointer px-8 py-2 justify-between`}>
                <p className='text-white w-1/2  font-noto text-2xl'>{title}</p>
                {icon}
        </div>
  )
}
