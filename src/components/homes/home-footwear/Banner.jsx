import { Link } from "react-router-dom";
import React from "react";

export default function Banner() {
  return (
    <section className="">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-5 rounded-0 bg_4f4d59">
          <div
            className="tf-content-wrap w-100 pe-xl-5 wow fadeInUp"
            data-wow-delay="0s"
          >
            <div className="heading text_white">
              Breeze <br /> Beachcomber
            </div>
            <p className="description text_white">
              Beachcomber is the perfect neutral with a light sand coloured
              upper
            </p>
            <Link
              to={`/shop-collection-list`}
              target="_blank"
              className="tf-btn btn-line btn-line-light collection-other-link fw-4"
            >
              Shop collection
              <i className="icon icon-arrow1-top-left" />
            </Link>
          </div>
          <div className="tf-image-wrap">
            <img
              className="lazyload"
              data-src="/images/collections/banner-cls-footwear-1.jpg"
              alt="collection-img"
              src="/images/collections/banner-cls-footwear-1.jpg"
              width={800}
              height={598}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
