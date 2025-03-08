import Features from "@/components/common/Features2";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";
import BannerCollection from "@/components/homes/home-cosmetic/BannerCollection";
import Categories from "@/components/homes/home-cosmetic/Categories";
import Hero from "@/components/homes/home-cosmetic/Hero";
import Marquee from "@/components/homes/home-cosmetic/Marquee";
import Products from "@/components/homes/home-cosmetic/Products";
import Products2 from "@/components/homes/home-cosmetic/Products2";
import Products3 from "@/components/homes/home-cosmetic/Products3";
import SkinChange from "@/components/homes/home-cosmetic/SkinChange";
import Testimonials from "@/components/homes/home-cosmetic/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Cosmetic || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeCosmeticPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header2 />
      <Hero />
      <Marquee />
      <Categories />
      <Products />
      <BannerCollection />
      <Products2 />
      <Products3 />

      <SkinChange />
      <Testimonials />
      <Features bgColor="flat-spacing-3 bg_grey-7 flat-iconbox" />
      <Footer2 />
    </>
  );
}
