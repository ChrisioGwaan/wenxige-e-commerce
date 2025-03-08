import { swiperData } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="line">
      <div className="container">
        <div className="wrap-spacing-iconbox wow fadeInUp" data-wow-delay="0s">
          <Swiper
            dir="ltr"
            spaceBetween={15}
            breakpoints={{
              1200: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              0: { slidesPerView: 1, spaceBetween: 15 },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdf1",
            }}
            className="tf-sw-recent"
          >
            {swiperData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="tf-icon-box-v2 justify-content-center">
                  <span className={`icon ${item.iconClass}`} />
                  <div className="title">{item.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-recent justify-content-center spdf1" />
        </div>
      </div>
    </section>
  );
}
