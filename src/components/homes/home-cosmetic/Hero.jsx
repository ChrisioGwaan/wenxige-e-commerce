import { slides22 } from "@/data/heroslides";

import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-collection hover-sw-nav">
      <Swiper
        dir="ltr"
        slidesPerView={3}
        breakpoints={{
          1150: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        centeredSlides={false}
        spaceBetween={5}
        loop={false}
        autoplay={{
          delay: 2000,
        }}
        speed={1000}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          el: ".spds1",
        }}
        navigation={{
          prevEl: ".snbhp1",
          nextEl: ".snbhn1",
        }}
      >
        {slides22.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="collection-item hover-img">
              <div className="collection-inner">
                <Link
                  to={`/shop-default`}
                  className="collection-image rounded-0 img-style"
                >
                  <img
                    alt={slide.alt}
                    src={slide.imgSrc}
                    width={947}
                    height={1335}
                  />
                </Link>
                <div className="collection-content">
                  <Link
                    to={`/shop-default`}
                    className="tf-btn btn-light-icon animate-hover-btn btn-xl rounded-0"
                  >
                    <span>{slide.title}</span>
                    <i className="icon fw-4 icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="nav-sw nav-next-slider navigation-next-slider box-icon w_46 round snbhp1">
        <span className="icon icon-arrow-left" />
      </div>
      <div className="nav-sw nav-prev-slider navigation-prev-slider box-icon w_46 round snbhn1">
        <span className="icon icon-arrow-right" />
      </div>
      <div className="sw-dots style-2 sw-pagination-slider justify-content-center spds1" />
    </section>
  );
}
