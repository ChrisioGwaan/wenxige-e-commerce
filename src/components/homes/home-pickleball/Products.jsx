import ProductCard32 from "@/components/shopCards/ProductCard32";
import { products66 } from "@/data/products";
import React from "react";

export default function Products() {
  return (
    <section className="flat-spacing-3">
      <div className="flat-title">
        <span className="title wow fadeInUp" data-wow-delay="0s">
          Pickleball Paddle Tiers
        </span>
        <p
          className="sub-title fs-18 text_black-2 wow fadeInUp"
          data-wow-delay="0s"
        >
          Choose from our range of premium paddles that offer different levels
          of control and power.
        </p>
      </div>
      <div className="tf-grid-layout tf-col-2 md-col-3 gap-0 home-pckaleball-page">
        {products66.map((product, i) => (
          <ProductCard32
            parentClass="card-product type-line-padding"
            product={product}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}
