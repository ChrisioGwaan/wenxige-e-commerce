import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Brands from "@/components/homes/home-1/Brands";
import Features2 from "@/components/homes/home-5/Features";
import Banner from "@/components/homes/home-headphone/Banner";
import Collections from "@/components/homes/home-headphone/Collections";
import Collections2 from "@/components/homes/home-headphone/Collections2";
import Hero from "@/components/homes/home-headphone/Hero";
import Marquee from "@/components/homes/home-headphone/Marquee";
import Products from "@/components/homes/home-headphone/Products";
import Products2 from "@/components/homes/home-headphone/Products2";
import Testimonials from "@/components/homes/home-headphone/Testimonials";
import Topbar from "@/components/homes/home-headphone/Topbar";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Headphone || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeHeadphonePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar />
      <Header2 />
      <Hero />
      <Collections />
      <Collections2 />
      <Banner />
      <Marquee />
      <Products />
      <Features2 />
      <Products2 />
      <Testimonials />
      <Brands />
      <Footer1 bgColor="background-gray" />
    </>
  );
}
