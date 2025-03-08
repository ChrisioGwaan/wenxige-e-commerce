import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Checkout from "@/components/othersPages/Checkout";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Checkout || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function CheckoutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Check Out</div>
        </div>
      </div>

      <Checkout />
      <Footer1 />
    </>
  );
}
