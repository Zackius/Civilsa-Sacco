import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { james } from '../img';

 const Testimonials = () => {

  return (
    <section name="testimonials" className='h-[300px] container  pt-12 '>

<>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
    
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className=" flex h-auto justify-center md:pt-16 ">
              <div>
              <p className="text-sm md:text-lg italic">
           "I took a Biashara loan and purchased a saloon vehicle. I later resigned from my job and am doing quite well with my car hire vehicle."
                </p>
                <div className="text-center">
                <h1 className=" font-bold font-italic underline">
       James Peterson Mwangi 
              </h1>
              <p >Business Man </p>
                </div>
              </div>
            
              </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className=" flex h-auto justify-center md:pt-16">
              <div>
              <p className="text-sm md:text-lg italic">
           "I took a Biashara loan and purchased a saloon vehicle. I later resigned from my job and am doing quite well with my car hire vehicle."
                </p>
                <div className="text-center">
                <h1 className=" font-bold font-italic underline">
       James Peterson Mwangi 
              </h1>
              <p >Police Officer </p>
                </div>
              </div>
            
              </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className=" flex h-auto justify-center md:pt-16">
              <div>
              <p className="text-sm md:text-lg italic">
           "I took a Biashara loan and purchased a saloon vehicle. I later resigned from my job and am doing quite well with my car hire vehicle."
                </p>
                <div className="text-center">
                <h1 className=" font-bold font-italic underline">
       Ben Kiarie Mwangi 
              </h1>
              <p >Teacher </p>
                </div>
              </div>
              </div>
            
        </SwiperSlide>
      </Swiper>
    </>
         {/* <h2 className='text-lg md:text-2xl font-bold underline '>Clients'  Testimonials </h2>
  
        </div> */}

    </section>
  )
}

export default Testimonials