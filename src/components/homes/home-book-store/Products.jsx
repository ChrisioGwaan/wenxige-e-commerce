import { useContextElement } from "@/context/Context";
import { products67 } from "@/data/products";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Products() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  const [activeIndex, setActiveIndex] = useState(0);
  const [filtered, setfiltered] = useState(products67);

  const tabs = ["All genres", "Fiction", "Classics", "Fantasy", "Romance"];
  useEffect(() => {
    if (tabs[activeIndex] == "All genres") {
      setfiltered(products67);
    } else {
      setfiltered(
        products67.filter((pro) => pro.categories.includes(tabs[activeIndex]))
      );
    }
  }, [activeIndex]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="flat-animate-tab">
          <div
            className="flat-title flex-row justify-content-between align-items-center px-0  flex-wrap wow fadeInUp"
            data-wow-delay="0s"
          >
            <h3 className="title font-libre-baskerville fw-7">
              Popular by Genre
            </h3>
            <ul
              className="widget-tab-5 d-flex  wow fadeInUp mb-0"
              data-wow-delay="0s"
            >
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`nav-tab-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  role="presentation"
                  onClick={() => handleTabClick(index)}
                >
                  <a
                    className={`fw-6 rounded-0 ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane active show"
              id="all-genres"
              role="tabpanel"
            >
              <div className="grid-layout" data-grid="grid-6">
                {filtered.map((product, index) => (
                  <div className="card-product none-hover" key={index}>
                    <div className="card-product-wrapper">
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="product-img"
                      >
                        <img
                          className="lazyload img-product"
                          data-src={product.imgSrc}
                          src={product.imgSrc}
                          alt={product.alt}
                          width={360}
                          height={554}
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
                          data-bs-toggle="modal"
                          onClick={() => setQuickViewItem(product)}
                          className="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span className="icon icon-view" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div className="card-product-info">
                      <a href="#" className="link text_black-2">
                        {product.author}
                      </a>
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="title link"
                      >
                        {product.title}
                      </Link>
                      <span className="price">${product.price.toFixed(2)}</span>{" "}
                      {/* formatted price */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
