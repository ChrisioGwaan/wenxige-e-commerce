import { useContextElement } from "@/context/Context";
import React, { useState } from "react";

export default function VolumeDiscount({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { updateQuantity } = useContextElement();

  const discounts = [
    {
      name: "Buy 3 items for 10% OFF per item",
      percent: "Save 10%",
      priceCompare: "$90.00",
      priceRegular: "$81.00",
      value: 3,
    },
    {
      name: "Buy 5 items for 15% OFF per item",
      percent: "Save 15%",
      priceCompare: "$150.00",
      priceRegular: "$127.00",
      value: 5,
    },
    {
      name: "Buy 7 items for 20% OFF per item",
      percent: "Save 20%",
      priceCompare: "$210.00",
      priceRegular: "$168.00",
      value: 7,
    },
    {
      name: "Buy 9 items for 25% OFF per item",
      percent: "Save 25%",
      priceCompare: "$270.00",
      priceRegular: "$200.00",
      value: 9,
    },
  ];

  return (
    <div className="tf-product-volume-discount">
      <div className="flat-check-list list-volume-discount">
        {discounts.map((discount, index) => (
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
              <h5 className="name">{discount.name}</h5>
              <span className="percent">{discount.percent}</span>
            </div>
            <div className="d-flex justify-content-end">
              <div className="rule-price-total">
                <div className="price-label">Total</div>
                <div className="price-compare">{discount.priceCompare}</div>
                <div className="price-regular">{discount.priceRegular}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="tf-btn btn-fill w-100 justify-content-center fw-6 fs-16 animate-hover-btn"
        onClick={() => updateQuantity(product.id, discounts[activeIndex].value)}
      >
        Choose this deal
      </button>
    </div>
  );
}
