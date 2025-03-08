import { products24 } from "@/data/products";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { useContextElement } from "@/context/Context";
export default function ShopGram() {
  const { setQuickAddItem } = useContextElement();
  return (
    <section className="flat-spacing-1 pb_0">
      <div className="">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Shop Gram</span>
          <p className="sub-title">
            Inspire and let yourself be inspired, from one unique fashion to
            another.
          </p>
        </div>
        <div className="wrap-carousel wrap-shop-gram">
          <Swiper
            dir="ltr"
            slidesPerView={5}
            spaceBetween={0}
            breakpoints={{
              1024: { slidesPerView: 5 },

              576: { slidesPerView: 3 },
              0: { slidesPerView: 2, slidesPerGroup: 2 },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd184" }}
          >
            {products24.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gallery-item hover-img wow fadeInUp rounded-0"
                  data-wow-delay={slide.wowDelay}
                >
                  <div className="img-style">
                    <img
                      className="lazyload img-hover"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={400}
                      height={400}
                    />
                  </div>
                  {slide.quickAdd ? (
                    <a
                      href="#quick_add"
                      onClick={() => setQuickAddItem(slide.id)}
                      data-bs-toggle="modal"
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">Quick Add</span>
                    </a>
                  ) : (
                    <Link
                      to={`/product-detail/${slide.id}`}
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">View product</span>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots sw-pagination-gallery justify-content-center spd184 pb-2" />
        </div>
      </div>
    </section>
  );
}
