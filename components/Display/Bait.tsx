import React from 'react'

interface data{
    leftverse : string,
    rightverse : string
}
function Bait({leftverse , rightverse} : data) {
  return (
    <div className=' flex flex-row-reverse gap-2 md:gap-10 justify-center items-center text-black text-center font-amiri text-[14px] font-bold md:text-[24px]'>
        <p>
        {leftverse}
        </p>
        <p>
        {rightverse}
        </p>
    </div>
  )
}

export default Bait
