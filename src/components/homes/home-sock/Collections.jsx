import { recentCollectionSlides } from "@/data/features";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
export default function Collections() {
  return (
    <section className="flat-spacing-29">
      <div className="container">
        <Swiper
          dir="ltr"
          slidesPerView={2}
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1.3, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {recentCollectionSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 style-4 hover-img">
                <div className="collection-inner">
                  <Link
                    to={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <img
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={slide.width}
                      height={slide.height}
                    />
                  </Link>
                  <div
                    className="collection-content wow fadeInUp"
                    data-wow-delay={slide.wowDelay}
                  >
                    <p className="subheading text_white">{slide.subheading}</p>
                    <h5 className="heading text_white">{slide.heading}</h5>
                    <Link
                      to={`/shop-collection-sub`}
                      className={slide.btnClass}
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
