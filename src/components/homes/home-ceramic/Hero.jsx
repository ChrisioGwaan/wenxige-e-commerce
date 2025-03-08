import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <>
      <section className="tf-sw-slideshow slider-effect-fade slider-video position-relative ceramic-hero">
        <div className="wrap-slider">
          <img
            className="lazyload"
            data-src="/images/slider/ceramic-1.jpg"
            alt="fashion-slideshow"
            src="/images/slider/ceramic-1.jpg"
            width={1800}
            height={888}
          />
          <div className="box-content">
            <div className="container">
              <h2 className="fade-item fade-item-2 heading text-white">
                Beauty of
                <br />
                Ceramic Sculptures
              </h2>
              <p className="fade-item fade-item-1 subheading text-white fw-5">
                Explore the intricate craftsmanship and expressive artistry
              </p>
              <Link
                to={`/shop-default`}
                className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-60"
              >
                <span>Shop collection</span>
                <i className="icon icon-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
