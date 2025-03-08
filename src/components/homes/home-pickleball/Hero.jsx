import { products65 } from "@/data/products";

import { Link } from "react-router-dom";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade slider-skincare position-relative">
      <Swiper
        dir="ltr"
        className="swiper tf-sw-slideshow"
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          el: ".spdh1",
        }}
        autoplay={{
          delay: 3000,
        }}
        speed={1000}
      >
        {products65.map((product, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="wrap-slider">
              <img
                className="lazyload"
                src={product.imgSrc}
                alt="slideshow"
                width="2000"
                height="1125"
              />
              <div className="box-content">
                <div className="container">
                  <div className="card-box-2">
                    <div className="fade-item fade-item-1 text-extra-heading text_white fw-8">
                      Frank <br /> lin
                    </div>
                    <div className="fade-item fade-item-1 title">
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="link text-white"
                      >
                        {product.title.split(" ").slice(0, 5).join(" ")}
                        <br className="d-none d-md-block" />{" "}
                        {product.title.split(" ").slice(5).join(" ")}
                      </Link>
                    </div>
                    <div className="fade-item fade-item-2 price">
                      <span className="old-price">
                        ${product.price.toFixed(2)}
                      </span>{" "}
                      <span className="new-price text_primary">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="fade-item fade-item-3">
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="tf-btn btn-line btn-line-light collection-other-link fw-6"
                      >
                        <span>Shop now</span>
                        <i className="icon icon-arrow1-top-left" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination sw-absolute-3">
        <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center spdh1" />
      </div>
    </div>
  );
}
