import { collectionData10 } from "@/data/categories";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="">
      <div className="container">
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-testimonial"
            spaceBetween={30} // Set space between slides for large screens
            breakpoints={{
              1024: {
                slidesPerView: 3, // Converted from data-tablet={2}
                spaceBetween: 30, // Converted from data-space-md={15}
              },
              768: {
                slidesPerView: 2, // Converted from data-mobile={1}
                spaceBetween: 15, // Adjust if needed for mobile devices
              },
              0: {
                slidesPerView: 1, // Converted from data-mobile={1}
                spaceBetween: 15, // Adjust if needed for mobile devices
              },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdcoll1",
            }}
          >
            {collectionData10.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="collection-item-v4 hover-img">
                  <div className="collection-inner">
                    <Link
                      to={`/shop-collection-sub`} // Added the link directly here
                      className="collection-image img-style radius-20"
                    >
                      <img
                        className="lazyload"
                        data-src={item.imgSrc}
                        src={item.imgSrc}
                        alt={item.alt}
                        width={600}
                        height={839}
                      />
                    </Link>
                    <div
                      className="collection-content wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <p className="subheading text_white">{item.subheading}</p>
                      <h5
                        className="heading text_white"
                        dangerouslySetInnerHTML={{ __html: item.heading }}
                      ></h5>
                      <Link
                        to={`/shop-collection-list`} // Added the link directly here
                        className="tf-btn style-2 btn-light-icon radius-3 animate-hover-btn border-0"
                      >
                        Shop now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spdcoll1" />
        </div>
      </div>
    </section>
  );
}
