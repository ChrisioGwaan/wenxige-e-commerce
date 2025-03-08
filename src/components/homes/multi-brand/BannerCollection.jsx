import { recentCollections } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
export default function BannerCollection() {
  return (
    <section className="flat-spacing-10 pb_0">
      <div className="container">
        <Swiper
          dir="ltr"
          slidesPerView={2}
          spaceBetween={15}
          pagination={{ clickable: true, clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
          }}
          className="tf-sw-recent"
        >
          {recentCollections.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 hover-img">
                <div className="collection-inner">
                  <Link
                    to={`/shop-collection-sub`} // Directly added href here
                    className="collection-image img-style radius-10"
                  >
                    <img
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt={item.imgAlt}
                      src={item.imgSrc}
                      width={800}
                      height={746}
                    />
                  </Link>
                  <div
                    className="collection-content wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <h5 className="heading text_white">{item.heading}</h5>
                    <Link
                      to={`/shop-collection-sub`} // Directly added href here
                      className="tf-btn style-3 fw-6 btn-light-icon rounded-full animate-hover-btn"
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
