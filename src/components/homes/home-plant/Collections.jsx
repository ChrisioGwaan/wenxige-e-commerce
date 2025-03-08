import { collections13 } from "@/data/categories";

import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="flat-spacing-27">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title wow fadeInUp text_green-1" data-wow-delay="0s">
            Shop by Collection
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-sell-1 nav-next-slider snbp328">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw round nav-prev-sell-1 nav-prev-slider snbn328">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          dir="ltr"
          className="swiper tf-sw-product-sell-1 sw-wrapper-right"
          slidesPerView={4.6}
          breakpoints={{
            992: {
              slidesPerView: 4.6,
            },
            768: {
              slidesPerView: 3.6,
            },
            576: {
              slidesPerView: 2.6,
            },
            0: {
              slidesPerView: 1.6,
            },
          }}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp328",
            nextEl: ".snbn328",
          }}
        >
          {collections13.map((collection, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v3 hover-img">
                <Link
                  to={`/shop-collection-sub`}
                  className="collection-image img-style"
                >
                  <img
                    className="lazyload"
                    data-src={collection.imgSrc}
                    alt="collection-img"
                    src={collection.imgSrc}
                    width={360}
                    height={500}
                  />
                  <span className="box-icon">
                    <i className="icon-icon icon-arrow1-top-left" />
                  </span>
                </Link>
                <div className="collection-content">
                  <Link
                    to={`/shop-collection-sub`}
                    className="link title fw-5 text_green-1"
                  >
                    {collection.title}
                  </Link>
                  <div className="count text_black-2">
                    {collection.itemsCount} items
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
