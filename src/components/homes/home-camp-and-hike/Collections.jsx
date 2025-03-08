import { bannerData } from "@/data/banner";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="flat-spacing-3 pt_0 line">
      <div className="container-full">
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            spaceBetween={30}
            loop={false}
            autoplay={false}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdc1",
            }}
          >
            {bannerData.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="banner-gr-item text-center hover-img type-1">
                  <Link to={`/shop-default`} className="img-style">
                    <img
                      className="lazyload"
                      data-src={banner.imgSrc}
                      alt={banner.alt}
                      src={banner.imgSrc}
                      width={800}
                      height={844}
                    />
                  </Link>
                  <div className="content">
                    <p className="sub-title">{banner.subTitle}</p>
                    <div className="title">
                      <Link to={`/shop-default`} className="link">
                        {banner.title}
                      </Link>
                    </div>
                    <p className="desc">{banner.desc}</p>
                    <Link
                      to={`/shop-collection-list`}
                      className="tf-btn style-2 btn-fill rounded-0 animate-hover-btn"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spdc1" />
        </div>
      </div>
    </section>
  );
}
