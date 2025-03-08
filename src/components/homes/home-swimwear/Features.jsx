import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="flat-iconbox-v3 lg mw-1100">
          <div className="wrap-carousel wrap-mobile">
            <div
              dir="ltr"
              className="swiper tf-sw-mobile for-no-mobile"
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper wrap-iconbox">
                <div className="swiper-slide">
                  <div className="tf-icon-box style-icon-color text-center">
                    <div className="icon">
                      <i className="icon-body" />
                    </div>
                    <div className="content">
                      <div className="title font-libre-baskerville">
                        Perfect Fit Guarantee
                      </div>
                      <p className="text_black-2">
                        If doesn’t look amazing, simplysend <br /> it back
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tf-icon-box style-icon-color text-center">
                    <div className="icon">
                      <i className="icon-beach" />
                    </div>
                    <div className="content">
                      <div className="title font-libre-baskerville">
                        The Beach Club
                      </div>
                      <p className="text_black-2">
                        If doesn’t look amazing, simplysend <br /> it back
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tf-icon-box style-icon-color text-center">
                    <div className="icon">
                      <i className="icon-door" />
                    </div>
                    <div className="content">
                      <div className="title font-libre-baskerville">
                        Instant Refunds
                      </div>
                      <p className="text_black-2">
                        Changed your mind? Process your return and <br />{" "}
                        receive an instant refund with Refundid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Swiper
              dir="ltr"
              className="swiper tf-sw-mobile for-mobile"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spdf5",
              }}
            >
              <SwiperSlide className="swiper-slide">
                <div className="tf-icon-box style-icon-color text-center">
                  <div className="icon">
                    <i className="icon-body" />
                  </div>
                  <div className="content">
                    <div className="title font-libre-baskerville">
                      Perfect Fit Guarantee
                    </div>
                    <p className="text_black-2">
                      If doesn’t look amazing, simplysend <br /> it back
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tf-icon-box style-icon-color text-center">
                  <div className="icon">
                    <i className="icon-beach" />
                  </div>
                  <div className="content">
                    <div className="title font-libre-baskerville">
                      The Beach Club
                    </div>
                    <p className="text_black-2">
                      If doesn’t look amazing, simplysend <br /> it back
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tf-icon-box style-icon-color text-center">
                  <div className="icon">
                    <i className="icon-door" />
                  </div>
                  <div className="content">
                    <div className="title font-libre-baskerville">
                      Instant Refunds
                    </div>
                    <p className="text_black-2">
                      Changed your mind? Process your return and <br /> receive
                      an instant refund with Refundid.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="sw-dots style-2 sw-pagination-mb justify-content-center spdf5  tf-sw-mobile-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}
