import { Link } from "react-router-dom";
import React from "react";

export default function Banner() {
  return (
    <section className="tf-slideshow slider-video position-relative">
      <div className="banner-wrapper">
        <video
          src="/images/slider/video-camp-and-hike.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
        <div className="box-content text-center">
          <div className="container wow fadeInUp" data-wow-delay="0s">
            <h1 className="heading text-white fw-6">Elevate your adventure</h1>
            <p className="description text-white">
              Hunting, Camping and Outdoor Gear That's Engineered To Perform.
            </p>
            <Link
              to={`/shop-women`}
              className="tf-btn btn-md btn-light-icon btn-icon rounded-0 animate-hover-btn"
            >
              <span>Shop now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
