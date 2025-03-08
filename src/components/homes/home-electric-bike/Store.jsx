import { Link } from "react-router-dom";
import React from "react";

export default function Store() {
  return (
    <section className="flat-spacing-14 pb_0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Find a store</span>
        </div>
        <div className="flat-location style-right">
          <div className="banner-map">
            <img
              className="lazyload"
              data-src="/images/country/map-2.jpg"
              alt="map"
              src="/images/country/map-2.jpg"
              width={1600}
              height={670}
            />
          </div>
          <div className="content">
            <h3
              className="heading fw-6 font-sora wow fadeInUp"
              data-wow-delay="0s"
            >
              Toronto Store
            </h3>
            <p className="subtext wow fadeInUp" data-wow-delay="0s">
              301 Front St W Toronto, Canada
              <br />
              chris322322@gmail.com
              <br />
              (08) 8942 1299
            </p>
            <p className="subtext wow fadeInUp" data-wow-delay="0s">
              Mon - Fri, 8:30am - 10:30pm
              <br />
              Saturday, 8:30am - 10:30pm
              <br />
              Sunday Closed
            </p>
            <Link
              to={`/our-store`}
              target="_blank"
              className="tf-btn btn-line collection-other-link fw-4 wow fadeInUp"
              data-wow-delay="0s"
            >
              Get Directions
              <i className="icon icon-arrow1-top-left" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
