import Announcmentbar from "@/components/common/Announcmentbar";
import Marquee from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Banner from "@/components/homes/home-food/Banner";
import Banner2 from "@/components/homes/home-food/Banner2";
import Features from "@/components/homes/home-food/Features";
import Hero from "@/components/homes/home-food/Hero";
import Process from "@/components/homes/home-food/Process";
import Products from "@/components/homes/home-food/Products";
import Testimonials from "@/components/homes/home-food/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Food || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeFoodPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Announcmentbar bgColor="announcement-bar-black bg_green-7" />
      <Header4 />
      <Hero />
      <Features />
      <Banner />
      <Products />
      <Testimonials />
      <Process />
      <Banner2 />
      <Marquee parentClass="flat-spacing-1 tf-marquee marquee-lg space-1" />
      <Footer1 />
    </>
  );
}
