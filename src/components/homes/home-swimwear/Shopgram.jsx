import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const galleryImages = [
  "/images/shop/gallery/swm-ins1.jpg",
  "/images/shop/gallery/swm-ins2.jpg",
  "/images/shop/gallery/swm-ins3.jpg",
  "/images/shop/gallery/swm-ins4.jpg",
  "/images/shop/gallery/swm-ins5.jpg",
  "/images/shop/gallery/swm-ins6.jpg",
  "/images/shop/gallery/swm-ins7.jpg",
  "/images/shop/gallery/swm-ins8.jpg",
  "/images/shop/gallery/swm-ins9.jpg",
];
export default function Shopgram() {
  return (
    <section className="flat-spacing-5">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title font-libre-baskerville">Shop Instagram</span>
          <p className="sub-title">
            Follow <strong>@ecswimwear</strong> on Instagram
          </p>
        </div>

        <Swiper
          spaceBetween={7}
          breakpoints={{
            1200: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            0: { slidesPerView: 2 },
          }}
          dir="ltr"
          className="swiper tf-sw-shop-gallery"
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd331",
          }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-item rounded-0 hover-img wow fadeInUp">
                <div className="img-style">
                  <img
                    className="lazyload img-hover"
                    data-src={image}
                    alt="image-gallery"
                    width={400}
                    height={400}
                    src={image}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dots d-xl-none sw-pagination-gallery justify-content-center spd331" />
        </Swiper>
      </div>
    </section>
  );
}
