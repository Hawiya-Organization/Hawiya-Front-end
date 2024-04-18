import React from 'react'
import CountUp from 'react-countup';

interface INumbers{
        num_poetry: number,
        num_authors: number,
        num_sub: number
}

export default function Numbers({num_authors, num_poetry, num_sub}: INumbers) {
  return (
    <div className="flex flex-col gap-12 z-50 justify-center items-center">
        <h2 className='text-4xl z-50'>أرقام</h2>
        <div className="flex flex-col justify-center gap-5 lg:gap-0  items-center lg:flex-row rounded-3xl w-2/3 p-10 lg:justify-between bg-green">
                <div className="flex text-3xl lg:text-4xl text-green font-amiri justify-center items-center rounded-full w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-white"> 
                        <CountUp end={num_sub} duration={10} />
                </div>
                <div className="flex text-3xl lg:text-4xl text-green font-amiri justify-center items-center rounded-full w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-white"> 
                        <CountUp end={num_authors} duration={10} />
                </div>
                <div className="flex text-3xl lg:text-4xl text-green font-amiri justify-center items-center rounded-full w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-white">
                        <CountUp end={num_poetry} duration={10} />
                </div>
        </div>
    </div>
  )
}
