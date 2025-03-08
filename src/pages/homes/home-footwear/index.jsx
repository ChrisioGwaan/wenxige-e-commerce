import Marquee from "@/components/common/Marquee";

import Footer6 from "@/components/footers/Footer6";

import Header20 from "@/components/headers/Header20";
import Topbar2 from "@/components/headers/Topbar2";
import Banner from "@/components/homes/home-footwear/Banner";
import Banner2 from "@/components/homes/home-footwear/Banner2";
import Collections from "@/components/homes/home-footwear/Collections";
import Lookbook from "@/components/homes/home-footwear/Lookbook";
import NewsLetter from "@/components/homes/home-footwear/NewsLetter";
import Products from "@/components/homes/home-footwear/Products";
import Testimonials from "@/components/homes/home-footwear/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Footwear || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeFoodwearPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar2 />
      <Header20 />
      <Collections />
      <Products />
      <Banner />
      <Marquee parentClass="flat-spacing-1 tf-marquee marquee-lg" />
      <Lookbook />
      <Testimonials />
      <Banner2 />
      <NewsLetter />
      <Footer6 />
    </>
  );
}
