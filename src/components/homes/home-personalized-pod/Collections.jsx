import { Link } from "react-router-dom";
import React from "react";

export default function Collections() {
  return (
    <section className="flat-spacing-4 section-cls-personalized-pod section-full-1">
      <img
        className=""
        data-src="/images/collections/bg-personalized-pod-1.jpg"
        alt=""
        src="/images/collections/bg-personalized-pod-1.jpg"
        width={2800}
        height={1083}
      />
      <div className="container">
        <div className="flat-title gap-14">
          <span
            className="title wow fadeInUp fw-6 text_white"
            data-wow-delay="0s"
          >
            Bring your ideas to life
          </span>
        </div>
        <div className="tf-grid-layout-4">
          <div className="collection-item style-2 hover-img">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style radius-20"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/personalized-pod-1.jpg"
                  alt="collection-img"
                  src="/images/collections/personalized-pod-1.jpg"
                  width={360}
                  height={432}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 radius-3"
                >
                  <span>For Family</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="collection-item style-2 hover-img">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style radius-20"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/personalized-pod-2.jpg"
                  alt="collection-img"
                  src="/images/collections/personalized-pod-2.jpg"
                  width={360}
                  height={432}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 radius-3"
                >
                  <span>For Grandparents</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="collection-item style-2 hover-img">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style radius-20"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/personalized-pod-3.jpg"
                  alt="collection-img"
                  src="/images/collections/personalized-pod-3.jpg"
                  width={360}
                  height={432}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 radius-3"
                >
                  <span>For Couples</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="collection-item style-2 hover-img">
            <div className="collection-inner">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style radius-20"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/personalized-pod-4.jpg"
                  alt="collection-img"
                  src="/images/collections/personalized-pod-4.jpg"
                  width={360}
                  height={432}
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-collection-sub`}
                  className="tf-btn collection-title hover-icon fs-15 radius-3"
                >
                  <span>For Best Friends</span>
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
