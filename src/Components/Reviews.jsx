import React from 'react'

import { Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { girl1, girl2, boy } from '../assets';

const Reviews = () => {
  return (
    <section>
      <div>
        <h1 className='text-center text-[#141415] lg:text-[36px] text-[25px] font-bold'>Reviews</h1>
        <p className='text-[#141415] lg:text-[24px] text-[17px] font-medium text-center'>What our clients say about us</p>
      </div>
      <Swiper
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='lg:px-14 lg:mt-10 mt-7'
      breakpoints={{
        // when window width is <= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is <= 768px
        768: {
          slidesPerView: 1,
        },
        // when window width is <= 1024px
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <div>
          <img src={girl1} alt="" className='mx-auto'/>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Halimat</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'><span className='text-[#307098]'>Fashion Fit</span> is the best platform to get your outfits, So affordable & of good quality. I have been patronizing them for years.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={boy} alt="" className='mx-auto'/>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Michael</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'><span className='text-[#307098]'>Fashion Fit</span> always deliver on time and their wears are top notch. I will recommend them <br className='lg:block hidden'/> anyday anytime.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={girl2} alt="" className='mx-auto'/>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Susan</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'>The wears I get on <span className='text-[#307098]'>Fashion Fit</span> are so affordable. I get my orders on time & they are always great. <br className='lg:block hidden'/> A must have.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={girl1} alt="" className='mx-auto'/>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Halimat</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'><span className='text-[#307098]'>Fashion Fit</span> is the best platform to get your outfits, So affordable & of good quality. I have been patronizing them for years.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={boy} alt="" className='mx-auto'/>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Michael</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'><span className='text-[#307098]'>Fashion Fit</span> always deliver on time and their wears are top notch. I will recommend them <br className='lg:block hidden'/> anyday anytime.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={girl2} alt="" className='mx-auto'/>
          <h1 className='text-center text-[16px] font-bold text-[#141415] mt-3'>Susan</h1>
          <p className='text-center text-[14px] text-[#141415] mt-2'>The wears I get on <span className='text-[#307098]'>Fashion Fit</span> are so affordable. I get my orders on time & they are always great. <br className='lg:block hidden'/> A must have.</p>
        </div>  
      </SwiperSlide><br /><br />
    </Swiper>
    </section>
  )
}

export default Reviews