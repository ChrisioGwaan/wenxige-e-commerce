import { slides21 } from "@/data/heroslides";

import { Link } from "react-router-dom";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-camp-and-hike">
      <Swiper
        dir="ltr"
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerGroupAuto
        initialSlide={1}
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile
          },
          768: {
            slidesPerView: 1, // Tablet
          },
          1200: {
            slidesPerView: 1.6, // Desktop
          },
        }}
        speed={1000}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          prevEl: ".snbhp1",
          nextEl: ".snbhn1",
        }}
        className="tf-sw-slideshow"
      >
        {slides21.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <img
                className="lazyload"
                data-src={slide.imgSrc}
                src={slide.imgSrc}
                alt={slide.alt}
                width={1000}
                height={649}
              />
              <div className="box-content text-center">
                <div className="container">
                  <h2 className="fade-item fade-item-1 heading text_white fw-7">
                    {slide.heading}
                  </h2>
                  <p className="fade-item fade-item-2 text_white">
                    {slide.description}
                  </p>
                  <div className="fade-item fade-item-3">
                    <Link
                      to={`/shop-collection-sub`}
                      className="tf-btn btn-outline-light fw-5 btn-xl rounded-0"
                    >
                      <span>Shop Collection</span>
                      <i className="icon icon-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container wrap-navigation">
        <div className="nav-sw style-white nav-next-slider navigation-next-slider box-icon w_46 round snbhp1">
          <span className="icon icon-arrow-left" />
        </div>
        <div className="nav-sw style-white nav-prev-slider navigation-prev-slider box-icon w_46 round snbhn1">
          <span className="icon icon-arrow-right" />
        </div>
      </div>
    </section>
  );
}
