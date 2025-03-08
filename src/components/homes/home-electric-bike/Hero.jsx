import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-video position-relative slider-electric-bike">
      <div className="wrap-slider d-flex">
        <video
          src="/images/video/electric-bike.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
        <div className="box-content">
          <div className="container">
            <div className="card-box bg_dark-1 ms-auto text-center text-md-start">
              <p className="fade-item fade-item-1 text-white subheading d-block">
                30% OFF ALL ORDERS
              </p>
              <h3 className="fade-item fade-item-2 text-white heading font-sora">
                Discover Electric Elegance
              </h3>
              <div className="fade-item fade-item-3">
                <Link
                  to={`/shop-collection-list`}
                  className="mt-0 tf-btn btn-fill animate-hover-btn btn-xl radius-60 border bg_dark-1"
                >
                  <span>
                    Shop collection
                    <i className="icon icon-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
