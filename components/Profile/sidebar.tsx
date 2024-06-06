'use client'
import Image from 'next/image'
import React from 'react'
import avatar from '@/public/avatar.webp'
import saved from '@/public/saved.svg'
import avatarside from '@/public/avatar-side.svg'
import pen from '@/public/pen.svg'
import update from '@/public/update.svg'
import LogoutBtn from '@/utils/Logout.btn'
import SidebarItem from './sidebar.item'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faPenNib, faUser } from '@fortawesome/free-solid-svg-icons'
import ProfileIcon from '../icons/profile.icon'
import PenIcon from '../icons/pen.icon'
import SavedIcon from '../icons/saved.icon'

interface IUser{
        name: string
}

export default function Sidebar({name}:IUser) {
        const pathname = usePathname();

        const selectedPage = (title: any) => {
                return pathname === title;
        };
        const updateProfile = () => {
                console.log('update')
        }
        return (
                <div className="flex gap-10 flex-col rounded-3xl w-[300px] bg-green ">
                        <div className="flex m-10 flex-col gap-2 justify-center items-center">
                                <div onClick={updateProfile} className="flex cursor-pointer relative">
                                        <Image width={112} src={avatar} alt=''></Image>
                                        <Image className='absolute bottom-0 left-0' src={update} alt='' width={24} ></Image>
                                </div>
                                <p className='text-white text-3xl font-amiri'>{name}</p>
                        </div>
                        <div className="flex text-right flex-col">
                                <SidebarItem path='/profile/account' isSelected={selectedPage('/profile/account')} title='حسابي' icon={<ProfileIcon></ProfileIcon>}></SidebarItem>
                                <SidebarItem path='/profile/my_poems' isSelected={selectedPage('/profile/my_poems')} title='قصائدي' icon={<PenIcon></PenIcon>}></SidebarItem>
                                <SidebarItem path='/profile/saved' isSelected={selectedPage('/profile/saved')} title='محفوظاتي' icon={<SavedIcon></SavedIcon>}></SidebarItem>

                        </div>
                        <div className="flex m-4 justify-center items-center">
                                <LogoutBtn path='/' text='تسجيل الخروج'></LogoutBtn>
                        </div>

                </div>
        )
}
