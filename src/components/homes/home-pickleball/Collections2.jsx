import { collectionData9 } from "@/data/categories";

import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections2() {
  return (
    <section className="flat-spacing-9">
      <div className="container-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.3,
            },
          }}
          className="swiper tf-sw-lookbook"
          dir="ltr"
        >
          {collectionData9.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="collection-item-v4 style-2 style-3 hover-img">
                <div className="collection-inner">
                  <Link
                    to={`/shop-collection-list`}
                    className="collection-image img-style radius-10"
                  >
                    <img
                      className="lazyload"
                      data-src={product.imgSrc}
                      alt={product.alt}
                      src={product.imgSrc}
                      width={1000}
                      height={727}
                    />
                  </Link>
                  <div
                    className="collection-content wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <h5 className="heading text-white">{product.title}</h5>
                    <p className="text-white subtext text-base2">
                      {product.description}
                    </p>
                    <Link
                      to={`/shop-collection-list`}
                      className="tf-btn style-3 fw-6 btn-light-icon radius-60 animate-hover-btn"
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
