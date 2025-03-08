import { iconBoxes7 } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features3() {
  return (
    <>
      <section className="flat-spacing-3 flat-iconbox bg_571729">
        <div className="container">
          <div className="wrap-carousel wrap-mobile">
            <div
              dir="ltr"
              className="swiper tf-sw-mobile for-no-mobile"
              data-preview="1"
              data-space="15"
            >
              <div className="swiper-wrapper wrap-iconbox">
                {iconBoxes7.map((box, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="tf-icon-box style-row">
                      <div className="icon bg_571729">
                        <i
                          className={`text_white ${box.iconClass} ${box.iconStyle}`}
                        ></i>
                      </div>
                      <div className="content">
                        <div className="title fw-4 text_white">{box.title}</div>
                        <p className="text_white">{box.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Swiper
              spaceBetween={15}
              dir="ltr"
              className="swiper tf-sw-mobile for-mobile"
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spdf1" }}
            >
              {iconBoxes7.map((box, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="tf-icon-box style-row">
                    <div className="icon bg_571729">
                      <i
                        className={`text_white ${box.iconClass} ${box.iconStyle}`}
                      ></i>
                    </div>
                    <div className="content">
                      <div className="title fw-4 text_white">{box.title}</div>
                      <p className="text_white">{box.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-dots style-2 sw-pagination-mb justify-content-center spdf1 tf-sw-mobile-pagination"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
