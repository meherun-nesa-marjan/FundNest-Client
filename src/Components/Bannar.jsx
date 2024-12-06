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
        <div className='m-10'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="bg-bannar3 bg-cover bg-no-repeat h-full py-64">
                        <div className="w-5/12 mx-auto bg-[#FCC9B4] border-[#754738] rounded-2xl py-16">
                            <h1 className='font-bold text-3xl text-[#754738]'>Unleash Creativity, Transform Lives</h1>
                            <p className='font-bold text-xl text-[#754738]'>"Support the creators who dare to dream and innovate. Your kindness shapes the future of art."</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar1 bg-cover bg-no-repeat h-full py-64">
                        <div className="w-5/12 mx-auto bg-[#FCC9B4] border-[#754738] rounded-2xl py-16">
                            <h1 className='font-bold text-3xl text-[#754738]'>Together for Better Health</h1>
                            <p className='font-bold text-xl text-[#754738]'>"Join us in bringing healthcare to those in need. Every effort matters."</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar2 bg-cover bg-no-repeat h-full py-64">
                        <div className="w-5/12 mx-auto bg-[#FCC9B4] border-[#754738] rounded-2xl py-16">
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