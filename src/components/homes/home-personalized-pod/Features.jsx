import { slides23 } from "@/data/features";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section
      className="flat-spacing-1 flat-iconbox wow fadeInUp bg_fef4e8 radius-20 section-full-1"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="wrap-carousel wrap-mobile">
          <div
            dir="ltr"
            className="swiper tf-sw-mobile for-no-mobile"
            data-preview={1}
            data-space={15}
          >
            <div className="swiper-wrapper wrap-iconbox">
              {slides23.map((slide, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="tf-icon-box style-row">
                    <div className="icon bg_red-1">
                      <i className={`text_white ${slide.iconClass}`} />
                    </div>
                    <div className="content">
                      <div className="title">{slide.title}</div>
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
              el: ".spdf3",
            }}
          >
            {slides23.map((slide, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="tf-icon-box style-row">
                  <div className="icon bg_red-1">
                    <i className={`text_white ${slide.iconClass}`} />
                  </div>
                  <div className="content">
                    <div className="title">{slide.title}</div>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb justify-content-center spdf3  tf-sw-mobile-pagination" />
        </div>
      </div>
    </section>
  );
}
