"use client";

import { FC, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/keyboard";

import { useFetch } from "@/hooks/useFetch";
import { IRepo } from "@/constants";
import AllProjectCard from "./AllProjectCard";
import { MyFacebookLoader } from "@/helpers/SpinerLoader";

export const AllProjects: FC = () => {
  const { data, isLoading, error } = useFetch();

  const sortedProjects: IRepo[] | undefined = useMemo(() => {
    if (data && data.length > 0) {
      return (data as IRepo[]).toSorted(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }
    return undefined;
  }, [data]);

  return (
    <>
      {isLoading && <MyFacebookLoader />}
      {error && <div> Something wrong </div>}
      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={10}
        keyboard={{ enabled: true }}
        mousewheel={{
          invert: false,
          sensitivity: 1,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Keyboard, Mousewheel]}
        style={{ height: "70vh" }}
      >
        {!isLoading &&
          !error &&
          sortedProjects &&
          sortedProjects.length > 0 &&
          (sortedProjects as IRepo[]).map((project: IRepo) => {
            const isForbiddenRepo =
              project.id === 738857649 ||
              project.id === 743506471 ||
              project.fork;

            return (
              !isForbiddenRepo && (
                <SwiperSlide
                  key={project.id}
                  style={{
                    margin: 0,
                    height: "auto",
                    marginBottom: "12px",
                  }}
                >
                  <AllProjectCard {...project} />
                </SwiperSlide>
              )
            );
          })}
      </Swiper>
    </>
  );
};
