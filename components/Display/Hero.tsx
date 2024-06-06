"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import pen from '../../public/pen.svg';
import flower from '../../public/flower-corner.svg';
import Bait from './Bait';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface Bayt {
  id: number;
  content: {
    number: number;
    sadr: string;
    ajoz: string;
  };
}

interface Poem {
  bahr_type: string;
  id: number;
  title: string;
  author_name: string;
  author_bio: string | null;
  bayts: Bayt[];
}

function Hero() {
  const [poem, setPoem] = useState<Poem | null>(null);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const idPoem = searchParams.get('id');

  useEffect(() => {
    if (idPoem) {
      const fetchPoem = async () => {
        try {
          const response = await axios.get(`/api/poems/show`, { params: { id: idPoem } });
          setPoem(response.data.data);
          console.log(response.data)
        } catch (error) {
          setError('Failed to fetch poem');
        }
      };

      fetchPoem();
    }
  }, [idPoem]);

  if (error) return <p>{error}</p>;
  if (!poem) return <div className='justify-center items-center w-screen h-screen flex'><FontAwesomeIcon size='xl' icon={faSpinner} spinPulse style={{color: "#4ea664", width: '120px'}} /> </div>;

  return (
    <div className="flex flex-col justify-start items-end flex-1 self-stretch px-[20px] md:px-[200px] pt-10 gap-10">
      <div className="flex flex-col ">
        <p className="text-right mr-2 font-noto text-[20px] md:text-[36px] font-bold text-green-darker">
          {poem.title}
        </p>
        <div className="flex justify-center items-center gap-6">
          <button className="px-6 py-2 font-noto text-[18px] bg-green-light text-center rounded-[26px]">
            {poem.bahr_type}
          </button>
          <p className="text-[30px] font-amiri font-bold">
            {poem.author_name}
          </p>
          <Image src={pen} alt="pen" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center relative p-5 h-[60%] bg-green-light rounded-[30px] border-[2px] border-green-darker shadow-[6px_6px_15px_0_rgba(0,0,0,0.25)] overflow-hidden">
        <Image src={flower} alt="flower" className="absolute bottom-[-5rem] left-0 w-[200px]" />
        <Image src={flower} alt="flower" className="absolute bottom-[-5rem] rotate-180 top-[-3rem] right-0 w-[200px]" />
        <div className=' flex flex-col justify-center items-center gap-3'>
        {poem.bayts.map((bayt) => (
                <Bait leftverse={bayt.content.sadr} rightverse={bayt.content.ajoz}></Bait>
        ))}
      </div>
      </div>

    </div>
  );
}

export default Hero;
