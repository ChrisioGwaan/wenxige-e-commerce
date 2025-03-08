import { slides24 } from "@/data/heroslides";

import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade position-relative">
      <Swiper
        dir="ltr"
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          el: ".spdh1",
        }}
      >
        {slides24.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <img
                className="lazyload"
                data-src={slide.imgSrc}
                src={slide.imgSrc}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
              />
              <div className="box-content">
                <div className="container">
                  <h1 className="fade-item fade-item-1 text-white heading font-libre-baskerville">
                    {slide.heading}
                  </h1>
                  <p className="fade-item fade-item-2 text-white">
                    {slide.description}
                  </p>
                  <Link
                    to={`/shop-collection-list`}
                    className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn rounded-0"
                  >
                    <span>SHOP NOW</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination pos2">
        <div className="container">
          <div className="sw-dots sw-pagination-slider rectangle-pagination rectangle-white justify-content-center spdh1" />
        </div>
      </div>
    </section>
  );
}
