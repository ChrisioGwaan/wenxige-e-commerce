import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <div className="container">
      <section className="flat-spacing-12 bg_white radius-10">
        <div className="flat-title">
          <span
            className="title wow fadeInUp text-center text_green-2"
            data-wow-delay="0s"
          >
            We’re solving the biggest problems in furniture
          </span>
        </div>
        <div
          className="wrap-carousel wrap-mobile flat-iconbox-v2 style-2 wow fadeInUp"
          data-wow-delay="0s"
        >
          <div
            dir="ltr"
            className="swiper tf-sw-mobile-1 for-no-mobile"
            data-preview={1}
            data-space={15}
          >
            <div className="swiper-wrapper wrap-iconbox">
              <div className="swiper-slide">
                <div className="tf-icon-box text-center">
                  <div className="icon lg">
                    <i className="icon-shipping-1 text_green-2" />
                  </div>
                  <div className="content">
                    <div className="title text_green-2">
                      Fast &amp; free shipping
                    </div>
                    <p className="text_green-2">
                      Every single order ships for free. No minimums, <br />
                      no tiers, no fine print whatsoever.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tf-icon-box text-center">
                  <div className="icon lg">
                    <i className="icon-customer text_green-2" />
                  </div>
                  <div className="content">
                    <div className="title text_green-2">
                      Modular, easy-to-move design
                    </div>
                    <p className="text_green-2">
                      Our innovative modular design is driven by the <br />
                      belief that furniture should fit this home, and the
                      <br />
                      next one.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tf-icon-box text-center">
                  <div className="icon lg">
                    <i className="icon-stores text_green-2" />
                  </div>
                  <div className="content">
                    <div className="title text_green-2">
                      Durable, premium materials
                    </div>
                    <p className="text_green-2">
                      We use materials like sustainably-forested wood, <br />
                      strengthened steel hardware, and top-grain Italian
                      <br />
                      leather.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            dir="ltr"
            className="swiper tf-sw-mobile-1 for-mobile"
            spaceBetween={15}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdf4",
            }}
          >
            <SwiperSlide className="swiper-slide">
              <div className="tf-icon-box text-center">
                <div className="icon lg">
                  <i className="icon-shipping-1 text_green-2" />
                </div>
                <div className="content">
                  <div className="title text_green-2">
                    Fast &amp; free shipping
                  </div>
                  <p className="text_green-2">
                    Every single order ships for free. No minimums, <br />
                    no tiers, no fine print whatsoever.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="tf-icon-box text-center">
                <div className="icon lg">
                  <i className="icon-customer text_green-2" />
                </div>
                <div className="content">
                  <div className="title text_green-2">
                    Modular, easy-to-move design
                  </div>
                  <p className="text_green-2">
                    Our innovative modular design is driven by the <br />
                    belief that furniture should fit this home, and the
                    <br />
                    next one.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="tf-icon-box text-center">
                <div className="icon lg">
                  <i className="icon-stores text_green-2" />
                </div>
                <div className="content">
                  <div className="title text_green-2">
                    Durable, premium materials
                  </div>
                  <p className="text_green-2">
                    We use materials like sustainably-forested wood, <br />
                    strengthened steel hardware, and top-grain Italian
                    <br />
                    leather.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb-1 justify-content-center spdf4  tf-sw-mobile-pagination" />
        </div>
      </section>
    </div>
  );
}
