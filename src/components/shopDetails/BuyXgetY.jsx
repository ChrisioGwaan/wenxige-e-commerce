import { Link } from "react-router-dom";
import React from "react";

export default function BuyXgetY() {
  return (
    <div className="tf-product-buyx-gety">
      <div className="buyx-gety-heading">
        <span className="title">Special BOGO Deal</span>
      </div>
      <div className="buyx-gety-content">
        <div className="buyx-gety-item">
          <div className="buyx-gety-item-inner">
            <div className="pr-item-info">
              <div className="thumbnails">
                <img
                  alt=""
                  src="/images/products/gaming-detail1.jpg"
                  width={713}
                  height={713}
                />
              </div>
              <div className="content">
                <Link to={`/product-detail`} className="name fs-16 link fw-5">
                  DualSens Game Controller
                </Link>
                <span className="fs-12 qty">Qty: 1</span>
              </div>
            </div>
            <div className="pr-item-price-total">
              <span className="total-label fw-5">Total</span>
              <span className="price-nomal text_black-2 fw-5">$159.99</span>
            </div>
          </div>
          <span className="box-badge">Buy 1</span>
        </div>
        <div className="buyx-gety-deviced">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v144H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h144v144c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V304h144c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32z" />
            </svg>
          </span>
        </div>
        <div className="buyx-gety-item">
          <div className="buyx-gety-item-inner">
            <div className="pr-item-info">
              <div className="thumbnails">
                <img
                  alt=""
                  src="/images/products/headphone-2.png"
                  width={533}
                  height={399}
                />
              </div>
              <div className="content">
                <Link to={`/product-detail`} className="name fs-16 link fw-5">
                  DualSens Game Controller
                </Link>
                <span className="fs-12 qty">Qty: 1</span>
              </div>
            </div>
            <div className="pr-item-price-total">
              <span className="total-label fw-5">Total</span>
              <span className="price-nomal price-old text_black-2 fw-5">
                $0.00
              </span>
              <span className="price-nomal price-new fw-5">$449.10</span>
            </div>
          </div>
          <span className="box-badge">Get 1 off 10%</span>
        </div>
      </div>
      <button className="tf-btn bg_pink-2 w-100 justify-content-center fw-6 effect-flash text_white text-uppercase letter-2">
        Choose this deal
      </button>
    </div>
  );
}
