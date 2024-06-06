"use client"
import PoemCard from '@/components/Peoms/poem.card';
import SearchBar from '@/components/Peoms/search.bar';
import React from 'react';

export default function PoemsPage() {
  const poems = [
    { id: 1, author: 'إسحاق الموصلي', title: 'إنَّ قلبي بالتَّلِّ تلِّ عزازٍ', writingType: 'الخفيف' },
    { id: 2, author: 'إسحاق الموصلي', title: 'إنَّ قلبي بالتَّلِّ تلِّ عزازٍ', writingType: 'الخفيف' },
    { id: 3, author: 'إسحاق الموصلي', title: 'إنَّ قلبي بالتَّلِّ تلِّ عزازٍ', writingType: 'الخفيف' },
  ];

  return (
    <div className="flex flex-col m-10 gap-6 text-right">
      <div className="text-5xl font-amiri text-green-darker">قصائد</div>
      <SearchBar />
      <div className="flex items-center justify-center gap-4">
        {poems.map(poem => (
          <PoemCard
            key={poem.id}
            id={poem.id}
            author={poem.author}
            title={poem.title}
            writingType={poem.writingType}
          />
        ))}
      </div>
    </div>
  );
}
