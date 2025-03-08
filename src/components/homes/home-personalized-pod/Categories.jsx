import { Link } from "react-router-dom";
import React from "react";

export default function Categories() {
  return (
    <section className="flat-spacing-4 section-cls-personalized-pod section-full-1">
      <img
        className=""
        data-src="/images/collections/bg-personalized-pod-3.png"
        alt=""
        src="/images/collections/bg-personalized-pod-3.png"
        width={2000}
        height={1101}
      />
      <div className="container">
        <div className="flat-title gap-14">
          <span
            className="title wow fadeInUp fw-6 text-center"
            data-wow-delay="0s"
          >
            Explore our product <br /> categories
          </span>
        </div>
        <div className="masonry-layout style-3">
          <div
            className="item-1 collection-item large hover-img wow fadeInUp"
            data-wow-delay="0s"
          >
            <div className="collection-inner">
              <Link
                to={`/shop-women`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-personalized-pod-4.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-personalized-pod-4.jpg"
                  width={600}
                  height={835}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-women`}
                  className="tf-btn collection-title hover-icon"
                >
                  <span>Ornaments</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="item-2 collection-item large hover-img wow fadeInUp"
            data-wow-delay=".1s"
          >
            <div className="collection-inner">
              <Link
                to={`/shop-default`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-personalized-pod-5.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-personalized-pod-5.jpg"
                  width={600}
                  height={396}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-default`}
                  className="tf-btn collection-title hover-icon"
                >
                  <span>Decor</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="item-3 collection-item large hover-img wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="collection-inner">
              <Link
                to={`/shop-default`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-personalized-pod-6.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-personalized-pod-6.jpg"
                  width={600}
                  height={399}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-default`}
                  className="tf-btn collection-title hover-icon"
                >
                  <span>Christmas Deals</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="item-4 collection-item large hover-img wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="collection-inner">
              <Link
                to={`/shop-men`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-personalized-pod-7.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-personalized-pod-7.jpg"
                  width={600}
                  height={835}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-men`}
                  className="tf-btn collection-title hover-icon"
                >
                  <span>Crossword Puzzle</span>
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
