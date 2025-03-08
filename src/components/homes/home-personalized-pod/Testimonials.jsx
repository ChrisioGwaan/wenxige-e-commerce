import { testimonials22 } from "@/data/testimonials";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="flat-spacing-18">
      <div className="container">
        <div className="flat-title gap-14">
          <span
            className="title wow fadeInUp fw-6 text-center"
            data-wow-delay="0s"
          >
            Hear what our happy customers <br /> are saying
          </span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="swiper tf-sw-testimonial"
            dir="ltr"
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl: ".snbtp1",
              nextEl: ".snbtn1",
            }}
            pagination={{
              clickable: true,
              el: ".spdt1",
            }}
          >
            {testimonials22.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item style-row">
                  <div className="image radius-5 o-hidden">
                    <img
                      className="lazyload"
                      data-src={testimonial.imgSrc}
                      alt={testimonial.alt}
                      src={testimonial.imgSrc}
                      width={488}
                      height={620}
                    />
                  </div>
                  <div className="content">
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <i key={idx} className="icon-star" />
                      ))}
                    </div>
                    <div className="text">{testimonial.text}</div>
                    <div className="author">
                      <div className="name">{testimonial.author.name}</div>
                      <div className="metas">{testimonial.author.metas}</div>
                    </div>
                    <div className="product">
                      <div className="img-thumb radius-5 o-hidden">
                        <img
                          className="lazyload"
                          data-src={testimonial.product.imgSrc}
                          alt={testimonial.product.title}
                          src={testimonial.product.imgSrc}
                          width={70}
                          height={56}
                        />
                      </div>
                      <div className="content-wrap">
                        <div className="product-title">
                          <a href="#">{testimonial.product.title}</a>
                        </div>
                        <span className="price">
                          <span className="fw-4 text-sale">
                            {testimonial.product.price.original}
                          </span>
                          <span className="text_primary">
                            {testimonial.product.price.discounted}
                          </span>
                        </span>
                      </div>
                      <a href="#">
                        <i className="icon-arrow1-top-left" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw disable-line nav-next-slider nav-next-testimonial lg snbtp1">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw disable-line nav-prev-slider nav-prev-testimonial lg snbtn1">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spdt1" />
        </div>
      </div>
    </section>
  );
}
