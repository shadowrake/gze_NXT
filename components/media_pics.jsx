"use client";
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {cn} from "../lib/utils/cn"
import 'swiper/css'



export default function Main_media({media}) {
    // difines the swiper with use state
    const [swiper, setSwiper] = useState(null)
    const [showNavigation, setShowNavigation] = useState(false)

    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                
            {/* Picture gallery */}
            <Swiper
                spaceBetween={10}
                onSwiper={setSwiper}
                className='h-1/4 w-3/4 rounded-lg'
                >
                {media.map((media) => (
                    <SwiperSlide key={media.id}>
                    <div className="flex h-full w-full items-center justify-center">
                        <img src={media.imgUrl} alt={media.imgAlt} className="block h-full w-full object-cover" />
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* thumbnails under the gallery */}
            <nav className={cn('my-10', !showNavigation )}>
                <ul className='flex mt-6 grid grid-cols-3 gap-x-8 gap-y-15 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
                    {media.map((media, index) => (
                    <li key={media.id}>
                        <button
                        onClick={() => {
                            swiper.slideTo(index)
                        }}
                        className='relative block h-30 w-30 overflow-hidden rounded-lg'
                        >
                        <img
                            src={media.imgUrl}
                            alt={media.imgAlt}
                            className='block mb-3 h-full w-full object-cover'
                        />
                        </button>
                    </li>
                    ))}
                </ul> 
        </nav>
        </div>
        </div>
    )
  }