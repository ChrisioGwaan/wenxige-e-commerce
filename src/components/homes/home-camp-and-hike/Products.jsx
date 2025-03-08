import CountdownComponent from "@/components/common/Countdown";
import ProductCard30 from "@/components/shopCards/ProductCard30";
import { products53 } from "@/data/products";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-15">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
            Hot Deals
          </span>
          <div className="tf-countdown-v3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.5631 11.7661L10.7746 9.67465V5.41441C10.7746 4.98605 10.4283 4.6398 9.99996 4.6398C9.5716 4.6398 9.22535 4.98605 9.22535 5.41441V10.062C9.22535 10.306 9.34 10.5361 9.5352 10.6817L12.6336 13.0055C12.7673 13.1062 12.9302 13.1606 13.0975 13.1604C13.3338 13.1604 13.5662 13.0543 13.718 12.8498C13.9752 12.5081 13.9055 12.0225 13.5631 11.7661Z"
                fill="currentColor"
              />
              <path
                d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5143 20 10C20 4.48566 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.6592 1.54918 10C1.54918 5.34082 5.34082 1.54918 10 1.54918C14.66 1.54918 18.4508 5.34082 18.4508 10C18.4508 14.6592 14.6592 18.4508 10 18.4508Z"
                fill="currentColor"
              />
            </svg>
            <div
              className="js-countdown"
              data-timer={8607500}
              data-labels="D,H,M,S"
            >
              <CountdownComponent upperCase />
            </div>
          </div>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-product-sell wrap-sw-over"
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              1200: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spdp1",
            }}
            navigation={{
              prevEl: ".snbpp1",
              nextEl: ".snbpn1",
            }}
          >
            {products53.map((product, i) => (
              <SwiperSlide key={i}>
                <ProductCard30 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-sell justify-content-center spdp1" />
          <div className="nav-sw nav-next-slider nav-next-sell box-icon w_46 round snbpp1">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-sell box-icon w_46 round snbpn1">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
