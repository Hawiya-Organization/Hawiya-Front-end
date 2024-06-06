'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import FeaturedCard from './Featured.card'
import moufdi from '../../public/moufdi.png'
import axios from 'axios';

export default function Featured() {
        const [authors, setAuthors] = useState([])
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState('');
        const pagination = {
                clickable: true,
                renderBullet: function (index: any, className: string) {
                  return '<span class="custom-pagination-bullet ' + className + '">' + '' + '</span>';
                },
              };

              useEffect(() => {
                const fetchPoems = async () => {
                  try {
                    const response = await axios.get('/api/authors/index');
                    console.log(response)
                    const allAuthors = response.data.data;

                    const shuffledAuthors = allAuthors.sort(() => 0.5 - Math.random());
                    const selectedAuthors = shuffledAuthors.slice(0, 5);
                    setAuthors(selectedAuthors);
                    setLoading(false);
                  } catch (error) {
                    console.error('Error fetching poems:', error);
                    setError('Failed to fetch poems');
                    setLoading(false);
                  }
                };
            
                fetchPoems();
              }, []);
       
  return (
    <div className="flex flex-col h-screen mt-10 overflow-hidden gap-20 items-center justify-center relative">
        <h2 className='text-4xl z-50'>مختارات</h2>
        <div className='relative flex w-full items-center justify-center'>
        <div className=" absolute rounded-full bg-opacity-80 bg-green-light blur-[50px] h-[500px] w-[500px] "></div>
        <Swiper
        initialSlide={1}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {authors.map((author, index)=>(
                <SwiperSlide key={index}>
                        <FeaturedCard id={author.id} author={author.name} biography={author.bio} pic={''}></FeaturedCard>
                </SwiperSlide>
                ))}
        </Swiper>
        </div>

       
    </div>
  )
}
