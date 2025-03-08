import { testimonials25 } from "@/data/testimonials";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-spacing-5 pt_0">
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial flat-thumbs-testimonial-v2 testimonial-gaming-accessories">
          <img
            className="lazyload"
            data-src="/images/slider/bg-gaming-accessories-testi.png"
            alt="image-product"
            src="/images/slider/bg-gaming-accessories-testi.png"
            width={2000}
            height={772}
          />
          <div className="box-left">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              //   thumbs={{ swiper: ".thumb-swiper" }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs, Navigation, Pagination]}
              className="tf-sw-tes-2"
              navigation={{
                prevEl: ".snbtp1",
                nextEl: ".snbtn1",
              }}
              pagination={{
                clickable: true,
                el: ".spdt1",
              }}
            >
              {testimonials25.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-item">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={46}
                        height={31}
                        viewBox="0 0 46 31"
                        fill="none"
                      >
                        <path
                          d="M32.4413 30.5L37.8204 19.9545L38.1913 19.2273H37.375H26.375V0.5H45.5V19.6071L39.9438 30.5H32.4413ZM6.56633 30.5L11.9454 19.9545L12.3163 19.2273H11.5H0.5V0.5H19.625V19.6071L14.0688 30.5H6.56633Z"
                          stroke="#B5B5B5"
                        />
                      </svg>
                    </div>
                    <div className="heading fs-14 mb_18 text-white">
                      {testimonial.title}
                    </div>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <i key={idx} className="text_white icon-star" />
                      ))}
                    </div>
                    <p className="text text-white">{testimonial.review}</p>
                    <div className="author box-author">
                      <div className="box-img d-md-none">
                        <img
                          className="lazyload img-product"
                          data-src={testimonial.imgSrc}
                          alt="image-product"
                          src={testimonial.imgSrc}
                          width={450}
                          height={478}
                        />
                      </div>
                      <div className="content">
                        <div className="name text-white fw-6">
                          {testimonial.author}
                        </div>
                        <a href="#" className="metas link text-white">
                          Purchase item :
                          <span className="fw-6">{testimonial.product}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <>
                <div className="d-md-flex d-none box-sw-navigation">
                  <div className="nav-sw nav-next-slider line-white nav-next-tes-2 snbtp1">
                    <span className="icon icon-arrow-left" />
                  </div>
                  <div className="nav-sw nav-prev-slider line-white nav-prev-tes-2 snbtn1">
                    <span className="icon icon-arrow-right" />
                  </div>
                </div>
                <div className="d-md-none sw-dots style-2 dots-white sw-pagination-tes-2 spdt1" />
              </>
            </Swiper>
          </div>

          <div className="box-right">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="thumb-swiper"
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {testimonials25.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="box-img item-2 hover-img radius-10 o-hidden">
                    <div className="img-style">
                      <img
                        className="lazyload"
                        data-src={testimonial.imgSrc}
                        alt="img-slider"
                        src={testimonial.imgSrc}
                        width={450}
                        height={478}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
