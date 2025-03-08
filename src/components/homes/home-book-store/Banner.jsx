import { Link } from "react-router-dom";
import React from "react";

export default function Banner() {
  return (
    <section className="flat-spacing-25 pb_0">
      <div className="container">
        <div className="widget-card-store type-3 hover-img radius-20 overflow-hidden align-items-center tf-grid-layout md-col-2 bg_light-blue-2">
          <div className="store-item-info">
            <h5 className="store-heading font-libre-baskerville fw-7">
              New York Times <br />
              Bestsellers
            </h5>
            <div className="description">
              <p className="">
                Stay current on the most popular books as listed by the NY
                Times.
              </p>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <Link to={`/shop-default`} className="tf-btn btn-line fw-6">
                Shop Collection
                <i className="icon icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
          <div className="store-img img-style">
            <img
              className="lazyload"
              data-src="/images/shop/store/book-store-1.png"
              alt="store-img"
              src="/images/shop/store/book-store-1.png"
              width="800"
              height="598"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
