import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import { dummyCards } from "../../public/Data/dummyData";
import ThreeCards from './ThreeCards'

export default function ThreeCardCarousel() {
  return (
    <div className="w-full swiper-container three-swiper-container relative">
      <div className="md:ml-56">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={2.5}
          loop={true}
          navigation={true}
          a11y={{ enabled: true }}
          breakpoints={{
            360: { slidesPerView: 1.5, spaceBetween: 10 },
            768: { slidesPerView: 2.5, spaceBetween: 10 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1280: { slidesPerView: 2.5, spaceBetween: 20 },
          }}
        >
          {dummyCards.map((item) => (
            <SwiperSlide key={item.id}>
              <ThreeCards data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
