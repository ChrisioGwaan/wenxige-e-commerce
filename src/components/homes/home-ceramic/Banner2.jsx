import { Link } from "react-router-dom";
import React from "react";

export default function Banner2() {
  return (
    <section className="flat-spacing-25 bg_f3f5f5">
      <div className="container">
        <div className="widget-card-store type-3 radius-20 overflow-hidden align-items-center tf-grid-layout md-col-2">
          <div className="store-item-info">
            <h5 className="store-heading">Balancing Form and Function</h5>
            <div className="description">
              <p className="">
                Discover the perfect balance between form and function
              </p>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <Link to={`/shop-default`} className="tf-btn btn-line">
                Shop Collection
                <i className="icon icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
          <div className="store-img">
            <img
              className="lazyload"
              data-src="/images/shop/store/ceramic-1.jpg"
              alt="store-img"
              src="/images/shop/store/ceramic-1.jpg"
              width={800}
              height={598}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
