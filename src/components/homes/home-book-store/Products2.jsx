import { useContextElement } from "@/context/Context";
import { products67 } from "@/data/products";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <section className="flat-spacing-15 line">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title font-libre-baskerville fw-7">Best Seller</span>
        </div>
        <div className="hover-sw-nav hover-sw-3">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 6, // for tablet
                spaceBetween: 30, // for medium screens
              },
              768: {
                slidesPerView: 3, // for mobile
                spaceBetween: 15,
              },
              0: {
                slidesPerView: 2, // for mobile
                spaceBetween: 15,
              },
            }}
            dir="ltr"
            className="swiper tf-sw-product-sell wrap-sw-over"
          >
            {products67.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="card-product none-hover">
                  <div className="card-product-wrapper">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="lazyload img-product"
                        data-src={product.imgSrc}
                        src={product.imgSrc}
                        alt={product.alt}
                        width={360}
                        height={554}
                      />
                    </Link>
                    <div className="list-product-btn absolute-2">
                      <a
                        href="#quick_add"
                        data-bs-toggle="modal"
                        onClick={() => setQuickAddItem(product.id)}
                        className="box-icon bg_white quick-add tf-btn-loading"
                      >
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                      </a>
                      <a
                        onClick={() => addToWishlist(product.id)}
                        className="box-icon bg_white wishlist btn-icon-action"
                      >
                        <span
                          className={`icon icon-heart ${
                            isAddedtoWishlist(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {isAddedtoWishlist(product.id)
                            ? "Already Wishlisted"
                            : "Add to Wishlist"}
                        </span>
                        <span className="icon icon-delete" />
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        onClick={() => addToCompareItem(product.id)}
                        className="box-icon bg_white compare btn-icon-action"
                      >
                        <span
                          className={`icon icon-compare ${
                            isAddedtoCompareItem(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {" "}
                          {isAddedtoCompareItem(product.id)
                            ? "Already Compared"
                            : "Add to Compare"}
                        </span>
                        <span className="icon icon-check" />
                      </a>
                      <a
                        href="#quick_view"
                        data-bs-toggle="modal"
                        onClick={() => setQuickViewItem(product)}
                        className="box-icon bg_white quickview tf-btn-loading"
                      >
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="#" className="link text_black-2">
                      {product.author}
                    </a>
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="title link"
                    >
                      {product.title}
                    </Link>
                    <span className="price">${product.price.toFixed(2)}</span>{" "}
                    {/* formatted price */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
