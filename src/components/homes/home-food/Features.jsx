import { slides22 } from "@/data/categories";

import { Link } from "react-router-dom";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-18 bg_beige-4">
      <div className="container">
        <div
          className="flat-title mb-lg text-center wow fadeInUp"
          data-wow-delay="0s"
        >
          <span className="title">
            Discover the benefits of a <br />
            plant-based diet
          </span>
        </div>
        <div
          className="flat-iconbox wrap-mobile wow fadeInUp"
          data-wow-delay="0s"
        >
          <div
            dir="ltr"
            className="swiper tf-sw-mobile for-no-mobile"
            data-preview={1}
            data-space={15}
          >
            <div className="swiper-wrapper wrap-iconbox">
              {slides22.map((slide, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="tf-icon-box style-lg text-center">
                    <div className="icon">
                      <img
                        alt=""
                        src={slide.src}
                        width={slide.width}
                        height={slide.height}
                      />
                    </div>
                    <div className="content">
                      <Link
                        href="/shop-default"
                        className="title link fw-normal"
                      >
                        {slide.title}
                      </Link>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Swiper
            dir="ltr"
            className="swiper tf-sw-mobile for-mobile"
            spaceBetween={15}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdcol1",
            }}
          >
            {slides22.map((slide, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="tf-icon-box style-lg text-center">
                  <div className="icon">
                    <img
                      alt=""
                      src={slide.src}
                      width={slide.width}
                      height={slide.height}
                    />
                  </div>
                  <div className="content">
                    <Link to="/shop-default" className="title link fw-normal">
                      {slide.title}
                    </Link>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="d-flex d-md-none sw-dots style-2 sw-pagination-mb justify-content-center spdcol1  tf-sw-mobile-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
