"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/keyboard";

import { Projects } from "@/constants";
import { ProjectSliderCard } from "./ProjectSliderCard";

const ProjectSlider = () => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
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
      {Projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectSliderCard project={project} />
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default ProjectSlider;
