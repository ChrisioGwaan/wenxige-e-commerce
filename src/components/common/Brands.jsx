import { brandData } from "@/data/brands";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
export default function Brands({ parentClass = "flat-spacing-1" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <Swiper
          dir="ltr"
          className="swiper tf-sw-brand"
          loop={false} // Equivalent to data-loop="false"
          autoplay={false} // Equivalent to data-play="false"
          spaceBetween={0} // Equivalent to data-space-lg
          slidesPerView={6} // Equivalent to data-preview
          breakpoints={{
            1024: {
              slidesPerView: 5.95, // Equivalent to data-tablet
              spaceBetween: 0, // Equivalent to data-space-md
            },
            640: {
              slidesPerView: 2.95, // Equivalent to data-tablet
              spaceBetween: 0, // Equivalent to data-space-md
            },
            0: {
              slidesPerView: 1.95, // Equivalent to data-mobile
              spaceBetween: 0, // Equivalent to data-space-md
            },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".sp106" }}
        >
          {brandData.map((brand, index) => (
            <SwiperSlide key={index}>
              <div
                className={`brand-item ${
                  index == brandData.length - 1 ? "border-done" : ""
                }`}
              >
                <img
                  className="lazyload"
                  data-src={brand.src}
                  alt={brand.alt}
                  src={brand.src}
                  width={brand.width}
                  height={brand.height}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-md-none sw-dots style-2 sw-pagination-brand justify-content-center sp106" />
      </div>
    </section>
  );
}
