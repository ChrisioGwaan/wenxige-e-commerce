import { slides23 } from "@/data/heroslides";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-home-5 position-relative">
      <Swiper
        dir="ltr"
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        centeredSlides={false}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".spdh1",
        }}
      >
        {slides23.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <img
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc}
                width={2000}
                height={851}
              />
              <div className="box-content text-center">
                <div className="container">
                  <h1 className="fade-item fade-item-1 text-white heading">
                    {slide.title}
                  </h1>
                  <Link
                    to={`/shop-collection-list`}
                    className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-60 text_green-1"
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
          <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center spdh1" />
        </div>
      </div>
    </section>
  );
}
