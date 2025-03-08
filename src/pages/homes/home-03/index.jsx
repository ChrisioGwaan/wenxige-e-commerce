import Features from "@/components/common/Features";
import ShopGram from "@/components/common/ShopGram";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Categories from "@/components/homes/home-3/Categories";
import Countdown from "@/components/homes/home-3/Countdown";
import Hero from "@/components/homes/home-3/Hero";
import Products from "@/components/homes/home-3/Products";
import Products2 from "@/components/homes/home-3/Products2";
import Testimonials from "@/components/homes/home-3/Testimonials";
import VideoBanner from "@/components/homes/home-3/VideoBanner";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Features2 from "@/components/common/Features2";
const metadata = {
  title: "Home 3 || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function Homepage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <Hero />
      <Countdown />
      <Products />
      <Categories />
      <Products2 />
      <VideoBanner />
      <Testimonials />
      <div className="mt-5"></div>
      <ShopGram parentClass="flat-spacing-1 pb-0" />
      <Features2 bgColor="" />
      <Footer1 />
    </>
  );
}
