import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Timelines from "@/components/othersPages/Timelines";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Timeline || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function TimelinePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Timeline</div>
        </div>
      </div>

      <Timelines />
      <Footer1 />
    </>
  );
}
