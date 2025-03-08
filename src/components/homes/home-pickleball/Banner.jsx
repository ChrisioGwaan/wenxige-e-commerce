import { Link } from "react-router-dom";
import React from "react";

export default function Banner() {
  return (
    <section className="flat-spacing-22">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-5 bg_light-green-5">
          <div
            className="tf-content-wrap w-100 pe-xl-5 wow fadeInUp"
            data-wow-delay="0s"
          >
            <div className="heading">
              Pickleball <br /> Superstore™
            </div>
            <p className="description text_black-2">
              From paddles and shoes to balls, grips, and more pickleball
              accessories, we have you covered. Find high-quality pickleball
              equipment and accessories at competitive prices, all from one
              pickleball store.
            </p>
            <Link
              to={`/shop-collection-list`}
              className="tf-btn btn-outline-dark radius-60 fw-6"
            >
              Shop collection
            </Link>
          </div>
          <div className="tf-image-wrap">
            <img
              className="lazyload"
              data-src="/images/collections/banner-cls-pickleball.jpg"
              alt="collection-img"
              src="/images/collections/banner-cls-pickleball.jpg"
              width={800}
              height={598}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
