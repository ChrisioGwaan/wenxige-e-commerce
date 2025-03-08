import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";
import ProductStyle1 from "@/components/shop/ProductStyle1";
import ProductStyle2 from "@/components/shop/ProductStyle2";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Product Style 2 || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function ProductStylePage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">New Arrival</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>
      <ProductStyle2 />
      <Footer1 />
    </>
  );
}
