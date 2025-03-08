import { collectionData11 } from "@/data/categories";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div
          className="flat-title flex-row justify-content-between align-items-center px-0 wow fadeInUp"
          data-wow-delay="0s"
        >
          <h3 className="title font-libre-baskerville fw-7">
            Season Collection
          </h3>
          <Link to={`/shop-collection-sub`} className="tf-btn btn-line">
            View all categories
            <i className="icon icon-arrow1-top-left" />
          </Link>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-collection"
            slidesPerView={6} // Converted from data-preview={6}
            spaceBetween={50} // Converted from data-space-lg={50}
            breakpoints={{
              1024: {
                slidesPerView: 6, // Converted from data-tablet={3}
                spaceBetween: 30, // Converted from data-space-md={30}
              },
              768: {
                slidesPerView: 4, // Converted from data-mobile={2}
                spaceBetween: 15, // Converted from data-space={15}
              },
              468: {
                slidesPerView: 3, // Converted from data-mobile={2}
                spaceBetween: 15, // Converted from data-space={15}
              },
              0: {
                slidesPerView: 2, // Converted from data-mobile={2}
                spaceBetween: 15, // Converted from data-space={15}
              },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdcate1",
            }}
          >
            {collectionData11.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="collection-item-circle hover-img">
                  <Link
                    to={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <img
                      className="lazyload"
                      data-src={item.imgSrc}
                      src={item.imgSrc}
                      alt="collection-img"
                      width={320}
                      height={320}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <Link
                      to={`/shop-collection-sub`}
                      className="link title fw-5"
                    >
                      {item.title}
                    </Link>
                    <div className="count">{item.itemsCount} items</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spdcate1" />
        </div>
      </div>
    </section>
  );
}
