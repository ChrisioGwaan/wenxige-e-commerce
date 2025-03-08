import { collectionData12 } from "@/data/categories";

import { Link } from "react-router-dom";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="flat-spacing-10 flat-testimonial">
      <div className="container">
        <div className="flat-title">
          <span
            className="title fw-6 wow fadeInUp font-readex-pro text_black-3"
            data-wow-delay="0s"
          >
            Shop by Category
          </span>
        </div>
        <div className="hover-sw-nav bg_dark-2 padding-content radius-10">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-testimonial"
            spaceBetween={70}
            breakpoints={{
              1024: { slidesPerView: 6 },
              768: { slidesPerView: 4 },
              0: { slidesPerView: 2 },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spdcoll1",
            }}
            navigation={{
              prevEl: ".snbpcoll1",
              nextEl: ".snbncoll1",
            }}
          >
            {collectionData12.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item-circle has-bg hover-img bg_dark-2">
                  <Link
                    to={`/shop-collection-sub`}
                    className="collection-image mw-100 img-style radius-5"
                  >
                    <img
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt="collection-img"
                      src={item.imgSrc}
                      width={160}
                      height={160}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <Link
                      to={`/shop-collection-sub`}
                      className="link title fw-6 text_white"
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg bg_dark-2 snbpcoll1">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg bg_dark-2 snbncoll1">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spdcoll1" />
        </div>
      </div>
    </section>
  );
}
