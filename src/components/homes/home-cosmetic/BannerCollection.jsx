import { Link } from "react-router-dom";
import React from "react";

export default function BannerCollection() {
  return (
    <section className="flat-spacing-1">
      <div className="container">
        <div className="tf-grid-layout md-col-3 gap30">
          <div className="collection-item-v6 hover-img">
            <a href="#" className="collection-inner">
              <div className="img-style">
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-banner-cosmetic1.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-banner-cosmetic1.jpg"
                  width={600}
                  height={574}
                />
              </div>
              <div className="collection-content position-relative text-center bg_dark-pink">
                <h5
                  className="heading text-white fw-6 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Charlotte Tilbury
                </h5>
                <p
                  className="subheading text-white wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Swipe on matte reds and satin-finish pinks
                </p>
              </div>
            </a>
          </div>
          <div className="collection-item-v6 hover-img">
            <a href="#" className="collection-inner">
              <div className="img-style">
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-banner-cosmetic2.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-banner-cosmetic2.jpg"
                  width={600}
                  height={574}
                />
              </div>
              <div className="collection-content position-relative text-center bg_dark-yellow">
                <h5
                  className="heading text-white fw-6 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Beautiful skin
                </h5>
                <p
                  className="subheading text-white wow fadeInUp"
                  data-wow-delay="0s"
                >
                  On-point picks for every skin type.
                </p>
              </div>
            </a>
          </div>
          <div className="collection-item-v6 hover-img">
            <a href="#" className="collection-inner">
              <div className="img-style">
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-banner-cosmetic3.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-banner-cosmetic3.jpg"
                  width={600}
                  height={574}
                />
              </div>
              <div className="collection-content position-relative text-center bg_violet-2">
                <h5
                  className="heading text-white fw-6 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Eco Beauty exclusives
                </h5>
                <p
                  className="subheading text-white wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Can’t-miss picks from your fave brands
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
