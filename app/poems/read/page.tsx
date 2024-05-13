import PoemCard from '@/components/Peoms/poem.card'
import SearchBar from '@/components/Peoms/search.bar'
import React from 'react'

export default function PoemsPage() {
  return (
    <div className="flex flex-col m-10 gap-6 text-right">
        <div className="text-5xl font-amiri text-green-darker">قصائد</div>
        <SearchBar></SearchBar>
        <div className="flex items-center justify-center gap-4">
        <PoemCard author='إسحاق الموصلي' title='إنَّ قلبي بالتَّلِّ تلِّ عزازٍ' writingType='الخفيف'></PoemCard>
        <PoemCard author='إسحاق الموصلي' title='إنَّ قلبي بالتَّلِّ تلِّ عزازٍ' writingType='الخفيف'></PoemCard>
        <PoemCard author='إسحاق الموصلي' title='إنَّ قلبي بالتَّلِّ تلِّ عزازٍ' writingType='الخفيف'></PoemCard>

        </div>
       
    </div>
  )
}
