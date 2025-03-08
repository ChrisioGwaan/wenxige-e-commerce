import Announcement from "@/components/common/Announcement";
import Footer5 from "@/components/footers/Footer5";
import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-activewear/Banner";
import Collections from "@/components/homes/home-activewear/Collections";
import Countdown from "@/components/homes/home-activewear/Countdown";
import Features from "@/components/homes/home-activewear/Features";
import Features2 from "@/components/homes/home-activewear/Features2";
import Hero from "@/components/homes/home-activewear/Hero";
import Lookbook from "@/components/homes/home-activewear/Lookbook";
import Products from "@/components/homes/home-activewear/Products";
import Products2 from "@/components/homes/home-activewear/Products2";
import ShopGram from "@/components/homes/home-activewear/ShopGram";
import Testimonials from "@/components/homes/home-activewear/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Activewear || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeActivewearPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Announcement bgColor="bg_violet-1" />
      <Header13 />
      <Hero />
      <Features />
      <Collections />
      <Products />
      <Countdown />
      <Products2 />
      <Lookbook />
      <Banner />
      <Features2 />
      <Testimonials />
      <ShopGram />
      <Footer5 bgColor="background-gray" />
    </>
  );
}
