import { Link } from "react-router-dom";
import React from "react";

export default function Banner2() {
  return (
    <section
      className="banner-hero-collection-wrap banner-parallax"
      style={{
        backgroundImage: "url(images/slider/food-banner-collection.jpg)",
      }}
    >
      <div className="box-content">
        <div className="container">
          <Link
            to={`/shop-collection-sub`}
            className="card-box text-md-start text-center rounded-0"
          >
            <h4 className="heading">Join the Plant-Based Movement</h4>
            <p className="text">
              Become part of a thriving community that embraces plant-based
              living and shares their journey towards a healthier, greener
              future.
            </p>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <button className="tf-btn style-2 fw-6 btn-fill animate-hover-btn">
                <span>Start today</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
