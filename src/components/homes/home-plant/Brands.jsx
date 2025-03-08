import { brandImages } from "@/data/brands";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Brands() {
  return (
    <section className="flat-spacing-2 pb_0">
      <div className="container">
        <div className="mb_30 fw-7 text_green-2 text-center">
          AS FEATURED IN
        </div>
        <Swiper
          dir="ltr"
          loop={false}
          autoplay={false}
          spaceBetween={0}
          slidesPerView={4}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            480: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd326",
          }}
        >
          {brandImages.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="brand-item border-0">
                <img
                  className="lazyload"
                  data-src={brand.imgSrc}
                  alt={brand.alt}
                  src={brand.imgSrc}
                  width={brand.width}
                  height={brand.height}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="sw-dots style-2 sw-pagination-brand justify-content-center spd326" />
      </div>
    </section>
  );
}
