"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/keyboard";

import { ServiceData, IServiceData } from "@/constants";
import { Container } from "./Container";

const ServiceSlider: FC = () => {
  return (
    <Container>
      <Swiper
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        keyboard={{ enabled: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Keyboard]}
      >
        {ServiceData.map(
          ({ title, backgroundImage, Icon, content }: IServiceData) => (
            <SwiperSlide key={title}>
              <div className="rounded-md cursor-pointer flex flex-col gap-6 mb-10 group relative text-white shadow-lg px-6 py-8 h-[300px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <Icon className="text-blue-200  group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl font-semibold">{title}</h1>
                  <p className="text-lg lg:text-xl">{content}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </Container>
  );
};

export default ServiceSlider;
