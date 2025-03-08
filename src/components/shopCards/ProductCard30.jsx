import { useState } from "react";
import React from "react";

import { useContextElement } from "@/context/Context";
import { Link } from "react-router-dom";
export default function ProductCard30({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <div className="card-product fl-item type-1 bg_white p-0">
      <div className="card-product-wrapper">
        <Link to={`/product-detail/${product.id}`} className="product-img">
          <img
            className="lazyload img-product"
            data-src={product.imgSrc}
            alt="image-product"
            src={currentImage}
            width={676}
            height={944}
          />
          <img
            className="lazyload img-hover"
            data-src={product.imgHoverSrc}
            alt="image-product"
            src={product.imgHoverSrc}
            width={676}
            height={944}
          />
        </Link>
        <div className="list-product-btn absolute-2">
          <a
            href="#quick_add"
            onClick={() => setQuickAddItem(product.id)}
            data-bs-toggle="modal"
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
            </span>
            <span className="icon icon-delete" />
          </a>
          <a
            href="#compare"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasLeft"
            onClick={() => addToCompareItem(product.id)}
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
        {product.oldPrice ? (
          <div className="on-sale-wrap text-end">
            <div className="on-sale-item">
              -
              {Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              )}
              %
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="card-product-info">
        <Link to={`/product-detail/${product.id}`} className="title link">
          {product.title}
        </Link>
        {product.oldPrice ? (
          <span className="price">
            <span className="fw-4 text-sale">
              ${product.oldPrice.toFixed(2)}
            </span>{" "}
            <span className="text_primary">${product.price.toFixed(2)}</span>
          </span>
        ) : (
          <span className="price">${product.price.toFixed(2)}</span>
        )}

        {product.colors?.length > 0 && (
          <ul className="list-color-product justify-content-center">
            {product.colors?.map((color, i) => (
              <li
                className={`list-color-item color-swatch ${
                  currentImage == color.imgSrc ? "active" : ""
                }  `}
                onMouseOver={() => setCurrentImage(color.imgSrc)}
                key={i}
              >
                <span className="tooltip">{color.name}</span>
                <span className={`swatch-value ${color.colorClass}`} />
                <img
                  className="lazyload"
                  data-src={color.imgSrc}
                  alt="image-product"
                  src={color.imgSrc}
                  width={676}
                  height={944}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
