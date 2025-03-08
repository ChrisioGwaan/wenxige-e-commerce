import React from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-video position-relative">
      <div className="wrap-slider">
        <video
          src="/images/slider/slider-video.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
        <div className="box-content">
          <div className="container">
            <p className="fade-item fade-item-1 subheading text-white fw-7">
              SPRING COLLECTION
            </p>
            <h1 className="fade-item fade-item-2 heading text-white">
              End of
              <br />
              Season Sale
            </h1>
            <Link
              to={`/shop-collection-sub`}
              className="fade-item fade-item-3 tf-btn fill-outline-light btn-icon radius-3"
            >
              <span>Shop collection</span>
              <i className="icon icon-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
