import Announcmentbar from "@/components/common/Announcmentbar";
import Features from "@/components/common/Features2";

import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Banner from "@/components/homes/home-kitchen-wear/Banner";
import Categories from "@/components/homes/home-kitchen-wear/Categories";
import CollectionBanner from "@/components/homes/home-kitchen-wear/CollectionBanner";
import Collections from "@/components/homes/home-kitchen-wear/Collections";
import Hero from "@/components/homes/home-kitchen-wear/Hero";
import Lookbook from "@/components/homes/home-kitchen-wear/Lookbook";
import Products from "@/components/homes/home-kitchen-wear/Products";
import Testimonials from "@/components/homes/home-kitchen-wear/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Kitchen Wear || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeKitchenWearPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-primary-4">
        <Announcmentbar bgColor="bg_primary" />
        <Header4 />
        <Hero /> <Collections />
        <Products />
        <Banner />
        <Categories />
        <Lookbook />
        <Testimonials />
        <CollectionBanner />
        <Features
          bgColor=""
          parentClass="flat-spacing-1 pt_0 flat-iconbox wow fadeInUp"
        />
        <Footer1 bgColor="background-gray" />
      </div>
    </>
  );
}
