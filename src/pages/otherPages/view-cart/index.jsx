import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Cart from "@/components/othersPages/Cart";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "View Cart || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function ViewCartPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Shopping Cart</div>
        </div>
      </div>

      <Cart />
      <Testimonials />
      <RecentProducts />
      <Footer1 />
    </>
  );
}
