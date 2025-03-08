import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import OurStore from "@/components/othersPages/OurStore";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Our Stores || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function OurStorePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Our Store</div>
        </div>
      </div>

      <OurStore />
      <Footer1 />
    </>
  );
}
