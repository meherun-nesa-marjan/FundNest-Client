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
        <div className=' my-5'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="bg-bannar3 bg-cover bg-no-repeat bg-center  h-48 py-40 lg:py-64 relative">
                       
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                        {/* Content */}
                        <div className="lg:w-5/12 w-full mx-auto relative z-10 text-center">
                            <h1 className="font-bold text-3xl text-white">Unleash Creativity, Transform Lives</h1>
                            <p className="font-bold text-xl text-white">
                                "Support the creators who dare to dream and innovate. Your kindness shapes the future of art."
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar1 bg-cover bg-center bg-no-repeat h-48 py-40 lg:py-64 relative">
                      
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                        {/* Text Content */}
                        <div className="relative lg:w-5/12 w-full mx-auto text-center">
                            <h1 className="font-bold text-3xl text-white">Together for Better Health</h1>
                            <p className="font-bold text-xl text-white">
                                "Join us in bringing healthcare to those in need. Every effort matters."
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar2 bg-cover bg-center bg-no-repeat h-48  py-40 lg:py-64 relative">

                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    {/* Text Content */}
                        <div className="relative lg:w-5/12 w-full mx-auto text-center">
                            <h1 className='font-bold text-3xl text-white'>Inspiring the Leaders of Tomorrow</h1>
                            <p className='font-bold text-xl text-white'>"Your support helps young minds achieve their dreams."</p>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Bannar;