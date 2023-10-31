"use client";
import Team from './Team_main'
import News from './news_main'
import Spons from './sponsors_bottom'
import Events from './events_main'
import { Carousel } from "@material-tailwind/react";

export default async function events_main({slide, news}) {
    console.log(news)
    return (
      
      <Carousel
      className=""
      nextArrow={false}
      prevArrow={false}
      autoplay={true}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slide.map((item) => (
        <a key={item.id} href={item.href}>
        <img 
        src={item.img}
        alt={item.imgAlt}
        className="h-full w-full object-cover">
        </img>
        </a>
        ))}
    </Carousel>
    )
  }

