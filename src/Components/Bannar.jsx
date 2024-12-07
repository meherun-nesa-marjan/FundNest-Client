import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


const Bannar = () => {
    return (
        <div className='lg:m-10 m-0'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="bg-bannar3 bg-cover bg-no-repeat bg-center lg:h-full py-40 lg:py-64">
                        <div className="lg:w-5/12 w-full mx-auto  border-[#754738] rounded-2xl py-16">
                            <h1 className='font-bold text-3xl text-[#754738]'>Unleash Creativity, Transform Lives</h1>
                            <p className='font-bold text-xl text-[#754738]'>"Support the creators who dare to dream and innovate. Your kindness shapes the future of art."</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar1 bg-cover bg-center bg-no-repeat lg:h-full py-40 lg:py-64">
                        <div className="lg:w-5/12 w-full mx-auto  border-[#754738] rounded-2xl py-16">
                            <h1 className='font-bold text-3xl text-[#754738]'>Together for Better Health</h1>
                            <p className='font-bold text-xl text-[#715d57]'>"Join us in bringing healthcare to those in need. Every effort matters."</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar2 bg-cover bg-center bg-no-repeat lg:h-full py-40 lg:py-64">
                        <div className="lg:w-5/12 w-full mx-auto  border-[#754738] rounded-2xl py-16">
                            <h1 className='font-bold text-3xl text-[#754738]'>Inspiring the Leaders of Tomorrow</h1>
                            <p className='font-bold text-xl text-[#754738]'>"Your support helps young minds achieve their dreams."</p>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Bannar;