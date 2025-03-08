import { products1 } from "@/data/products";
import React from "react";
import { ProductCard } from "../shopCards/ProductCard";
import Productcard23 from "../shopCards/Productcard23";

export default function ProductGrid({
  gridItems = 4,
  allproducts = products1,
}) {
  return (
    <>
      <div
        style={{
          width: "fit-content",
          margin: "0  auto",
          fontSize: "17px",
          marginBottom: "24px",
        }}
      >
        {allproducts.length} product(s) found
      </div>
      {gridItems == 1 ? (
        <div className="grid-layout" data-grid="grid-list">
          {/* card product 1 */}
          {allproducts.map((elm, i) => (
            <Productcard23 product={elm} key={i} />
          ))}
          {/* card product 2 */}
        </div>
      ) : (
        <div
          className="grid-layout wrapper-shop"
          data-grid={`grid-${gridItems}`}
        >
          {/* card product 1 */}
          {allproducts.map((elm, i) => (
            <ProductCard product={elm} key={i} />
          ))}
        </div>
      )}
    </>
  );
}
