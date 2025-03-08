import { useContextElement } from "@/context/Context";

import React, { useState } from "react";

export default function VolumeDiscountGrid({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { updateQuantity } = useContextElement();

  const discountsGrid = [
    {
      name: "3x Socks",
      percent: "Save 10%",
      imgSrc: "/images/item/sock-3items.jpg",
      imgAlt: "3x Socks",
      priceCompare: "$90.00",
      priceRegular: "$81.00",
      value: 3,
    },
    {
      name: "5x Socks",
      percent: "Save 15%",
      imgSrc: "/images/item/sock-5items.jpg",
      imgAlt: "5x Socks",
      priceCompare: "$195.00",
      priceRegular: "$165.75",
      badge: {
        text: "Most popular",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 252.1V48C0 21.5 21.5 0 48 0h204.1a48 48 0 0 1 33.9 14.1l211.9 211.9c18.7 18.7 18.7 49.1 0 67.9L293.8 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 286.1A48 48 0 0 1 0 252.1zM112 64c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
          </svg>
        ),
      },
      value: 5,
    },
    {
      name: "7x Socks",
      percent: "Save 20%",
      imgSrc: "/images/item/sock-5items.jpg",
      imgAlt: "7x Socks",
      priceCompare: "$273.00",
      priceRegular: "$218.40",
      value: 7,
    },
  ];

  return (
    <div className="tf-product-volume-discount">
      <div className="flat-check-list list-volume-discount-grid">
        {discountsGrid.map((item, index) => (
          <div
            key={index}
            className={`check-item volume-discount-item ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="rule-item-summary">
              <div className="check-radio">
                <span />
              </div>
              <div className="thumbnail-box">
                <div className="thumbnail">
                  <img
                    alt={item.imgAlt}
                    src={item.imgSrc}
                    width={120}
                    height={152}
                  />
                </div>
                <h5 className="name">{item.name}</h5>
              </div>
              <span className="percent">{item.percent}</span>
            </div>
            <div className="rule-price-total">
              <div className="price-compare">{item.priceCompare}</div>
              <div className="price-regular">{item.priceRegular}</div>
            </div>
            {item.badge && (
              <div className="bag-sticky">
                <div className="feature effect-flash">
                  {item.badge.icon}
                  {item.badge.text}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="tf-btn bg_green-11 w-100 justify-content-center fw-6 effect-flash text_white text-uppercase letter-3"
        onClick={() =>
          updateQuantity(product.id, discountsGrid[activeIndex].value)
        }
      >
        Choose this deal
      </button>
    </div>
  );
}
