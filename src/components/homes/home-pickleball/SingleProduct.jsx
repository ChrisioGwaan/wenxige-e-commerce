import Quantity from "@/components/shopDetails/Quantity";
import Slider1ZoomOuter from "@/components/shopDetails/sliders/Slider1ZoomOuter";
import { useContextElement } from "@/context/Context";
import { productBestcell } from "@/data/products";

import { Link } from "react-router-dom";
import React, { useState } from "react";
const slideImages = [
  {
    id: 1,
    dataValue: "red",
    src: "/images/products/pickleball-red-2.jpg",
    alt: "img-product",
    width: 668,
    height: 758,
  },
  {
    id: 2,
    dataValue: "black",
    src: "/images/products/pickleball-black-4.jpg",
    alt: "img-product",
    width: 668,
    height: 758,
  },
];
export default function SingleProduct() {
  const [currentColor, setCurrentColor] = useState("red");
  const [quantity, setQuantity] = useState(1);

  const {
    addProductToCart,
    isAddedToCartProducts,
    addToCompareItem,
    isAddedtoCompareItem,
    addToWishlist,
    isAddedtoWishlist,
  } = useContextElement();
  return (
    <section className="flat-spacing-21">
      <div className="container">
        <div className="flat-title title-lg">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Featured add-on
          </span>
          <p
            className="sub-title fs-18 text_black-2 wow fadeInUp"
            data-wow-delay="0s"
          >
            Enhance and protect your paddle by customizing it with edge guard
            tape, ensuring both style
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="tf-product-media-wrap sticky-top">
              <div className="thumbs-slider">
                <Slider1ZoomOuter
                  currentColor={currentColor}
                  images={slideImages}
                  handleColor={setCurrentColor}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tf-product-info-wrap position-relative">
              <div className="tf-zoom-main" />
              <div className="tf-product-info-list other-image-zoom">
                <div className="tf-product-info-title">
                  <h5>
                    <Link
                      to={`/product-detail/${productBestcell[1].id}`}
                      className="link"
                    >
                      {productBestcell[1].title}
                    </Link>
                  </h5>
                </div>
                <div className="tf-product-info-badges">
                  <div className="badges">Best seller</div>
                  <div className="product-status-content">
                    <i className="icon-lightning" />
                    <p className="fw-6">
                      Selling fast! 56 people have this in their carts.
                    </p>
                  </div>
                </div>
                <div className="tf-product-info-price">
                  <div className="price-on-sale">$269.99</div>
                  <div className="compare-at-price">
                    ${productBestcell[1].price}
                  </div>
                  <div className="badges-on-sale bg_red-2">
                    <span>9</span>% OFF
                  </div>
                </div>
                <div className="tf-product-info-liveview">
                  <div className="liveview-count">38</div>
                  <p className="fw-6">People are viewing this right now</p>
                </div>
                <div className="tf-product-info-variant-picker">
                  <div className="variant-picker-item">
                    <div className="variant-picker-label">
                      Color:{" "}
                      <span className="fw-6 variant-picker-label-value value-currentColor">
                        Black
                      </span>
                    </div>
                    <div className="variant-picker-values">
                      <input
                        type="radio"
                        name="color1"
                        readOnly
                        checked={true}
                      />
                      <label
                        onClick={() => setCurrentColor("black")}
                        className={`style-text color-btn ${
                          currentColor == "black" ? "active" : ""
                        } `}
                      >
                        <p>Black</p>
                      </label>
                      <input readOnly type="radio" name="color1" />
                      <label
                        onClick={() => setCurrentColor("red")}
                        className={`style-text color-btn ${
                          currentColor == "red" ? "active" : ""
                        } `}
                      >
                        <p>Red</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="tf-product-info-quantity">
                  <div className="quantity-title fw-6">Quantity</div>
                  <Quantity setQuantity={setQuantity} />
                </div>
                <div className="tf-product-info-buy-button">
                  <form className="">
                    <a
                      onClick={() => {
                        addProductToCart(
                          productBestcell[1].id,
                          quantity ? quantity : 1
                        );
                      }}
                      className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart radius-60"
                    >
                      <span>
                        {" "}
                        {isAddedToCartProducts(productBestcell[1].id)
                          ? "Already Added"
                          : "Add to cart"}{" "}
                        -{" "}
                      </span>
                      <span className="tf-qty-price total-price">
                        ${(productBestcell[1].price * quantity).toFixed(2)}
                      </span>
                    </a>
                    <a
                      onClick={() => addToWishlist(productBestcell[1].id)}
                      className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                    >
                      <span
                        className={`icon icon-heart ${
                          isAddedtoWishlist(productBestcell[1].id)
                            ? "added"
                            : ""
                        }`}
                      />
                      <span className="tooltip">
                        {" "}
                        {isAddedtoWishlist(productBestcell[1].id)
                          ? "Already Wishlisted"
                          : "Add to Wishlist"}
                      </span>
                      <span className="icon icon-delete" />
                    </a>
                    <a
                      href="#compare"
                      onClick={() => addToCompareItem(productBestcell[1].id)}
                      data-bs-toggle="offcanvas"
                      aria-controls="offcanvasLeft"
                      className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                    >
                      <span
                        className={`icon icon-compare ${
                          isAddedtoCompareItem(productBestcell[1].id)
                            ? "added"
                            : ""
                        }`}
                      />
                      <span className="tooltip">
                        {" "}
                        {isAddedtoCompareItem(productBestcell[1].id)
                          ? "Already Compared"
                          : "Add to Compare"}
                      </span>
                      <span className="icon icon-check" />
                    </a>
                  </form>
                </div>
                <div className="tf-product-info-extra-link">
                  <a
                    href="#ask_question"
                    data-bs-toggle="modal"
                    className="tf-product-extra-icon"
                  >
                    <div className="icon">
                      <i className="icon-question" />
                    </div>
                    <div className="text fw-6">Ask a question</div>
                  </a>
                  <a
                    href="#delivery_return"
                    data-bs-toggle="modal"
                    className="tf-product-extra-icon"
                  >
                    <div className="icon">
                      <svg
                        className="d-inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={18}
                        viewBox="0 0 22 18"
                        fill="currentColor"
                      >
                        <path d="M21.7872 10.4724C21.7872 9.73685 21.5432 9.00864 21.1002 8.4217L18.7221 5.27043C18.2421 4.63481 17.4804 4.25532 16.684 4.25532H14.9787V2.54885C14.9787 1.14111 13.8334 0 12.4255 0H9.95745V1.69779H12.4255C12.8948 1.69779 13.2766 2.07962 13.2766 2.54885V14.5957H8.15145C7.80021 13.6052 6.85421 12.8936 5.74468 12.8936C4.63515 12.8936 3.68915 13.6052 3.33792 14.5957H2.55319C2.08396 14.5957 1.70213 14.2139 1.70213 13.7447V2.54885C1.70213 2.07962 2.08396 1.69779 2.55319 1.69779H9.95745V0H2.55319C1.14528 0 0 1.14111 0 2.54885V13.7447C0 15.1526 1.14528 16.2979 2.55319 16.2979H3.33792C3.68915 17.2884 4.63515 18 5.74468 18C6.85421 18 7.80021 17.2884 8.15145 16.2979H13.423C13.7742 17.2884 14.7202 18 15.8297 18C16.9393 18 17.8853 17.2884 18.2365 16.2979H21.7872V10.4724ZM16.684 5.95745C16.9494 5.95745 17.2034 6.08396 17.3634 6.29574L19.5166 9.14894H14.9787V5.95745H16.684ZM5.74468 16.2979C5.27545 16.2979 4.89362 15.916 4.89362 15.4468C4.89362 14.9776 5.27545 14.5957 5.74468 14.5957C6.21392 14.5957 6.59575 14.9776 6.59575 15.4468C6.59575 15.916 6.21392 16.2979 5.74468 16.2979ZM15.8298 16.2979C15.3606 16.2979 14.9787 15.916 14.9787 15.4468C14.9787 14.9776 15.3606 14.5957 15.8298 14.5957C16.299 14.5957 16.6809 14.9776 16.6809 15.4468C16.6809 15.916 16.299 16.2979 15.8298 16.2979ZM18.2366 14.5957C17.8853 13.6052 16.9393 12.8936 15.8298 12.8936C15.5398 12.8935 15.252 12.943 14.9787 13.04V10.8511H20.0851V14.5957H18.2366Z" />
                      </svg>
                    </div>
                    <div className="text fw-6">Delivery &amp; Return</div>
                  </a>
                  <a
                    href="#share_social"
                    data-bs-toggle="modal"
                    className="tf-product-extra-icon"
                  >
                    <div className="icon">
                      <i className="icon-share" />
                    </div>
                    <div className="text fw-6">Share</div>
                  </a>
                </div>
                <div className="tf-product-info-trust-seal">
                  <div className="tf-product-trust-mess">
                    <i className="icon-safe" />
                    <p className="fw-6">
                      Guarantee Safe <br /> Checkout
                    </p>
                  </div>
                  <div className="tf-payment">
                    <img
                      alt=""
                      src="/images/payments/visa.png"
                      width={48}
                      height={30}
                    />
                    <img
                      alt=""
                      src="/images/payments/img-1.png"
                      width={49}
                      height={30}
                    />
                    <img
                      alt=""
                      src="/images/payments/img-2.png"
                      width={48}
                      height={30}
                    />
                    <img
                      alt=""
                      src="/images/payments/img-3.png"
                      width={57}
                      height={30}
                    />
                    <img
                      alt=""
                      src="/images/payments/img-4.png"
                      width={49}
                      height={30}
                    />
                  </div>
                </div>
                <Link
                  to={`/product-detail/${productBestcell[1].id}`}
                  className="tf-btn btn-line fw-6"
                >
                  View full details
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
