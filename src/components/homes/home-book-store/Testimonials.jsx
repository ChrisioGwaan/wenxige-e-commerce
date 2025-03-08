import { testimonials24 } from "@/data/testimonials";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="flat-spacing-18">
      <div className="container">
        <div className="flat-title title-lg wow fadeInUp" data-wow-delay="0s">
          <span className="title font-libre-baskerville fw-7">
            Customer Reviews
          </span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-testimonial"
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".spdt2",
            }}
            navigation={{
              prevEl: ".snbtp1",
              nextEl: ".snbtn1",
            }}
          >
            {testimonials24.map((testimonial, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  className="testimonial-item bg_white style-column wow fadeInUp"
                  data-wow-delay={testimonial.delay}
                >
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="icon-star" />
                    ))}
                  </div>
                  <div className="heading">{testimonial.heading}</div>
                  <div className="text">{testimonial.text}</div>
                  <div className="author">
                    <div className="name">{testimonial.author}</div>
                    <div className="metas">{testimonial.metas}</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href="#">
                        <img
                          className="lazyload"
                          data-src={testimonial.productImage}
                          src={testimonial.productImage}
                          alt=""
                          width={360}
                          height={554}
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="#" className="text-line-clamp-1">
                          {testimonial.productTitle}
                        </a>
                      </div>
                      {testimonial.oldPrice && (
                        <div className="price fw-5 text_primary">
                          <span className="old-price">
                            {testimonial.oldPrice}
                          </span>
                          {testimonial.newPrice}
                        </div>
                      )}
                      {testimonial.price && (
                        <div className="price">{testimonial.price}</div>
                      )}
                    </div>
                    <a href="#" className="">
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw disable-line style-white nav-next-slider nav-next-testimonial lg border snbtp1">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw disable-line style-white nav-prev-slider nav-prev-testimonial lg border snbtn1">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spdt2" />
        </div>
      </div>
    </section>
  );
}
