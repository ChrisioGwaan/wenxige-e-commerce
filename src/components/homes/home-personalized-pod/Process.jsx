import { slidesData } from "@/data/process";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Process() {
  return (
    <section className="flat-spacing-4 section-cls-personalized-pod section-full-1">
      <img
        className=""
        data-src="/images/collections/bg-personalized-pod-2.png"
        alt=""
        src="/images/collections/bg-personalized-pod-2.png"
        width={2000}
        height={770}
      />
      <div className="container">
        <div className="flat-title lg">
          <span className="title fw-6 text-center">How it works</span>
        </div>
        <div className="flat-iconbox-v3 lg">
          <div className="wrap-carousel wrap-mobile">
            <div
              dir="ltr"
              className="swiper tf-sw-mobile for-no-mobile"
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper wrap-iconbox lg">
                {slidesData.map((slide, index) => (
                  <div className="swiper-slide" key={index}>
                    <div
                      className="blog-circle-box text-center wow fadeInUp"
                      data-wow-delay={slide.wowDelay}
                    >
                      <div className="img-box">
                        <img
                          className="lazyload img-product"
                          data-src={slide.imgSrc}
                          alt={slide.alt}
                          src={slide.imgSrc}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="content bg_red-1">
                        <h5 className="text_white">{slide.title}</h5>
                        <p className="text_black-2 text-base2 text_white">
                          {slide.description}
                        </p>
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
                el: ".spdpro1",
              }}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="blog-circle-box text-center wow fadeInUp"
                    data-wow-delay={slide.wowDelay}
                  >
                    <div className="img-box">
                      <img
                        className="lazyload img-product"
                        data-src={slide.imgSrc}
                        alt={slide.alt}
                        src={slide.imgSrc}
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="content bg_red-1">
                      <h5 className="text_white">{slide.title}</h5>
                      <p className="text_black-2 text-base2 text_white">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="sw-dots style-2 sw-pagination-mb justify-content-center spdpro1  tf-sw-mobile-pagination" />
          </div>
        </div>
        {/* <div  className="radius-20">
            </div> */}
      </div>
    </section>
  );
}
