import React, { useState } from "react";
import Slider1ZoomOuter from "./sliders/Slider1ZoomOuter";

import VolumeDiscountGrid from "./VolumeDiscountGrid";

import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
import Quantity from "./Quantity";
const socksImages = [
  {
    id: 1,
    src: "/images/products/sock3.jpg",
    alt: "img-product",
    width: 360,
    height: 360,
  },
  {
    id: 2,
    src: "/images/products/sock4.jpg",
    alt: "img-product",
    width: 360,
    height: 360,
  },
  {
    id: 3,
    src: "/images/products/sock6.jpg",
    alt: "img-product",
    width: 360,
    height: 360,
  },
];

export default function Details28({ product }) {
  const {
    addProductToCart,
    isAddedToCartProducts,
    addToCompareItem,
    isAddedtoCompareItem,
    addToWishlist,
    isAddedtoWishlist,
    cartProducts,
  } = useContextElement();
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="flat-spacing-4 pt_0">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <div className="thumbs-slider">
                  <Slider1ZoomOuter
                    images={socksImages}
                    firstImage={product.imgSrc}
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
                      {" "}
                      {product.title ? product.title : "Cotton jersey top"}
                    </h5>{" "}
                  </div>
                  <div className="tf-product-info-price">
                    ${product.price.toFixed(2)}
                  </div>
                  <div className="tf-product-info-liveview">
                    <div className="liveview-count">20</div>
                    <p className="fw-6">People are viewing this right now</p>
                  </div>
                  <div className="tf-product-info-quantity">
                    <div className="quantity-title fw-6">
                      Quantity (
                      {isAddedToCartProducts(product.id)
                        ? cartProducts.find((pro) => pro.id == product.id)
                            .quantity
                        : 0}{" "}
                      in cart)
                    </div>
                    <Quantity setQuantity={setQuantity} />
                  </div>
                  <div className="tf-product-info-buy-button">
                    <form className="">
                      <a
                        onClick={() => {
                          addProductToCart(product.id, quantity ? quantity : 1);
                        }}
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                      >
                        <span>
                          {" "}
                          {isAddedToCartProducts(product.id)
                            ? "Already Added"
                            : "Add to cart"}{" "}
                          -{" "}
                        </span>
                        <span className="tf-qty-price total-price">
                          {" "}
                          ${(product.price * quantity).toFixed(2)}
                        </span>
                      </a>
                      <a
                        onClick={() => addToWishlist(product.id)}
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                      >
                        <span
                          className={`icon icon-heart ${
                            isAddedtoWishlist(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {" "}
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
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
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
                      <div className="w-100">
                        <Link
                          to={`/checkout`}
                          className="tf-btn btn-primary justify-content-center w-100 animate-hover-btn"
                        >
                          BUY IT NOW
                        </Link>
                      </div>
                    </form>
                  </div>
                  <VolumeDiscountGrid product={product} />
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
                  <div className="tf-product-info-delivery-return">
                    <div className="row">
                      <div className="col-xl-6 col-12">
                        <div className="tf-product-delivery">
                          <div className="icon">
                            <i className="icon-delivery-time" />
                          </div>
                          <p>
                            Estimate delivery times:{" "}
                            <span className="fw-7">12-26 days</span>{" "}
                            (International),{" "}
                            <span className="fw-7">3-6 days</span> (United
                            States).
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-12">
                        <div className="tf-product-delivery mb-0">
                          <div className="icon">
                            <i className="icon-return-order" />
                          </div>
                          <p>
                            Return within <span className="fw-7">30 days</span>{" "}
                            of purchase. Duties &amp; taxes are non-refundable.
                          </p>
                        </div>
                      </div>
                    </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf-sticky-btn-atc">
        <div className="container">
          <div className="tf-height-observer w-100 d-flex align-items-center">
            <div className="tf-sticky-atc-product d-flex align-items-center">
              <div className="tf-sticky-atc-img">
                <img
                  className="lazyloaded"
                  data-src="/images/products/phone-detail1.jpg"
                  alt=""
                  src="/images/products/phone-detail1.jpg"
                  width={713}
                  height={713}
                />
              </div>
              <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">
                Emerald Pool - Elegant iPhone case
              </div>
            </div>
            <div className="tf-sticky-atc-infos">
              <form className="">
                <div className="tf-sticky-atc-variant-price text-center">
                  <span className="price fs-16">$30.00</span>
                </div>
                <div className="tf-sticky-atc-btns">
                  <div className="tf-product-info-quantity">
                    <div className="wg-quantity">
                      <span className="btn-quantity minus-btn">-</span>
                      <input type="text" name="number" defaultValue={1} />
                      <span className="btn-quantity plus-btn">+</span>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0);"
                    className="tf-btn btn-fill radius-3 justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn btn-add-to-cart"
                  >
                    <span>Add to cart</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
