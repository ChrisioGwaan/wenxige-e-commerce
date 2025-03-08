import ProductCard30 from "@/components/shopCards/ProductCard30";
import { products53 } from "@/data/products";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-18 line">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
            Our Top Picks
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw square nav-next-slider nav-next-sell-1 snbpp2">
              <span className="icon icon-arrow1-left" />
            </div>
            <div className="nav-sw square nav-prev-slider nav-prev-sell-1 snbpn2">
              <span className="icon icon-arrow1-right" />
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
              el: ".spdp2",
            }}
            navigation={{
              prevEl: ".snbpp2",
              nextEl: ".snbpn2",
            }}
          >
            {products53.map((product, i) => (
              <SwiperSlide key={i}>
                <ProductCard30 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-sell-1 justify-content-center spdp2" />
          <div className="nav-sw nav-next-slider nav-next-sell-1 box-icon w_46 round snbpp2">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-sell-1 box-icon w_46 round snbpn2">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
