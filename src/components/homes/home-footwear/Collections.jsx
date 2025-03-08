import { slides21 } from "@/data/categories";

import { Link } from "react-router-dom";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="">
      <div className="container">
        <div
          className="masonry-layout-v4 type-1 wow fadeInUp"
          data-wow-delay="0s"
        >
          <div className="item-1">
            <div className="tf-slideshow slider-effect-fade position-relative slider-footwear">
              <Swiper
                dir="ltr"
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000 }}
                speed={1000}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd337",
                }}
              >
                {slides21.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="collection-item-v4 st-lg style-2 hover-img">
                      <div className="collection-inner">
                        <Link
                          to={`/shop-collection-sub`}
                          className="collection-image img-style rounded-0 o-hidden"
                        >
                          <img
                            className="lazyload"
                            data-src={slide.imgSrc}
                            alt={slide.alt}
                            src={slide.imgSrc}
                            width={1600}
                            height={1453}
                          />
                        </Link>
                        <div
                          className="collection-content text-start wow fadeInUp"
                          data-wow-delay={slide.wowDelay}
                        >
                          <h2 className="text-white">
                            {slide.title.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </h2>
                          <p className="subtext text-white">{slide.subtitle}</p>
                          <Link
                            to={`/shop-collection-sub`}
                            className="fade-item fade-item-3 tf-btn btn-outline-light fw-5 btn-xl radius-3"
                          >
                            <span>Shop collection</span>
                            <i className="icon icon-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="wrap-pagination">
                <div className="container">
                  <div className="sw-dots line-white-pagination sw-pagination-slider justify-content-md-end justify-content-center spd337" />
                </div>
              </div>
            </div>
          </div>
          <div className="item-2 collection-item-v2 hover-img">
            <Link to={`/shop-collection-sub`} className="collection-inner">
              <div className="collection-image img-style">
                <img
                  className="lazyload"
                  data-src="/images/collections/banner-cls-footwear-2.jpg"
                  alt="collection-img"
                  src="/images/collections/banner-cls-footwear-2.jpg"
                  width={800}
                  height={725}
                />
              </div>
              <div className="collection-content">
                <div className="top wow fadeInUp" data-wow-delay="0s">
                  <h5 className="heading">Footwear Collection</h5>
                  <p className="subheading">Start from $199</p>
                </div>
                <div className="bottom wow fadeInUp" data-wow-delay="0s">
                  <button className="tf-btn btn-line collection-other-link fw-6">
                    <span>Shop now</span>
                    <i className="icon icon-arrow1-top-left" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
          <div className="item-3 collection-item-v2 hover-img">
            <Link to={`/shop-collection-sub`} className="collection-inner">
              <div className="collection-image img-style">
                <img
                  className="lazyload"
                  data-src="/images/collections/banner-cls-footwear-3.jpg"
                  alt="collection-img"
                  src="/images/collections/banner-cls-footwear-3.jpg"
                  width={800}
                  height={725}
                />
              </div>
              <div className="collection-content">
                <div className="top wow fadeInUp" data-wow-delay="0s">
                  <h5 className="heading text_white">Shoes Collection</h5>
                  <p className="subheading text_white">Start from $88</p>
                </div>
                <div className="bottom wow fadeInUp" data-wow-delay="0s">
                  <button className="tf-btn btn-line btn-line-light collection-other-link fw-6">
                    <span>Shop now</span>
                    <i className="icon icon-arrow1-top-left" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
