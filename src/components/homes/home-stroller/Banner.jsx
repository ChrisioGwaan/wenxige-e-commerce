import { collections5 } from "@/data/categories";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
  return (
    <section className="flat-spacing-5 pt_0">
      <div className="container">
        <Swiper
          dir="ltr"
          slidesPerView={2}
          spaceBetween={30}
          loop={false}
          autoplay={false}
          breakpoints={{
            1024: {
              // Large screens
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              // Medium screens
              slidesPerView: 2,
              spaceBetween: 30,
            },
            480: {
              // Small screens
              slidesPerView: 1.4,
              spaceBetween: 15,
            },
          }}
          className="swiper tf-sw-collection"
        >
          {collections5.map((collection, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 style-2 style-3 hover-img">
                <div className="collection-inner">
                  <Link
                    to={`/shop-collection-sub`}
                    className="collection-image img-style radius-10 o-hidden"
                  >
                    <img
                      className="lazyload"
                      data-src={collection.imgSrc}
                      alt={collection.imgAlt}
                      src={collection.imgSrc}
                      width={collection.imgWidth}
                      height={collection.imgHeight}
                    />
                  </Link>
                  <div
                    className="collection-content text-left wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <p className="subheading text-white">
                      {collection.subheading}
                    </p>
                    <h5 className="heading text-white">
                      {collection.heading.split("<br />").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index <
                            collection.heading.split("<br />").length - 1 && (
                            <br />
                          )}
                        </React.Fragment>
                      ))}
                    </h5>
                    <p className="subtext text-white">{collection.subtext}</p>
                    <Link
                      to={`/shop-collection-sub`}
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
