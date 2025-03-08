import React from "react";

import { Link } from "react-router-dom";
export default function Card() {
  return (
    <section className="flat-spacing-22 bg-gradient-1">
      <div className="container">
        <div className="d-flex align-items-center gap-20 justify-content-between flat-wrap-giftcard flex-md-row flex-column">
          <div className="wrap-content flex-md-row flex-column">
            <div className="image">
              <img
                alt="image"
                src="/images/shop/file/banner_giftcard_001.svg"
                width={122}
                height={122}
              />
            </div>
            <div className="text-md-start text-center">
              <h4 className="text-white fw-6">Professional gift solutions</h4>
              <p className="text-white">
                Send 1-1,000+ customised eGift cards instantly with Wenxige
                Business!
              </p>
            </div>
          </div>
          <div className="">
            <Link
              to={`/shop-left-sidebar`}
              className="tf-btn fill-outline-light radius-3"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
