import { slides25 } from "@/data/heroslides";

import { Link } from "react-router-dom";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-personalized-pod">
      <Swiper
        dir="ltr"
        className="swiper tf-sw-slideshow"
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 1 }, // tablet
          1024: { slidesPerView: 1.6 }, // preview (desktop)
        }}
        centeredSlides
        spaceBetween={30}
        loop
        initialSlide={1}
        modules={[Navigation]}
        navigation={{
          prevEl: ".snbps1",
          nextEl: ".snbns1",
        }}
      >
        {slides25.map((elm, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="wrap-slider">
              <img
                className="lazyload"
                alt="fashion-slideshow"
                src={elm.imgSrc}
                width={1400}
                height={909}
              />
              <div className="box-content text-center">
                <div className="container">
                  <h2
                    className="fade-item fade-item-1 heading text_white fw-6"
                    dangerouslySetInnerHTML={{ __html: elm.title }}
                  ></h2>
                  <div className="fade-item fade-item-2 sub">
                    <p className="text_white desc">{elm.desc}</p>
                    <div className="d-flex gap-12 align-items-center justify-content-center">
                      <div className="d-flex gap-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          viewBox="0 0 14 13"
                          fill="#FF8A00"
                          className="hdt-last_star"
                        >
                          <path
                            d="M6.84211 10.4479L11.0705 13L9.94842 8.19L13.6842 4.95368L8.76474 4.53632L6.84211 0L4.91947 4.53632L0 4.95368L3.73579 8.19L2.61368 13L6.84211 10.4479Z"
                            fill="#FF8A00"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          viewBox="0 0 14 13"
                          fill="#FF8A00"
                          className="hdt-last_star"
                        >
                          <path
                            d="M6.84211 10.4479L11.0705 13L9.94842 8.19L13.6842 4.95368L8.76474 4.53632L6.84211 0L4.91947 4.53632L0 4.95368L3.73579 8.19L2.61368 13L6.84211 10.4479Z"
                            fill="#FF8A00"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          viewBox="0 0 14 13"
                          fill="#FF8A00"
                          className="hdt-last_star"
                        >
                          <path
                            d="M6.84211 10.4479L11.0705 13L9.94842 8.19L13.6842 4.95368L8.76474 4.53632L6.84211 0L4.91947 4.53632L0 4.95368L3.73579 8.19L2.61368 13L6.84211 10.4479Z"
                            fill="#FF8A00"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          viewBox="0 0 14 13"
                          fill="#FF8A00"
                          className="hdt-last_star"
                        >
                          <path
                            d="M6.84211 10.4479L11.0705 13L9.94842 8.19L13.6842 4.95368L8.76474 4.53632L6.84211 0L4.91947 4.53632L0 4.95368L3.73579 8.19L2.61368 13L6.84211 10.4479Z"
                            fill="#FF8A00"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={16}
                          viewBox="0 0 14 13"
                          fill="#FF8A00"
                          className="hdt-last_star"
                        >
                          <path
                            d="M6.84211 10.4479L11.0705 13L9.94842 8.19L13.6842 4.95368L8.76474 4.53632L6.84211 0L4.91947 4.53632L0 4.95368L3.73579 8.19L2.61368 13L6.84211 10.4479Z"
                            fill="#FF8A00"
                          />
                        </svg>
                      </div>
                      <span className="text text_white">
                        300K Five-Star Reviews
                      </span>
                    </div>
                  </div>
                  <div className="fade-item fade-item-3">
                    <Link
                      to={`/shop-collection-sub`}
                      className="tf-btn btn-primary animate-hover-btn btn-xl radius-60"
                    >
                      <span>Shop collection</span>
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
        <div className="nav-sw style-white nav-next-slider navigation-next-slider box-icon w_46 round snbps1">
          <span className="icon icon-arrow-left" />
        </div>
        <div className="nav-sw style-white nav-prev-slider navigation-prev-slider box-icon w_46 round snbns1">
          <span className="icon icon-arrow-right" />
        </div>
      </div>
    </section>
  );
}
