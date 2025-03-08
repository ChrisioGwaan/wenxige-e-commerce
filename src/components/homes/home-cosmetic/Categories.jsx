import { Link } from "react-router-dom";
import React from "react";

export default function Categories() {
  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="flat-title px-0 flex-row">
          <h5 className="fw-6">Featured Categories</h5>
        </div>
        <div className="tf-categories-wrap justify-content-start">
          <div className="tf-categories-container">
            <div className="collection-item-circle style-2 hover-img">
              <div className="has-saleoff-wrap position-relative">
                <Link
                  to={`/shop-collection-list`}
                  className="collection-image img-style"
                >
                  <img
                    className="lazyload"
                    data-src="/images/collections/cls-cosmetic1.jpg"
                    alt="collection-img"
                    src="/images/collections/cls-cosmetic1.jpg"
                    width={160}
                    height={160}
                  />
                </Link>
                <div className="sale-off fw-5">10% off</div>
              </div>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  New Arrivals
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-cosmetic2.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-cosmetic2.jpg"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Best Sellers
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <div className="has-saleoff-wrap position-relative">
                <Link
                  to={`/shop-collection-list`}
                  className="collection-image img-style"
                >
                  <img
                    className="lazyload"
                    data-src="/images/collections/cls-cosmetic3.jpg"
                    alt="collection-img"
                    src="/images/collections/cls-cosmetic3.jpg"
                    width={160}
                    height={162}
                  />
                </Link>
                <div className="sale-off fw-5">Trending</div>
              </div>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Foundation
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-cosmetic4.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-cosmetic4.jpg"
                  width={160}
                  height={162}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Moisturizers
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-cosmetic5.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-cosmetic5.jpg"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Perfume
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-cosmetic6.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-cosmetic6.jpg"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Minis
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <div className="has-saleoff-wrap position-relative">
                <Link
                  to={`/shop-collection-list`}
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
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Sale
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-cosmetic7.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-cosmetic7.jpg"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Gift Cards
                </Link>
              </div>
            </div>
            <div className="collection-item-circle style-2 hover-img">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style"
              >
                <img
                  className="lazyload"
                  data-src="/images/collections/cls-cosmetic8.jpg"
                  alt="collection-img"
                  src="/images/collections/cls-cosmetic8.jpg"
                  width={160}
                  height={160}
                />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
                  Under $20
                </Link>
              </div>
            </div>
          </div>
          <div className="tf-shopall-wrap">
            <div className="collection-item-circle style-2 tf-shopall">
              <Link
                to={`/shop-collection-list`}
                className="collection-image img-style tf-shopall-icon"
              >
                <i className="icon icon-arrow1-top-left" />
              </Link>
              <div className="collection-content text-center">
                <Link to={`/shop-collection-list`} className="link title fw-6">
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
