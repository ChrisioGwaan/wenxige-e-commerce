import { ProductCard } from "@/components/shopCards/ProductCard";
import { products61 } from "@/data/products";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Lookbook() {
  return (
    <section className="flat-spacing-15 pt_0">
      <div className="container">
        <div className="flat-lookbook-v2">
          <div className="col-left">
            <div className="wrap-lookbook lookbook-sw radius-10 o-hidden">
              <div className="image">
                <img
                  className="lazyload"
                  data-src="/images/shop/file/lookbook-12.jpg"
                  alt="collection-img"
                  src="/images/shop/file/lookbook-12.jpg"
                  width={1000}
                  height={1137}
                />
              </div>
              <div className="navigation-sw-dot nav-next-lookbook snbp339">
                <span />
              </div>
              <div className="navigation-sw-dot nav-prev-lookbook snbn339">
                <span />
              </div>
            </div>
          </div>
          <div className="col-right">
            <div className="slider-wrap-lookbook">
              <div className="nav-sw nav-next-slider nav-next-lookbook snbp339">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="inner-sw-lookbook">
                <div className="flat-title-lookbook">
                  <p className="label">SPRING SALE 30% OFF</p>
                  <h3 className="heading">Shop this look</h3>
                </div>
                <Swiper
                  dir="ltr"
                  className="swiper tf-sw-lookbook wrap-sw-over"
                  {...{
                    slidesPerView: 1, // Or other values depending on your need
                    spaceBetween: 30, // This corresponds to data-space-lg
                    breakpoints: {
                      0: {
                        spaceBetween: 15, // This corresponds to data-space-md for tablets
                      },
                      768: {
                        spaceBetween: 30, // This corresponds to data-space-md for tablets
                      },
                    },
                  }}
                  modules={[Pagination, Navigation]}
                  navigation={{
                    prevEl: ".snbp339",
                    nextEl: ".snbn339",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".spd339",
                  }}
                >
                  {products61.map((product, i) => (
                    <SwiperSlide key={i}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  ))}
                  <div className="sw-dots style-2 sw-pagination-lookbook d-md-none spd339" />
                </Swiper>
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-lookbook snbn339">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
