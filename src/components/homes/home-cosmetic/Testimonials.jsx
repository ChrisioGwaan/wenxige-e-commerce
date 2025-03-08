import { testimonials19 } from "@/data/testimonials";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="flat-spacing-11">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Customer Reviews</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spd325",
            }}
            navigation={{
              prevEl: ".snbp325",
              nextEl: ".snbn325",
            }}
          >
            {testimonials19.map((testimonial, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  className="testimonial-item bg_white style-column wow fadeInUp"
                  data-wow-delay={testimonial.delay}
                >
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="icon-star" />
                    ))}
                  </div>
                  <div className="heading">{testimonial.heading}</div>
                  <div className="text">{testimonial.text}</div>
                  <div className="author">
                    <div className="name">{testimonial.author}</div>
                    <div className="metas">{testimonial.location}</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href="#">
                        <img
                          className="lazyload"
                          data-src={testimonial.imgSrc}
                          alt=""
                          src={testimonial.imgSrc}
                          width={360}
                          height={360}
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="#" className="text-line-clamp-1">
                          {testimonial.productTitle}
                        </a>
                      </div>
                      <div className="price">{testimonial.price}</div>
                    </div>
                    <a href="#" className="">
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp325">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn325">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd325" />
        </div>
      </div>
    </section>
  );
}
