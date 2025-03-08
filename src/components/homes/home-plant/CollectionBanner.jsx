import { Link } from "react-router-dom";
import React from "react";

export default function CollectionBanner() {
  return (
    <>
      {/* Shop Collection */}
      <section className="flat-spacing-4 pt_0">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text">
            <div
              className="tf-image-wrap radius-10 wow fadeInUp"
              data-wow-delay="0s"
            >
              <img
                className="lazyload"
                data-src="/images/collections/collection-plant-7.jpg"
                alt="collection-img"
                src="/images/collections/collection-plant-7.jpg"
                width={800}
                height={622}
              />
            </div>
            <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
              <span className="sub-heading text-uppercase fw-7 text_green-1">
                GET THE GROW-HOW
              </span>
              <div className="heading text_green-1">
                Ultimate Guide to <br />
                Summer Plant Care
              </div>
              <p className="description text_green-2">
                Keep your plants healthy and thriving this summer! Get pro tips
                from our expert Grow-How® Team.
              </p>
              <Link
                to={`/shop-collection-list`}
                className="tf-btn style-2 btn-fill radius-60 border-0 animate-hover-btn bg_green-9"
              >
                Summer Care Tips
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Shop Collection */}
      <div className="container">
        <div className="bg_green-9" style={{ height: 3 }} />
      </div>
    </>
  );
}
