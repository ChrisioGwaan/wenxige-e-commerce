import Features from "@/components/common/Features2";
import Footer5 from "@/components/footers/Footer5";
import Header2 from "@/components/headers/Header2";
import Banner from "@/components/homes/home-tee/Banner";
import Categories from "@/components/homes/home-tee/Categories";
import Hero from "@/components/homes/home-tee/Hero";
import Products from "@/components/homes/home-tee/Products";
import Products2 from "@/components/homes/home-tee/Products2";
import ShopGram from "@/components/homes/home-tee/ShopGram";
import Testimonials from "@/components/homes/home-tee/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Tee || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeTeePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 uppercase isArrow={false} Linkfs="fs-14" />
      <Hero />
      <Features titleFont="font-caprasimo" bgColor="" />
      <Categories />
      <Banner />
      <Products />
      <Products2 />
      <Testimonials />
      <ShopGram />
      <Footer5 />
    </>
  );
}
