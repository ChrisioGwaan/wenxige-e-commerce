import Features from "@/components/common/Features2";
import Footer1 from "@/components/footers/Footer1";
import Footer7 from "@/components/footers/Footer7";
import Header9 from "@/components/headers/Header9";
import Topbar2 from "@/components/headers/Topbar2";
import Topbar3 from "@/components/headers/Topbar3";
import Brands from "@/components/homes/home-accessories/Brands";
import Categories from "@/components/homes/home-accessories/Categories";
import Collections from "@/components/homes/home-accessories/Collections";

import Hero from "@/components/homes/home-accessories/Hero";
import Products from "@/components/homes/home-accessories/Products";
import Products2 from "@/components/homes/home-accessories/Products2";
import ShopGram from "@/components/homes/home-accessories/ShopGram";
import Testimonials from "@/components/homes/home-accessories/Testimonials";

import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Accessories || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeAccessoriesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar3 parentClass="announcement-bar bg_blue" />
      <Header9 />
      <Hero />
      <Features bgColor="" />
      <div className="has-line-bottom"></div>
      <Products />
      <Categories />
      <Collections />
      <Products2 />
      <Testimonials />
      <Brands />
      <ShopGram />
      <Footer7 />
    </>
  );
}
