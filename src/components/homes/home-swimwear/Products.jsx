import { ProductCard } from "@/components/shopCards/ProductCard";
import { products58 } from "@/data/products";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-5">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title font-libre-baskerville">
            Wenxige Collective
          </span>
          <p className="sub-title text_black-2">
            Shop new additions to our staple Wenxige Collective range, available
            in the colour of the season, Azure Blue.
          </p>
        </div>
        <div className="hover-sw-nav hover-sw-3">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-product-sell wrap-sw-over"
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              1100: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },

              640: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp329",
              nextEl: ".snbn329",
            }}
          >
            {products58.map((product, i) => (
              <SwiperSlide key={i}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product lg snbp329">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product lg snbn329">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
