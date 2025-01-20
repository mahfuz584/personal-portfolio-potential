"use client";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialList = () => {
  return (
    <div>
      <Swiper
        style={{ paddingBottom: "70px" }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        centerInsufficientSlides={true}
        speed={1000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={true}
        modules={[Pagination, EffectCoverflow, Autoplay, FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 1.7,
            spaceBetween: 120,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 10,
              modifier: -20,
              slideShadows: false,
            },
          },
        }}
      >
        {testimonials?.map(({ image, message, name, company }, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-auto bg-bgSemiGray md:p-8 p-6 rounded-lg shadow-lg flex flex-col md:flex-row  items-center gap-8">
              <Image
                src={image}
                alt="Testimonial"
                width={1000}
                height={1000}
                className="md:size-[235px] sm:size-[180px] size-[80px]  rounded-full"
              />
              <div>
                <p className="dark:text-black md:text-text-lg2 text-text-sm relative">
                  <span className="text-brandColor font-[700] text-2xl absolute -left-5 -top-2 rotate-12">
                    &ldquo;
                  </span>
                  {message}
                  <span className="text-brandColor font-[700] text-2xl absolute md:right-[38%] sm:right-[26%]  -bottom-1 -rotate-[177deg]">
                    &rdquo;
                  </span>
                </p>

                <p className="md:text-text-xl text-text-base dark:text-black font-[500] mt-4">
                  {name}
                </p>
                <p className="md:text-text-lg2 text-text-sm dark:text-black">
                  {company}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialList;
