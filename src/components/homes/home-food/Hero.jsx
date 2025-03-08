import { sliderData5 } from "@/data/heroslides";

import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade position-relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true, el: ".spdhhf" }}
        autoplay={{ delay: 2000 }}
        speed={1000}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {sliderData5.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <img
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc}
                width={2000}
                height={838}
              />
              <div className="box-content">
                <div className="container">
                  <h1
                    className="fade-item fade-item-1 text-white heading"
                    dangerouslySetInnerHTML={{ __html: slide.heading }}
                  ></h1>
                  <p className="fade-item fade-item-2 text-white">
                    {slide.text}
                  </p>
                  <Link
                    to={`/shop-collection-list`} // Direct link in JSX
                    className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl rounded-0"
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
          <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center spdhhf" />
        </div>
      </div>
    </section>
  );
}
