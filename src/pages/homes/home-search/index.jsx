import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Topbar2 from "@/components/headers/Topbar2";
import Products from "@/components/homes/home-search/Products";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Search || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeSearchPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar2 />
      <Header2 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Search</div>
        </div>
      </div>
      <Products />
      <Footer2 />
    </>
  );
}
