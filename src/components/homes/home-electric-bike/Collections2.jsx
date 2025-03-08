import { collectionSlides3 } from "@/data/categories";

import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections2() {
  return (
    <section className="flat-spacing-9">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span
            className="title wow fadeInUp font-sora fw-6"
            data-wow-delay="0s"
          >
            Bikes that fit your lifestyle
          </span>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          spaceBetween={30}
          slidesPerView={4.6}
          breakpoints={{
            1150: {
              slidesPerView: 4.6,
            },
            768: { slidesPerView: 2.6 },
            0: { slidesPerView: 1.6 },
          }}
          className="swiper tf-sw-product-sell sw-wrapper-right"
        >
          {collectionSlides3.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item style-2 hover-img">
                <div className="collection-inner">
                  <Link
                    to={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <img
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={360}
                      height={503}
                    />
                  </Link>
                  <div className="collection-content">
                    <Link
                      to={`/shop-collection-sub`}
                      className="tf-btn collection-title hover-icon fs-20 rounded-full font-sora"
                    >
                      <span>{slide.title}</span>
                      <i className="icon icon-arrow1-top-left" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
