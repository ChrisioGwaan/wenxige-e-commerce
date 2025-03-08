import { slidesData } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className="flat-spacing-13">
      <div className="container-full">
        <Swiper
          dir="ltr"
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 3 },
            640: { slidesPerView: 3 },
            0: { slidesPerView: 1.3 },
          }}
          pagination={{ clickable: true, clickable: true }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v2 hover-img">
                <Link to={`/shop-collection-sub`} className="collection-inner">
                  <div className="collection-image img-style">
                    <img
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={600}
                      height={666}
                    />
                  </div>
                  <div className="collection-content">
                    <div className="top wow fadeInUp" data-wow-delay="0s">
                      <h5 className="heading">{slide.title}</h5>
                      <p className="subheading">
                        Start from <span className="fw-6">{slide.price}</span>
                      </p>
                    </div>
                    <div className="bottom wow fadeInUp" data-wow-delay="0s">
                      <button className="tf-btn btn-line collection-other-link fw-6">
                        <span>Shop now</span>
                        <i className="icon icon-arrow1-top-left" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
