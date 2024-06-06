'use client'
import React, { useState } from 'react'
import oliveLeft from '@/public/Hero/olive-left.svg'
import oliveRight from '@/public/Hero/olive-right.svg'
import Image from 'next/image'
import ShareBtn from '@/components/Peoms/share.btn'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function AddPoem() {
    const typeOptions = ['الطويل', 'الكامل', 'البسيط', 'الخفيف', 'الوافر', 'الرمل', 'الحر'];
    const arabicAlphabets = [
        'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'
    ];
    
    const [title, setTitle] = useState('');
    const [bahrType, setBahrType] = useState(typeOptions[0]);
    const [kafiya, setKafiya] = useState(arabicAlphabets[0]);
    const [inputFields, setInputFields] = useState([{ id: 1, sadr: '', ajoz: '' }]);

    const handleAddField = () => {
        setInputFields([...inputFields, { id: inputFields.length + 1, sadr: '', ajoz: '' }]);
    };

    const handleInputChange = (id, field, value) => {
        setInputFields(inputFields.map(inputField => 
            inputField.id === id ? { ...inputField, [field]: value } : inputField
        ));
    };

    const handleSubmit = async () => {
        const formattedPoem = {
            title: title,
            bahr_type_id: typeOptions.indexOf(bahrType) + 1,
            is_hor: false, 
            bayts: inputFields.map((field, index) => ({
                content: {
                    sadr: field.sadr,
                    ajoz: field.ajoz,
                    number: index + 1
                }
            }))
        };
        console.log(formattedPoem)
        try {
            const response = await axios.post('/api/poems/add', formattedPoem);
            console.log(response)
        } catch (error) {
            console.error('Error submitting poem:', error);
        }
    };

    return (
        <div className="flex flex-col gap-6 p-10 bg-green-light overflow-hidden rounded-xl relative m-10">
            <Image className='absolute olive-dark top-[0%] left-[0%]' src={oliveLeft} alt='olive'></Image>
            <Image className='absolute olive-dark bottom-[-20%] right-[-20%] lg:bottom-0 lg:right-0' src={oliveRight} alt='olive'></Image>
            <div className="flex items-center justify-end w-full text-right gap-4">
                <input 
                    type="text" 
                    className='rounded-lg p-2 w-1/3 border border-green-darker' 
                    name="title" 
                    id="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <p className='text-2xl font-amiri'>عنوان القصيدة</p>
            </div>
            <div className="flex justify-end w-full">
                <div className="flex items-center justify-end w-full text-right gap-4">
                    <select 
                        className="rounded-lg w-1/3 p-2 border text-right border-green-darker appearance-none"
                        value={bahrType}
                        onChange={(e) => setBahrType(e.target.value)}
                    >
                        {typeOptions.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>            
                    <p className='text-2xl font-amiri'>البحر</p>
                </div>
                <div className="flex items-center justify-end w-full text-right gap-4">
                    <select 
                        className="rounded-lg w-1/3 p-2 border text-right border-green-darker appearance-none"
                        value={kafiya}
                        onChange={(e) => setKafiya(e.target.value)}
                    >
                        {arabicAlphabets.map((alphabet, index) => (
                            <option key={index} value={alphabet}>{alphabet}</option>
                        ))}
                    </select>
                    <p className='text-2xl font-amiri'>القافية</p>
                </div>
            </div>
            <div className="flex z-50 flex-col gap-10 mt-5 justify-center items-center text-right">
                {inputFields.map((field, index) => (
                    <div key={index} className="flex justify-end w-3/4 gap-10">
                        <input 
                            type="text" 
                            className='bg-transparent w-1/3 border-b border-dashed border-b-black ' 
                            value={field.sadr}
                            onChange={(e) => handleInputChange(field.id, 'sadr', e.target.value)}
                        />
                        <input 
                            type="text" 
                            className='bg-transparent w-1/3 border-b border-dashed border-b-black ' 
                            value={field.ajoz}
                            onChange={(e) => handleInputChange(field.id, 'ajoz', e.target.value)}
                        />
                        <p className='text-2xl w-fit font-amiri'>:البيت {index + 1}</p>
                    </div>
                ))}
                <button className='rounded-full w-[48px] h-[48px] bg-white' onClick={handleAddField}>+</button>
            </div>
            <div className='flex justify-center items-center w-full'>
                <ShareBtn handleClick={handleSubmit} text='أنشر قصيدتك'></ShareBtn>
            </div>
        </div>
    )
}
