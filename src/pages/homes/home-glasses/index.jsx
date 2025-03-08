import Features from "@/components/common/Features2";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Topbar2 from "@/components/headers/Topbar2";
import Banner from "@/components/homes/home-glasses/Banner";
import Categories from "@/components/homes/home-glasses/Categories";
import Collections from "@/components/homes/home-glasses/Collections";
import Countdown from "@/components/homes/home-glasses/Countdown";
import Hero from "@/components/homes/home-glasses/Hero";
import Products from "@/components/homes/home-glasses/Products";
import ShopGram from "@/components/homes/home-glasses/ShopGram";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Glasses || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeGlassesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-primary-6">
        <Topbar2 bgColor="bg_dark" />

        <Header2 uppercase />

        <Hero />
        <Banner />
        <Countdown />
        <Products />
        <Collections />
        <Categories />
        <ShopGram />

        <Features titleFont={"font-gloock"} />
        <Footer2 />
      </div>
    </>
  );
}
