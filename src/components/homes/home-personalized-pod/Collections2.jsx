import { collectionItems18 } from "@/data/categories";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections2() {
  return (
    <section className="flat-spacing-3">
      <div className="container-full">
        <div className="wrap-carousel personalized-pod-collections">
          <Swiper
            dir="ltr"
            spaceBetween={30}
            breakpoints={{
              1100: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdc1",
            }}
          >
            {collectionItems18.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item-v4 style-2 hover-img">
                  <div className="collection-inner">
                    <Link
                      to={`/shop-collection-sub`}
                      className="collection-image img-style radius-10 o-hidden"
                    >
                      <img
                        className="lazyload"
                        data-src={item.imgSrc}
                        alt="collection-img"
                        src={item.imgSrc}
                        width={600}
                        height={521}
                      />
                    </Link>
                    <div
                      className="collection-content wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <h5 className="text-white">{item.title}</h5>
                      <p className="subtext text-white mt-0">
                        {item.description}
                      </p>
                      <Link
                        to={`/shop-collection-sub`}
                        className="tf-btn btn-primary animate-hover-btn radius-60 bg_red-1"
                      >
                        <span>Shop now</span>
                      </Link>
                    </div>
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
