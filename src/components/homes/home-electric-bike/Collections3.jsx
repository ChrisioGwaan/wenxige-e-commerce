import { collectionSlides4 } from "@/data/categories";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections3() {
  return (
    <section className="flat-spacing-3 pt_0">
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1.3 },
          }}
          loop={false}
          autoplay={false}
          className="swiper tf-sw-collection"
        >
          {collectionSlides4.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 hover-img">
                <div className="collection-inner">
                  <Link
                    to={`/shop-collection-sub`}
                    className="collection-image img-style radius-20 o-hidden"
                  >
                    <img
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={800}
                      height={584}
                    />
                  </Link>
                  <div
                    className="collection-content text-start wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <h5 className="heading text-white font-sora">
                      {slide.heading}
                    </h5>
                    <p className="subtext text-white">{slide.subtext}</p>
                    <Link
                      to={`/shop-collection-sub`}
                      className="tf-btn style-3 fw-6 btn-light-icon rounded-full animate-hover-btn"
                    >
                      <span>Shop now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
