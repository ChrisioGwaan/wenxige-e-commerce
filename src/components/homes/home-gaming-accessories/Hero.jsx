import { sliderData7 } from "@/data/heroslides";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <section className="flat-spacing-5 slider-gaming-accessories">
      <img
        className="lazyload"
        data-src="/images/slider/bg-slider-gaming-accessories.jpg"
        alt="collection-img"
        src="/images/slider/bg-slider-gaming-accessories.jpg"
        width={2000}
        height={855}
      />
      <div className="container">
        <Swiper
          spaceBetween={15}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            0: { slidesPerView: 1.3 },
          }}
          className="swiper tf-sw-recent"
          dir="ltr"
        >
          {sliderData7.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="collection-item-v4 style-2 hover-img">
                <div className="collection-inner">
                  <Link
                    to={`/shop-collection-sub`} // Directly add the link here
                    className="collection-image img-style radius-10 o-hidden"
                  >
                    <img
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={800}
                      height={747}
                    />
                  </Link>
                  <div
                    className="collection-content text-start wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <p className="subheading text-white">{slide.subheading}</p>
                    <h5 className="heading text-white fw-6 font-readex-pro">
                      {slide.heading}
                    </h5>
                    <p className="subtext text-white">{slide.subtext}</p>
                    <Link
                      to={`/shop-collection-sub`} // Add the link here as well
                      className="tf-btn style-3 fw-6 btn-light-icon radius-3 animate-hover-btn"
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
