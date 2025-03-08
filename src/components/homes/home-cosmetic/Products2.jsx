import { products55 } from "@/data/products";

import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-27 bg_light-grey-4">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Shoppable videos</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-collection"
            slidesPerView={3}
            breakpoints={{
              1200: {
                slidesPerView: 3, // Large screen (default)
                spaceBetween: 30, // Large screen spacing
              },
              668: {
                slidesPerView: 2, // Tablet screen
                spaceBetween: 30, // Tablet spacing
              },
              0: {
                slidesPerView: 1, // Mobile screen
                spaceBetween: 15, // Mobile spacing
              },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spd323",
            }}
            navigation={{
              prevEl: ".snbp323",
              nextEl: ".snbn323",
            }}
          >
            {products55.map((slide, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="collection-video wow fadeInUp">
                  <div className="banner-video">
                    <video autoPlay playsInline muted loop>
                      <source src={slide.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="cls-content">
                    <div className="avatar d-none d-xl-block">
                      <img
                        alt="avt"
                        src={slide.imgSrc}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className="info">
                      <div>
                        <Link
                          to={`/product-detail/${slide.id}`}
                          className="title link text-line-clamp-1"
                        >
                          {slide.title}
                        </Link>
                        <span className="price">${slide.price.toFixed(2)}</span>{" "}
                        {/* Display price as number */}
                      </div>
                      <a
                        href="#quick_view"
                        data-bs-toggle="modal"
                        className="box-icon"
                      >
                        <i className="icon icon-view" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw style-white style-disabled-dark nav-next-slider nav-next-collection lg snbp323">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw style-white style-disabled-dark nav-prev-slider nav-prev-collection lg snbn323">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spd323" />
        </div>
      </div>
    </section>
  );
}
