import { testimonials23 } from "@/data/testimonials";

import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="flat-spacing-18 bg_grey-5">
      <div className="container">
        <div className="flat-title title-lg wow fadeInUp" data-wow-delay="0s">
          <span className="title">Customer Reviews</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              668: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="swiper tf-sw-testimonial"
            dir="ltr"
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbtp1",
              nextEl: ".snbtn1",
            }}
            pagination={{
              clickable: true,
              el: ".spdt1",
            }}
          >
            {testimonials23.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className="testimonial-item bg_white style-column wow fadeInUp"
                  data-wow-delay={`${testimonial.id * 0.1}s`}
                >
                  <div className="rating">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, index) => (
                        <i key={index} className="icon-star" />
                      )
                    )}
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
                          data-src={testimonial.productImg}
                          alt=""
                          src={testimonial.productImg}
                          width={668}
                          height={758}
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="#" className="text-line-clamp-1">
                          {testimonial.productTitle}
                        </a>
                      </div>
                      <div className="price fw-5 text_primary">
                        {testimonial.oldPrice && (
                          <span className="old-price">
                            {testimonial.oldPrice}
                          </span>
                        )}
                        {testimonial.newPrice}
                      </div>
                    </div>
                    <a href="#" className="">
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw disable-line style-white nav-next-slider nav-next-testimonial lg snbtp1">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw disable-line style-white nav-prev-slider nav-prev-testimonial lg snbtn1">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spdt1" />
        </div>
      </div>
    </section>
  );
}
