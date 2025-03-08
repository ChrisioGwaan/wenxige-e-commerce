import { useContextElement } from "@/context/Context";
import { products57 } from "@/data/products";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ShopGram() {
  const { setQuickAddItem } = useContextElement();
  return (
    <section className="flat-spacing-1">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <h5 className="text_green-1">Show us how you #Wenxigeyourspace!</h5>
        </div>
        <div className="wrap-carousel wrap-shop-gram">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-shop-gallery"
            spaceBetween={7}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
              576: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdsg",
            }}
          >
            {products57.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gallery-item hover-img wow fadeInUp"
                  data-wow-delay={item.wowDelay}
                >
                  <div className="img-style">
                    <img
                      className="lazyload img-hover"
                      data-src={item.imgSrc}
                      alt={item.alt}
                      src={item.imgSrc}
                      width={400}
                      height={400}
                    />
                  </div>

                  {item.quickAdd ? (
                    <a
                      href="#quick_add"
                      onClick={() => setQuickAddItem(item.id)}
                      data-bs-toggle="modal"
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">{item.tooltip}</span>
                    </a>
                  ) : (
                    <Link
                      to={`/product-detail/${item.id}`}
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">{item.tooltip}</span>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots sw-pagination-gallery justify-content-center spdsg" />
        </div>
      </div>
    </section>
  );
}
