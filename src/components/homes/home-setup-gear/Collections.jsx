import { recentCollections4 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Collections() {
  return (
    <section className="flat-spacing-8 pb_0">
      <div className="container">
        <Swiper
          dir="ltr"
          className="swiper tf-sw-recent"
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
            },
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          pagination={{ clickable: true, clickable: true }}
        >
          {recentCollections4.map((collection, index) => (
            <SwiperSlide key={index}>
              <div className="banner-gr-item text-center hover-img">
                <div className="img-style">
                  <Link to={`/shop-default`}>
                    <img
                      className="lazyload"
                      data-src={collection.imgSrc}
                      alt={collection.imgAlt}
                      src={collection.imgSrc}
                      width={800}
                      height={582}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="title">
                    <Link to={`/shop-default`} className="link">
                      {collection.title}
                    </Link>
                  </div>
                  <Link to={`/shop-default`} className="tf-btn btn-line">
                    Shop Collection
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
