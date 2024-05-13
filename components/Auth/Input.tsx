import React from 'react'


interface InputD{
    title: string,
    placeholder: string,
}
function Input({title , placeholder}:InputD)  {
  return (
    <div className='flex flex-col gap-1 self-stretch'>
        <label className='text-right text-[20px] text-[#434B2F] font-noto'>
        {title}
        </label>
        <input type="text" placeholder={placeholder} className=' p-2 font-noto outline-none flex-1 text-right border-[1.5px] border-[#434B2F] rounded-2xl placeholder-[rgba(67,75,47,0.7)] text-[16px] self-stretch bg-transparent' />
    </div>
  )
}

export default Input
