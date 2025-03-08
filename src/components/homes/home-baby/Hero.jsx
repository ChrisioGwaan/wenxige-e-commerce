import { slides20 } from "@/data/heroslides";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade slider-baby flat-spacing-25 position-relative pb_0">
      <div className="container">
        <Swiper
          dir="ltr"
          modules={[Pagination]}
          pagination={{ el: ".sph1" }}
          className="swiper tf-sw-slideshow radius-10"
        >
          {slides20.map((slide) => (
            <SwiperSlide className="swiper-slide" key={slide.id}>
              <div className="wrap-slider">
                <img
                  className="lazyload"
                  data-src={slide.imageSrc}
                  alt={slide.altText}
                  src={slide.imageSrc}
                  width={1400}
                  height={667}
                />
                <div className="box-content">
                  <div className="container">
                    <p className="fade-item fade-item-1 fw-6 d-block subheading text_white">
                      {slide.subheading}
                    </p>
                    <h2 className="fade-item fade-item-2 fw-6 heading text_white">
                      {slide.heading}
                    </h2>
                    <div className="fade-item fade-item-3">
                      <Link
                        to={`/shop-default`} // Link added directly here
                        className="tf-btn btn-light-icon animate-hover-btn btn-xl"
                      >
                        <span>Shop now</span>
                        <i className="icon icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="wrap-pagination">
            <div className="container">
              <div className="sw-dots sw-pagination-slider justify-content-center sph1" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
