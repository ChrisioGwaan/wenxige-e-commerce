import { useContextElement } from "@/context/Context";
import { products52 } from "@/data/products";

import { Link } from "react-router-dom";
import React from "react";

export default function Products() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <section className="flat-spacing-17">
      <div className="container">
        <div
          className="flat-title text-center wow fadeInUp"
          data-wow-delay="0s"
        >
          <span className="title">Choose your meal size</span>
        </div>
        <div
          className="grid-layout  wow fadeInUp"
          data-display={6}
          data-wow-delay="0s"
          data-grid="grid-3"
        >
          {products52.map((product) => (
            <div
              key={product.id}
              className="card-product text-center none-hover fl-item"
            >
              <div className="card-product-wrapper aspect-1 rounded-0">
                <Link
                  to={`/product-detail/${product.id}`}
                  className="product-img"
                >
                  <img
                    className="lazyload img-product"
                    data-src={product.imgSrc}
                    alt={product.alt}
                    src={product.imgSrc}
                    width={533}
                    height={533}
                  />
                </Link>
                <div className="list-product-btn absolute-2">
                  <a
                    href="#quick_add"
                    data-bs-toggle="modal"
                    onClick={() => setQuickAddItem(product.id)}
                    className="box-icon bg_white quick-add tf-btn-loading"
                  >
                    <span className="icon icon-bag" />
                    <span className="tooltip">Quick Add</span>
                  </a>
                  <a
                    onClick={() => addToWishlist(product.id)}
                    className="box-icon bg_white wishlist btn-icon-action"
                  >
                    <span
                      className={`icon icon-heart ${
                        isAddedtoWishlist(product.id) ? "added" : ""
                      }`}
                    />
                    <span className="tooltip">
                      {isAddedtoWishlist(product.id)
                        ? "Already Wishlisted"
                        : "Add to Wishlist"}
                    </span>{" "}
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    onClick={() => addToCompareItem(product.id)}
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon bg_white compare btn-icon-action"
                  >
                    <span
                      className={`icon icon-compare ${
                        isAddedtoCompareItem(product.id) ? "added" : ""
                      }`}
                    />
                    <span className="tooltip">
                      {" "}
                      {isAddedtoCompareItem(product.id)
                        ? "Already Compared"
                        : "Add to Compare"}
                    </span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    onClick={() => setQuickViewItem(product)}
                    data-bs-toggle="modal"
                    className="box-icon bg_white quickview tf-btn-loading"
                  >
                    <span className="icon icon-view" />
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
              </div>
              <div className="card-product-info">
                <Link
                  to={`/product-detail/${product.id}`}
                  className="title link text-lg"
                >
                  {product.title}
                </Link>
                {product.oldPrice ? (
                  <span className="price">
                    <span className="old-price text-base">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                    <span className="new-price price-primary text-base">
                      ${product.price.toFixed(2)}
                    </span>
                  </span>
                ) : (
                  <span className="price text-base">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="tf-pagination-wrap view-more-button text-center">
          <button className="tf-btn-loading tf-loading-default style-2 btn-loadmore">
            <span className="text">Load more</span>
          </button>
        </div>
      </div>
    </section>
  );
}
