import { imageData, testimonialData3 } from "@/data/testimonials";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-spacing-27">
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial flat-thumbs-testimonial-v2 bg_green-9">
          <div className="box-left">
            <Swiper
              dir="ltr"
              className="tf-sw-tes-2"
              spaceBetween={30}
              breakpoints={{
                1200: { spaceBetween: 40 },
                0: { spaceBetween: 30 },
              }}
              modules={[Navigation, Thumbs]}
              navigation={{
                nextEl: ".nav-next-slider",
                prevEl: ".nav-prev-slider",
              }}
              thumbs={{ swiper: thumbsSwiper }}
            >
              {testimonialData3.map((item, index) => (
                <SwiperSlide key={index}>
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
                      {item.heading}
                    </div>
                    <div className="rating">
                      {[...Array(item.rating)].map((_, idx) => (
                        <i key={idx} className="icon-star" />
                      ))}
                    </div>
                    <p className="text text-white">{item.text}</p>
                    <div className="author box-author">
                      <div className="box-img d-md-none">
                        <img
                          className="lazyload img-product"
                          data-src={item.imgSrc}
                          alt="image-product"
                          src={item.imgSrc}
                          width={550}
                          height={584}
                        />
                      </div>
                      <div className="content">
                        <div className="name text-white fw-6">
                          {item.author}
                        </div>
                        <a href="#" className="metas text-white">
                          Purchase item :{" "}
                          <span className="fw-6">{item.purchaseItem}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-md-flex d-none box-sw-navigation">
              <div className="nav-sw nav-next-slider line-white nav-next-tes-2">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider line-white nav-prev-tes-2">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
          </div>
          <div className="box-right">
            <Swiper
              dir="ltr"
              className="tf-thumb-tes"
              spaceBetween={30}
              slidesPerView={1}
              modules={[Thumbs]}
              loop
              onSwiper={setThumbsSwiper}
            >
              {imageData.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="box-img item-2 hover-img radius-10 o-hidden">
                    <div className="img-style">
                      <img
                        className="lazyload"
                        data-src={src}
                        alt="img-slider"
                        src={src}
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
