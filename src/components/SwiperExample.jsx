import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AudiImg from '../assets/images.jpeg'

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

export default function SwiperExample() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className='h-[500px] w-[500px]'>
        <SwiperSlide className='flex items-center justify-center relative'>
            <div className='w-[500px] h-[500px] bg-white relative z-20'>
            <img src={AudiImg} className='absolute top-0 left-0 w-full h-full' alt="audi" />
            </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>Slide 2</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
