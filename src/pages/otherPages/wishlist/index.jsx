import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";

import Wishlist from "@/components/othersPages/Wishlist";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Wishlist || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function WishlistPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header2 />
      <div className="tf-page-title ">
        <div className="container-full">
          <div className="heading text-center">Your wishlist</div>
        </div>
      </div>

      <Wishlist />

      <Footer1 />
    </>
  );
}
