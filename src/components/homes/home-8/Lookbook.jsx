import { products4 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Lookbook() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const hoverWrap = document.querySelector(".bundle-hover-wrap");
    const pinItems = document.querySelectorAll(".bundle-pin-item");
    const hoverItems = document.querySelectorAll(".bundle-hover-item");

    if (hoverWrap) {
      const handleMouseOver = (event) => {
        hoverWrap.classList.add("has-hover");

        const targetId = event.target.id;

        // Ensure targetId is valid
        if (targetId) {
          const hoverItem = hoverWrap.querySelector(`.${event.target.id}`); // Matches class with spaces
          if (hoverItem) hoverItem.style.display = "flex";

          hoverItems.forEach((item) => {
            if (item !== hoverItem) {
              item.classList.add("no-hover");
            }
          });
        }
      };

      const handleMouseLeave = () => {
        hoverWrap.classList.remove("has-hover");
        hoverItems.forEach((item) => {
          item.classList.remove("no-hover");
          item.style.display = ""; // Reset the display property if modified
        });
      };

      pinItems.forEach((pinItem) => {
        pinItem.addEventListener("mouseover", handleMouseOver);
        pinItem.addEventListener("mouseleave", handleMouseLeave);
      });

      // Cleanup to avoid memory leaks
      return () => {
        pinItems.forEach((pinItem) => {
          pinItem.removeEventListener("mouseover", handleMouseOver);
          pinItem.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }
  }, []);
  const goToSecondSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Swiper uses 0-based indexing, so 1 refers to the 2nd slide.
    }
  };
  return (
    <section className="flat-spacing-13 ">
      <div className="container">
        <div className="flat-lookbook-v3 d-flex wrap-lookbook-hover">
          <div className="col-left w-50">
            <div className="slider-wrap-lookbook">
              <div className="inner-sw-lookbook">
                <div className="flat-title-lookbook">
                  <p className="label">BUNDLE AND SAVE</p>
                  <h3 className="heading">Shop this look</h3>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="">
                  <Swiper
                    dir="ltr"
                    direction="vertical"
                    slidesPerView={3}
                    spaceBetween={0}
                    breakpoints={{
                      1000: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        direction: "horizontal",
                      },
                    }}
                    modules={[Navigation, Pagination]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation={{
                      prevEl: ".snbp134",
                      nextEl: ".snbn134",
                    }}
                    pagination={{ clickable: true, el: ".spd134" }}
                    className="tf-lookbook bundle-hover-wrap"
                  >
                    {products4.map((product, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className={`tf-bundle-product-item bundle-hover-item type-lg pin${
                            index + 1
                          } `}
                        >
                          <div className="tf-product-bundle-image">
                            <Link to={`/product-detail/${product.id}`}>
                              <img
                                alt={product.title}
                                src={product.imgSrc}
                                width={product.imgWidth}
                                height={product.imgHeight}
                              />
                            </Link>
                          </div>
                          <div className="tf-product-bundle-infos">
                            <Link
                              to={`/product-detail/${product.id}`}
                              className="tf-product-bundle-title"
                            >
                              {product.title}
                            </Link>
                            <div className="tf-product-bundle-price">
                              {product.compareAtPrice && (
                                <div className="compare-at-price">
                                  {product.compareAtPrice}
                                </div>
                              )}
                              <div className="price-on-sale">
                                ${product.price}
                              </div>
                            </div>
                            <div className="tf-product-bundle-variant position-relative">
                              <select className="tf-select">
                                {product.options.map((option, optionIndex) => (
                                  <option key={optionIndex}>{option}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="sw-dots style-2 sw-pagination-lookbook justify-content-center d-xl-none spd134" />
                  </Swiper>
                  <button
                    type="submit"
                    className="tf-btn w-100 justify-content-center style-2 btn-fill radius-3 animate-hover-btn"
                  >
                    Add selected to cart - $48.00 USD
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-right w-50">
            <div className="wrap-lookbook lookbook-sw lookbook-3">
              <div className="image">
                <img
                  className=" ls-is-cached lazyloaded"
                  data-src="images/shop/file/lookbook-6.jpg"
                  alt="collection-img"
                  src="/images/shop/file/lookbook-6.jpg"
                />
              </div>
              <div
                className="navigation-sw-dot type-black position-absolute item-1 bundle-pin-item swiper-button"
                data-slide={0}
                id="pin1"
                onClick={() => goToSecondSlide(0)}
              >
                <span />
              </div>
              <div
                className="navigation-sw-dot type-black position-absolute item-2 bundle-pin-item swiper-button"
                data-slide={1}
                id="pin2"
                onClick={() => goToSecondSlide(1)}
              >
                <span />
              </div>
              <div
                className="navigation-sw-dot type-black position-absolute item-3 bundle-pin-item swiper-button"
                data-slide={2}
                id="pin3"
                onClick={() => goToSecondSlide(2)}
              >
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
