import { collectionData8 } from "@/data/categories";

import { Link } from "react-router-dom";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  return (
    <section className="flat-spacing-3 flat-categorie">
      <div className="container">
        <div className="flat-title-v2">
          <div className="box-sw-navigation">
            <div className="nav-sw nav-next-slider nav-next-collection snbpc1">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw nav-prev-slider nav-prev-collection snbnc1">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
          <span
            className="text-3 fw-7 text-uppercase title wow fadeInUp"
            data-wow-delay="0s"
          >
            SHOP BY CATEGORIES
          </span>
        </div>
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-8">
            <Swiper
              dir="ltr"
              spaceBetween={15}
              breakpoints={{
                1200: { slidesPerView: 3, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                0: { slidesPerView: 2, spaceBetween: 15 },
              }}
              loop={false}
              autoplay={false}
              className="tf-sw-collection"
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbpc1",
                nextEl: ".snbnc1",
              }}
            >
              {collectionData8.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="collection-item style-left hover-img">
                    <div className="collection-inner">
                      <Link
                        to={`/shop-default`}
                        className="collection-image img-style"
                      >
                        <img
                          className="lazyload"
                          data-src={item.imgSrc}
                          alt={item.alt}
                          src={item.imgSrc}
                          width={600}
                          height={731}
                        />
                      </Link>
                      <div className="collection-content left-0">
                        <Link
                          to={`/shop-default`}
                          className="tf-btn collection-title hover-icon fs-15"
                        >
                          <span>{item.title}</span>
                          <i className="icon icon-arrow1-top-left" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4">
            <div className="discovery-new-item">
              <h5>Discovery all new items</h5>
              <Link to={`/shop-collection-list`}>
                <i className="icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
