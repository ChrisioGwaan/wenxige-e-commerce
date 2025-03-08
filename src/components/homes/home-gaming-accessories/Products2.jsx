import Shopcard28 from "@/components/shopCards/ProductCard28";

import { products68 } from "@/data/products";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-15">
      <div className="container">
        <div className="flat-title">
          <span
            className="title fw-6 wow fadeInUp font-readex-pro text_black-3"
            data-wow-delay="0s"
          >
            Popular products
          </span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-product-sell wrap-sw-over"
            breakpoints={{
              1024: {
                spaceBetween: 30,
                slidesPerView: 4, // for tablet
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 3, // for tablet
              },
              0: {
                spaceBetween: 15,
                slidesPerView: 2, // for mobile
              },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spdp2",
            }}
            navigation={{
              prevEl: ".pnbpp21",
              nextEl: ".pnbpn21",
            }}
          >
            {products68.map((product, i) => (
              <SwiperSlide key={i}>
                <Shopcard28 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="sw-dots style-2 sw-pagination-sell-1 justify-content-center spdp2" />
          <div className="nav-sw nav-next-slider nav-next-sell-1 box-icon w_46 round pnbpp21">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-sell-1 box-icon w_46 round pnbpn21">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
