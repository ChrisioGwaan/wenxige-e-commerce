import { brandThumbnails, testimonials18 } from "@/data/testimonials";
import React, { useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-spacing-24 bg_grey-15">
      <div className="container">
        <div className="flat-thumbs-testimonial">
          <Swiper
            dir="ltr"
            className="tf-sw-tes-2 flat-wrap-tes-text"
            spaceBetween={15} // Change based on data-space-md
            breakpoints={{
              768: {
                spaceBetween: 30, // Change based on data-space-lg
              },
            }}
            slidesPerView={1} // Change based on data-preview
            loop={true} // Change based on data-loop
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs]}
          >
            {testimonials18.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-ver-text">
                  <div className="heading">{item.heading}</div>
                  <p
                    className="content"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            dir="ltr"
            className="tf-thumb-tes thumb-tes-brands"
            spaceBetween={0} // Change based on data-space
            slidesPerView={3} // Change based on data-preview
            loop={true} // If looping is needed
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
          >
            {brandThumbnails.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="thumb-tes-item">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
