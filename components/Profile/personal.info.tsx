import React from 'react'

interface IPInfo {
        email: string,
        username: string,
        bio: string
}

export default function PersonalInfo({ email, username, bio }: IPInfo) {
        return (
                <div className="grid grid-cols-2 text-right p-20 w-[800px] h-fit rounded-2xl border border-green overflow-y-scroll gap-4">
                        <p className='text-black mr-4 textl-2xl font-amiri'>{email}</p>
                        <p className='text-green text-2xl font-amiri'>:البريد الإلكتروني</p>
                        <p className='text-black mr-4 textl-2xl font-amiri'>{username}</p>
                        <p className='text-green text-2xl font-amiri'>:اسم المستخدم</p>
                        <p className='text-black mr-4 textl-2xl font-amiri'>{bio}</p>
                        <p className='text-green text-2xl font-amiri'>:الوصف</p>
                </div>
        )
}
