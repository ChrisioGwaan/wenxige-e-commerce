import { testimonials20 } from "@/data/testimonials";

import { Link } from "react-router-dom";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section
      className="flat-spacing-32 sec-bg-banner"
      style={{ backgroundImage: "url(images/slider/swm-tes-bg.png)" }}
    >
      <div className="container">
        <div className="flat-title mb-lg wow fadeInUp" data-wow-delay="0s">
          <span className="title text-white font-libre-baskerville">
            Customer Reviews
          </span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            spaceBetween={30} // Corresponds to data-space
            breakpoints={{
              1024: {
                slidesPerView: 3, // data-preview
              },
              768: {
                slidesPerView: 2, // data-tablet
              },
              0: {
                slidesPerView: 1, // data-mobile
              },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spd330",
            }}
            navigation={{
              prevEl: ".snbp330",
              nextEl: ".snbn330",
            }}
          >
            {testimonials20.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div
                  className="testimonial-item rounded-0 bg_white style-column wow fadeInUp"
                  data-wow-delay={`${index * 0.1}s`}
                >
                  <div className="rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="icon-star" />
                    ))}
                  </div>
                  <div className="heading font-libre-baskerville">
                    {item.heading}
                  </div>
                  <div className="text">{item.text}</div>
                  <div className="author">
                    <div className="name">{item.author}</div>
                    <div className="metas">{item.metas}</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href="#">
                        <img
                          className="lazyload"
                          data-src={item.imgSrc}
                          alt=""
                          width={360}
                          height={540}
                          src={item.imgSrc}
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="#">{item.productTitle}</a>
                      </div>
                      <div className="price">{item.price}</div>
                    </div>
                    <a href="#">
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw style-white style-not-line nav-next-slider nav-next-testimonial lg snbp330">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw style-white style-not-line nav-prev-slider nav-prev-testimonial lg snbn330">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots dots-white style-2 sw-pagination-testimonial justify-content-center spd330" />
        </div>
      </div>
    </section>
  );
}
