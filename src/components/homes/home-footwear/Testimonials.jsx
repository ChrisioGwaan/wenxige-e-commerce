import { testimonials21 } from "@/data/testimonials";

import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const swiperOptions = {
    slidesPerView: 3, // Set default value, you can change this dynamically with breakpoints
    spaceBetween: 30, // data-space-lg
    breakpoints: {
      1024: {
        spaceBetween: 30, // data-space-md
        slidesPerView: 2, // data-tablet
      },
      768: {
        spaceBetween: 30, // data-space-md
        slidesPerView: 2, // data-tablet
      },

      0: {
        spaceBetween: 15, // data-space-md
        slidesPerView: 1, // data-mobile
      },
    },
  };
  return (
    <section className="flat-spacing-18 flat-testimonial bg_f6f1ec">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Happy Clients</span>
          <p className="sub-title">Hear what they say about us</p>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            {...swiperOptions}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp340",
              nextEl: ".snbn340",
            }}
            pagination={{
              clickable: true,
              el: ".snd340",
            }}
            className="swiper tf-sw-testimonial"
          >
            {testimonials21.map((testimonial, index) => (
              <SwiperSlide key={index} className="swiper-slide height-auto">
                <div
                  className="testimonial-item h-100 bg_white style-column wow fadeInUp"
                  data-wow-delay={`${index * 0.1}s`}
                >
                  <div className="rating">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <i key={i} className="icon-star text_primary" />
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
                          data-src={testimonial.product.imgSrc}
                          alt=""
                          src={testimonial.product.imgSrc}
                          width={360}
                          height={360}
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="#">{testimonial.product.title}</a>
                      </div>
                      <div className="price">{testimonial.product.price}</div>
                    </div>
                    <a href="#">
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp340">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn340">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center snd340" />
        </div>
      </div>
    </section>
  );
}
