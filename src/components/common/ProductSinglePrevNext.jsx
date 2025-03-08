import { allProducts } from "@/data/products";
import { Link } from "react-router-dom";
import React from "react";

export default function ProductSinglePrevNext({ currentId = 1 }) {
  return (
    <div className="tf-breadcrumb-prev-next">
      <Link
        to={`/product-detail/${currentId <= 1 ? 1 : currentId - 1}`}
        className="tf-breadcrumb-prev hover-tooltip center"
      >
        <i className="icon icon-arrow-left" />
        {/* <span className="tooltip">Cotton jersey top</span> */}
      </Link>
      <a href="#" className="tf-breadcrumb-back hover-tooltip center">
        <i className="icon icon-shop" />
        {/* <span className="tooltip">Back to Women</span> */}
      </a>
      <Link
        to={`/product-detail/${
          currentId >= allProducts.length ? 1 : currentId + 1
        }`}
        className="tf-breadcrumb-next hover-tooltip center"
      >
        <i className="icon icon-arrow-right" />
        {/* <span className="tooltip">Cotton jersey top</span> */}
      </Link>
    </div>
  );
}
