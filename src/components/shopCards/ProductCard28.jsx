import { useContextElement } from "@/context/Context";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Shopcard28({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);
  const { setQuickViewItem } = useContextElement();
  const {
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();
  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);
  return (
    <div className="card-product style-8">
      <div className="card-product-wrapper">
        <Link to={`/product-detail/${product.id}`} className="product-img">
          <img
            width={360}
            height={360}
            className="lazyload img-product"
            data-src={product.imgSrc}
            src={currentImage}
            alt="image-product"
          />
          <img
            width={360}
            height={360}
            className="lazyload img-hover"
            data-src={product.imgHoverSrc}
            src={product.imgHoverSrc}
            alt="image-product"
          />
        </Link>
        <div className="list-product-btn absolute-2">
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
              {" "}
              {isAddedtoWishlist(product.id)
                ? "Already Wishlisted"
                : "Add to Wishlist"}
            </span>
            <span className="icon icon-delete" />
          </a>
          <a
            href="#compare"
            data-bs-toggle="offcanvas"
            onClick={() => addToCompareItem(product.id)}
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
        {product.preOrder && (
          <div className="on-sale-wrap text-end">
            <div className="on-sale-item pre-order">Pre-Order</div>
          </div>
        )}
      </div>
      <div className="card-product-info text-center">
        <Link to={`/product-detail/${product.id}`} className="title link">
          {product.title}
        </Link>
        <span className="price">${product.price.toFixed(2)}</span>
        {product.colors ? (
          <ul className="list-color-product justify-content-center">
            {product.colors.map((color, index) => (
              <li
                className={`list-color-item color-swatch ${
                  currentImage == color.imgSrc ? "active" : ""
                }`}
                onMouseOver={() => setCurrentImage(color.imgSrc)}
                key={index}
              >
                <span className="tooltip">{color.name}</span>
                <span className={`swatch-value ${color.colorClass}`} />
                <img
                  width={360}
                  height={360}
                  className="lazyload"
                  data-src={color.imgSrc}
                  src={color.imgSrc}
                  alt="image-product"
                />
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
        <a
          className="tf-btn tf-btn-loading"
          onClick={() => addProductToCart(product.id)}
        >
          {isAddedToCartProducts(product.id) ? "Already Added" : "Add to cart"}
        </a>
      </div>
    </div>
  );
}
