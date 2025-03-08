import { slidesData2 } from "@/data/categories";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="flat-spacing-3 pb_0">
      <div className="container">
        <Swiper
          dir="ltr"
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1.3, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
          pagination={{ clickable: true }}
        >
          {slidesData2.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 st-lg style-2 hover-img">
                <div className="collection-inner">
                  <Link
                    to={`/shop-collection-sub`}
                    className="collection-image img-style ceramic-collection o-hidden"
                  >
                    <img
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.imgAlt}
                      src={slide.imgSrc}
                      width={800}
                      height={584}
                    />
                  </Link>
                  <div
                    className="collection-content wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <h5 className="heading text-white">{slide.heading}</h5>
                    <p className="subtext text-white">{slide.subtext}</p>
                    <Link
                      to={`/shop-collection-sub`}
                      className="fade-item fade-item-3 tf-btn btn-outline-light fw-5 btn-xl radius-60"
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
