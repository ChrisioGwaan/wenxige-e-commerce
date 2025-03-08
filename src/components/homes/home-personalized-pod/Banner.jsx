import { Link } from "react-router-dom";
import React from "react";

export default function Banner() {
  return (
    <section className="flat-spacing-27 pt_0 section-full-1">
      <div className="widget-card-store type-3 radius-20 overflow-hidden align-items-center tf-grid-layout md-col-2 type-bg-img">
        <div className="store-item-info">
          <img
            className="lazyload img-bg"
            data-src="/images/shop/store/bg-personalized-pod-1.jpg"
            alt="store-img"
            src="/images/shop/store/bg-personalized-pod-1.jpg"
            width={1800}
            height={1076}
          />
          <div className="wrap">
            <h5 className="store-heading text_white">
              Make this christmas <br /> truly special
            </h5>
            <div className="description">
              <p className="text_white">
                Personalized Gifts for Your Loved Ones—Unwrap Joy and Memories!
              </p>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <Link
                to={`/shop-default`}
                className="tf-btn btn-line btn-line-light"
              >
                Shop Collection
                <i className="icon icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
        </div>
        <div className="store-img">
          <img
            className="lazyload"
            data-src="/images/shop/store/personalized-pod-1.jpg"
            alt="store-img"
            src="/images/shop/store/personalized-pod-1.jpg"
            width={800}
            height={468}
          />
        </div>
      </div>
    </section>
  );
}
