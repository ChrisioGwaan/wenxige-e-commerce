import { swiperData3 } from "@/data/categories";

import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="pt_0 flat-spacing-1">
      <div className="container">
        <Swiper
          dir="ltr"
          className="swiper tf-sw-collection"
          spaceBetween={15} // This corresponds to `data-space`
          breakpoints={{
            1024: {
              slidesPerView: 2, // This corresponds to `data-preview` for tablet and desktop
            },
            768: {
              slidesPerView: 2, // This corresponds to `data-tablet`
            },
            0: {
              slidesPerView: 1, // This corresponds to `data-mobile`
            },
          }}
          data-loop="false"
          data-auto-play="false"
        >
          {swiperData3.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="banner-gr-item text-center hover-img">
                <Link to={`/shop-default`} className="img-style">
                  <img
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.alt}
                    width={600}
                    height={434}
                    src={item.imgSrc}
                  />
                </Link>
                <div className="content">
                  <div className="title font-libre-baskerville">
                    <Link to={`/shop-default`} className="link">
                      {item.title}
                    </Link>
                  </div>
                  <Link to={`/shop-default`} className="tf-btn btn-line fw-6">
                    Shop Collection
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-dots style-2 sw-pagination-collection justify-content-center" />
        </Swiper>
      </div>
    </section>
  );
}
