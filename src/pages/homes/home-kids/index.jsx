import Footer1 from "@/components/footers/Footer1";
import Header17 from "@/components/headers/Header17";
import CollectionBanner from "@/components/homes/home-kids/CollectionBanner";
import Collections from "@/components/homes/home-kids/Collections";
import Features from "@/components/homes/home-kids/Features";
import Hero from "@/components/homes/home-kids/Hero";
import Lookbook from "@/components/homes/home-kids/Lookbook";
import Marquee from "@/components/homes/home-kids/Marquee";
import Products from "@/components/homes/home-kids/Products";
import Products2 from "@/components/homes/home-kids/Products2";
import Shopgram from "@/components/homes/home-kids/Shopgram";
import Announcment from "@/components/homes/multi-brand/Announcment";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Kids || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeKidsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Announcment />
      <Header17 />
      <Hero />
      <Products />
      <Collections />
      <Products2 />
      <CollectionBanner />
      <Marquee />
      <Lookbook />
      <Features />
      <Shopgram />
      <Footer1 bgColor="background-gray" />
    </>
  );
}
