import { Link } from "react-router-dom";
import React from "react";

export default function Collections2() {
  return (
    <section
      className="flat-spacing-18 bg_grey-5"
      style={{
        backgroundImage: "url(images/collections/bg-camp-and-hike-1.png)",
      }}
    >
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Top Categories</span>
        </div>
        <div className="masonry-layout-v7">
          <div className="collection-item style-2 hover-img item-1">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-camp-and-hike-1.jpg"
                  alt="collection-img"
                  src="/images/collections/collection-camp-and-hike-1.jpg"
                  width={600}
                  height={545}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 rounded-0"
                >
                  <span>Travel</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="collection-item style-2 hover-img item-2">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-camp-and-hike-2.jpg"
                  alt="collection-img"
                  src="/images/collections/collection-camp-and-hike-2.jpg"
                  width={360}
                  height={327}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 rounded-0"
                >
                  <span>Snow Sports</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="collection-item style-2 hover-img item-3">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-camp-and-hike-3.jpg"
                  alt="collection-img"
                  src="/images/collections/collection-camp-and-hike-3.jpg"
                  width={360}
                  height={327}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 rounded-0"
                >
                  <span>Footwear</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="collection-item style-2 hover-img item-4">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-camp-and-hike-4.jpg"
                  alt="collection-img"
                  src="/images/collections/collection-camp-and-hike-4.jpg"
                  width={360}
                  height={327}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 rounded-0"
                >
                  <span>Clothing</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="collection-item style-2 hover-img item-5">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-camp-and-hike-5.jpg"
                  alt="collection-img"
                  src="/images/collections/collection-camp-and-hike-5.jpg"
                  width={800}
                  height={550}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 rounded-0"
                >
                  <span>Camping Equipment</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="collection-item style-2 hover-img item-6">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-camp-and-hike-6.jpg"
                  alt="collection-img"
                  src="/images/collections/collection-camp-and-hike-6.jpg"
                  width={800}
                  height={550}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 rounded-0"
                >
                  <span>Climbing</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
