import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";
import ShopDefault from "@/components/shop/ShopDefault";
import ShopStyleList from "@/components/shop/ShopStyleList";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Product Style List || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function ProductStyleListPage() {
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
      <ShopStyleList />
      <Footer1 />
    </>
  );
}
