import { ProductCard31 } from "@/components/shopCards/ProductCard31";
import { products59 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-15 bg_f5f3eb">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span
            className="title wow fadeInUp font-sora fw-6"
            data-wow-delay="0s"
          >
            Select your steed
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-sell-1 nav-next-slider">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw round nav-prev-sell-1 nav-prev-slider">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          dir="ltr"
          className="swiper tf-sw-product-sell-1 sw-wrapper-right"
          spaceBetween={15}
          breakpoints={{
            1024: { slidesPerView: 4.6 },
            768: { slidesPerView: 2.6 },
            0: { slidesPerView: 1.6 },
          }}
          pagination={{ clickable: true }}
        >
          {products59.map((product, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <ProductCard31 product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
