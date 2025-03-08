import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Brands from "@/components/othersPages/brands/Brands";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Brands || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function BrandsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Brands</div>
        </div>
      </div>

      <Brands />
      <Footer1 />
    </>
  );
}
