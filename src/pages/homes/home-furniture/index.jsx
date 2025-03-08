import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Features from "@/components/homes/home-6/Features";
import Announcment from "@/components/homes/home-furniture/Announcment";
import Banner from "@/components/homes/home-furniture/Banner";
import Categories from "@/components/homes/home-furniture/Categories";
import Collection from "@/components/homes/home-furniture/Collection";
import Hero from "@/components/homes/home-furniture/Hero";
import Lookbook from "@/components/homes/home-furniture/Lookbook";
import Products from "@/components/homes/home-furniture/Products";
import ShopGram from "@/components/homes/home-furniture/ShopGram";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Furniture || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeFurniturePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-primary-2">
        <Announcment />
        <Header4 /> <Hero />
        <Collection />
        <Categories />
        <Banner />
        <Products />
        <Lookbook />
        <Features parentClass="flat-spacing-27 flat-iconbox wow fadeInUp  has-line-bottom" />
        <ShopGram />
        <Footer1 bgColor="background-gray" />
      </div>
    </>
  );
}
