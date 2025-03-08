import { products64 } from "@/data/products";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ShopGram() {
  return (
    <section className="pb-0 flat-spacing-18">
      <div className="container-full px-0">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Shop Gram</span>
          <p className="sub-title">
            Inspire and let yourself be inspired, from one unique fashion to
            another.
          </p>
        </div>

        <Swiper
          slidesPerView={5}
          dir="ltr"
          className="swiper tf-sw-shop-gallery"
          breakpoints={{
            1100: {
              slidesPerView: 5,
            },
            568: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={0}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spdsg1",
          }}
        >
          {products64.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="gallery-item hover-img rounded-0 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="img-style">
                  <img
                    className="lazyload img-hover"
                    alt="image-gallery"
                    src={item.imgSrc}
                    width={400}
                    height={400}
                  />
                </div>
                <a
                  href="#shoppingCart"
                  data-bs-toggle="modal"
                  className="box-icon quick-add tf-btn-loading"
                >
                  <span className="icon icon-bag" />
                  <span className="tooltip">Add to cart</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute-dots sw-dots sw-pagination-gallery justify-content-center d-none md-d-flex spdsg1" />
        </Swiper>
      </div>
    </section>
  );
}
