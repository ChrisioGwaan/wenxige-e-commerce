import { ProductCard } from "@/components/shopCards/ProductCard";
import { products56 } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-5 bg_green-10">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title wow fadeInUp text_green-1" data-wow-delay="0s">
            Featured Products
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-product nav-next-slider snbp327">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw round nav-prev-product nav-prev-slider snbn327">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          dir="ltr"
          className="swiper tf-sw-product-sell sw-wrapper-right"
          slidesPerView={4.6} // data-preview
          breakpoints={{
            1024: {
              slidesPerView: 4.6, // data-tablet
            },
            768: {
              slidesPerView: 2.6, // data-tablet
            },
            0: {
              slidesPerView: 1.6, // data-mobile
            },
          }}
          spaceBetween={30} // data-space-lg
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp327",
            nextEl: ".snbn327",
          }}
        >
          {products56.map((products, i) => (
            <SwiperSlide key={i}>
              <ProductCard product={products} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
