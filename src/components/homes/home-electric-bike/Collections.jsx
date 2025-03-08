import { slidesData3 } from "@/data/categories";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="flat-spacing-18 feature-electric-bike">
      <img
        className="lazyload"
        src="/images/slider/bg-electric-bike-1.jpg"
        data-=""
        alt="image-collection"
        width={1920}
        height={972}
      />
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Perfect Electric Bike</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              1024: { slidesPerView: 3 },
              568: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdcolletion",
            }}
            dir="ltr"
            className="swiper tf-sw-testimonial"
          >
            {slidesData3.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="banner-gr-item text-center type-2 radius-20">
                  <Link to={`/shop-default`} className="img-style">
                    <img
                      className="lazyload radius-20"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={550}
                      height={483}
                    />
                  </Link>
                  <div className="content">
                    <p className="sub-title fw-7 mb_10 font-sora">
                      {slide.subTitle}
                    </p>
                    <div className="title mb_10 font-sora">
                      <Link to={`/shop-default`} className="link fw-6">
                        {slide.title}
                      </Link>
                    </div>
                    <p className="desc mb_10">{slide.description}</p>
                    <Link
                      to={`/shop-collection-list`}
                      className="tf-btn style-2 btn-fill radius-60 animate-hover-btn bg_primary border-0"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spdcolletion" />
        </div>
      </div>
    </section>
  );
}
