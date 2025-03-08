import { Link } from "react-router-dom";
import React from "react";

export default function CollectionsGrid() {
  return (
    <section className="flat-spacing-18 pb_0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title font-libre-baskerville">Collections</span>
          <p className="sub-title text_black-2">
            Shop our best selling collections for a range of styles loved by
            you. Whether you're looking to find your perfect fit with our
            signature <br />
            swim styles or you're looking for matching resort sets, we've got
            you covered - and your girls.
          </p>
        </div>
        <div className="masonry-layout style-2 style-4 wow fadeInUp">
          <div className="item-1 collection-item large hover-img">
            <div className="collection-inner">
              <Link
                to={`/shop-default`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/swm-cls1.jpg"
                  alt="collection-img"
                  width={593}
                  height={818}
                  src="/images/collections/swm-cls1.jpg"
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-default`}
                  className="tf-btn rounded-0 fs-14 fw-6 collection-title hover-icon"
                >
                  <span>SEA DIVE</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="item-2 collection-item large hover-img">
            <div className="collection-inner">
              <Link
                to={`/shop-default`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/swm-cls2.jpg"
                  alt="collection-img"
                  width={593}
                  height={391}
                  src="/images/collections/swm-cls2.jpg"
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-default`}
                  className="tf-btn rounded-0 fs-14 fw-6 collection-title hover-icon"
                >
                  <span>BIKINIS</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="item-3 collection-item large hover-img">
            <div className="collection-inner">
              <Link
                to={`/shop-default`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/swm-cls3.jpg"
                  alt="collection-img"
                  width={593}
                  height={391}
                  src="/images/collections/swm-cls3.jpg"
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-default`}
                  className="tf-btn rounded-0 fs-14 fw-6 collection-title hover-icon"
                >
                  <span>Wenxige COLLECTIVE</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="item-4 collection-item large hover-img">
            <div className="collection-inner">
              <Link
                to={`/shop-default`}
                className="collection-image img-style rounded-0"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/swm-cls4.jpg"
                  alt="collection-img"
                  width={593}
                  height={818}
                  src="/images/collections/swm-cls4.jpg"
                />
              </Link>
              <div className="collection-content">
                <Link
                  to={`/shop-default`}
                  className="tf-btn rounded-0 fs-14 fw-6 collection-title hover-icon"
                >
                  <span>GIRLS</span>
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
