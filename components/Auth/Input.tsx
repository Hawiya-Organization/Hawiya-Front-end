import React from 'react';

interface InputD {
  title: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function Input({ title, name, placeholder, value, onChange, type = 'text' }: InputD) {
  return (
    <div className='flex flex-col gap-1 self-stretch'>
      <label className='text-right text-[20px] text-[#434B2F] font-noto'>
        {title}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='p-2 font-noto outline-none flex-1 text-right border-[1.5px] border-[#434B2F] rounded-2xl placeholder-[rgba(67,75,47,0.7)] text-[16px] self-stretch bg-transparent'
      />
    </div>
  );
}

export default Input;
