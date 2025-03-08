import { slides } from "@/data/process";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Process() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div
          className="flat-title mb-lg text-center wow fadeInUp"
          data-wow-delay="0s"
        >
          <span className="title">How it works</span>
        </div>
        <Swiper
          dir="ltr"
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            668: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="tf-sw-recent"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="blog-circle-box text-center wow fadeInUp"
                data-wow-delay="0s"
              >
                <div className="img-box">
                  <img
                    className="lazyload img-product"
                    data-src={slide.imgSrc}
                    src={slide.imgSrc}
                    alt={slide.alt}
                    width={476}
                    height={476}
                  />
                </div>
                <div className="content bg_light-green-4">
                  <h5>{slide.title}</h5>
                  <p className="text_black-2 text-base2">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
