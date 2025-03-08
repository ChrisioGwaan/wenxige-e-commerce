import React from "react";
import { Link } from "react-router-dom";

export default function HeroImageParallax() {
  return (
    <>
      <div
        className="tf-slideshow slider-parallax"
        style={{ backgroundImage: "url(/images/slider/skincare-slide3.jpg)" }}
      >
        <div className="container">
          <div className="box-content text-center">
            <h1 className="heading text-white wow fadeInUp">
              Skin Love, Unleashed
            </h1>
            <p className="desc text-white wow fadeInUp">
              Experience the magic of self-care with our premium skincare
            </p>
            <div className="wow fadeInUp">
              <Link
                to={`/shop-collection-sub`}
                className="tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
              >
                <span>Shop collection</span>
                <i className="icon icon-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tf-slideshow slider-parallax"
        style={{ backgroundImage: "url(/images/slider/skincare-slide2.jpg)" }}
      >
        <div className="container">
          <div className="box-content text-center">
            <h1 className="heading text-white wow fadeInUp">
              Beauty in Every Drop
            </h1>
            <p className="desc text-white wow fadeInUp">
              Indulge in the luxury of flawless skin
            </p>
            <div className="wow fadeInUp">
              <Link
                to={`/shop-collection-sub`}
                className="tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
              >
                <span>Shop collection</span>
                <i className="icon icon-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tf-slideshow slider-parallax"
        style={{ backgroundImage: "url(/images/slider/skincare-slide1.jpg)" }}
      >
        <div className="container">
          <div className="box-content text-center">
            <h1 className="heading text-white wow fadeInUp">
              Skincare Reimagined.
            </h1>
            <p className="desc text-white wow fadeInUp">
              To deliver peak potency, minus the waste
            </p>
            <div className="wow fadeInUp">
              <Link
                to={`/shop-collection-sub`}
                className="tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
              >
                <span>Shop collection</span>
                <i className="icon icon-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
