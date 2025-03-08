import { sliderData6 } from "@/data/heroslides";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <section className="flat-spacing-3">
      <div className="tf-slideshow slider-radius slider-effect-fade position-relative">
        <div className="container">
          <Swiper
            dir="ltr"
            delay={2000}
            speed={1000}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdh1",
            }}
            className="tf-sw-slideshow"
          >
            {sliderData6.map((slide, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="wrap-slider">
                  <img
                    className="lazyload"
                    data-src={slide.imgSrc}
                    src={slide.imgSrc}
                    alt={slide.alt}
                    width={1600}
                    height={762}
                  />
                  <div className="box-content">
                    <div className="container">
                      <h2
                        className="fade-item fade-item-1 fw-6 text_white heading font-libre-baskerville mb_14"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      ></h2>
                      <p className="fade-item fade-item-2 text_white">
                        {slide.description}
                      </p>
                      <Link
                        to={`/shop-default`} // Added the link directly here
                        className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
                      >
                        <span>Shop collection</span>
                        <i className="icon icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="wrap-pagination">
              <div className="container">
                <div className="sw-dots line-white-pagination sw-pagination-slider justify-content-start spdh1"></div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
