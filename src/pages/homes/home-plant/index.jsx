import Footer8 from "@/components/footers/Footer8";
import Header19 from "@/components/headers/Header19";
import Announcmentbar from "@/components/homes/home-plant/Announcmentbar";
import Banner from "@/components/homes/home-plant/Banner";
import Brands from "@/components/homes/home-plant/Brands";
import CollectionBanner from "@/components/homes/home-plant/CollectionBanner";
import Collections from "@/components/homes/home-plant/Collections";
import Features from "@/components/homes/home-plant/Features";
import Hero from "@/components/homes/home-plant/Hero";
import Products from "@/components/homes/home-plant/Products";
import ShopGram from "@/components/homes/home-plant/ShopGram";
import Testimonials from "@/components/homes/home-plant/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Plant || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomePlantPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="bg_f5f5ec">
        <Announcmentbar />
        <Header19 />
        <Hero />
        <Brands />
        <Testimonials />
        <Products />
        <Banner />
        <Features /> <Collections />
        <CollectionBanner />
        <ShopGram />
        <Footer8 bgColor="bg_green-9 footer-home-plant" />
      </div>
    </>
  );
}
