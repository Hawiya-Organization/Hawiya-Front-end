import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pen from '@/public/pen-green.webp';

interface IPoem {
  id: number;
  author: string;
  title: string;
  writingType: string;
}

export default function PoemCard({ id, author, title, writingType }: IPoem) {
  return (
<Link href={`/display_poem?id=${id}`}>
        <div className="flex flex-col w-[280px] h-[160px] p-8 gap-4 rounded-xl bg-green-light hover:shadow-lg transition-shadow duration-300">
          <div className="text-2xl font-amiri text-center text-green-darker">{title}</div>
          <div className="flex gap-6 items-center">
            <div className="rounded-xl font-noto text-md py-1 px-2 bg-green">
              {writingType}
            </div>
            <div className="flex items-center font-amiri gap-4">
              <p className="text-xl">{author}</p>
              <Image height={48} src={pen} alt="pen" />
            </div>
          </div>
        </div>
    </Link>
  );
}
