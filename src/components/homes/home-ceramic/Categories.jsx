import { Link } from "react-router-dom";
import React from "react";

export default function Categories() {
  return (
    <section className="flat-spacing-1 bg_f3f5f5">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Shop by categories</span>
        </div>
        <div className="tf-categories-wrap">
          <div className="tf-categories-container">
            <div className="collection-item-circle hover-img">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/new.png"
                  alt="collection-img"
                  src="/images/collections/new.png"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-sub`} className="link title fw-6">
                  New Arrivals
                </Link>
              </div>
            </div>
            <div className="collection-item-circle hover-img">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-ceramic-4.png"
                  alt="collection-img"
                  src="/images/collections/collection-ceramic-4.png"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-sub`} className="link title fw-6">
                  Home Décor
                </Link>
              </div>
            </div>
            <div className="collection-item-circle hover-img">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-ceramic-5.png"
                  alt="collection-img"
                  src="/images/collections/collection-ceramic-5.png"
                  width={160}
                  height={162}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-sub`} className="link title fw-6">
                  Dinnerware
                </Link>
              </div>
            </div>
            <div className="collection-item-circle hover-img">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-ceramic-6.png"
                  alt="collection-img"
                  src="/images/collections/collection-ceramic-6.png"
                  width={160}
                  height={162}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-sub`} className="link title fw-6">
                  Servingware
                </Link>
              </div>
            </div>
            <div className="collection-item-circle hover-img">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-ceramic-7.png"
                  alt="collection-img"
                  src="/images/collections/collection-ceramic-7.png"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-sub`} className="link title fw-6">
                  Drinkware
                </Link>
              </div>
            </div>
            <div className="collection-item-circle hover-img">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/collection-ceramic-8.png"
                  alt="collection-img"
                  src="/images/collections/collection-ceramic-8.png"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-sub`} className="link title fw-6">
                  Cookware
                </Link>
              </div>
            </div>
            <div className="collection-item-circle hover-img">
              <div className="has-saleoff-wrap position-relative">
                <Link
                  to={`/shop-collection-sub`}
                  className="collection-image img-style"
                >
                  <img
                    className="lazyload"
                    data-src="/images/collections/sale.jpg"
                    alt="collection-img"
                    src="/images/collections/sale.jpg"
                    width={160}
                    height={160}
                  />
                </Link>
                <div className="sale-off fw-5">30% off</div>
              </div>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-sub`} className="link title fw-6">
                  Sale
                </Link>
              </div>
            </div>
          </div>
          <div className="tf-shopall-wrap">
            <div className="collection-item-circle tf-shopall">
              <Link
                to={`/shop-collection-sub`}
                className="collection-image img-style tf-shopall-icon"
              >
                <i className="icon icon-arrow1-top-left" />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-sub`} className="link title fw-6">
                  Shop all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
