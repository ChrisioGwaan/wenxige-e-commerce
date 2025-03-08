import { collections7 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-26">
      <div className="container">
        <div className="flat-title">
          <span
            className="title font-caprasimo wow fadeInUp"
            data-wow-delay="0s"
          >
            Shop by categories
          </span>
        </div>
        <Swiper
          dir="ltr"
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            800: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          loop={false}
          autoplay={false}
          className="tf-sw-collection"
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".spd290" }}
        >
          {collections7.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-centered hover-img">
                <div className="img-style">
                  <Link to={`/shop-collection-sub`}>
                    <img
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt={item.alt}
                      src={item.imgSrc}
                      width={600}
                      height={622}
                    />
                  </Link>
                </div>
                <div className="content">
                  <Link
                    to={`/shop-collection-sub`}
                    className="tf-btn btn-light hover-icon font-caprasimo"
                  >
                    <span>{item.text}</span>
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="sw-dots style-2 sw-pagination-collection justify-content-center spd290" />
      </div>
    </section>
  );
}
