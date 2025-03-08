import Brands from "@/components/common/Brands";
import Features from "@/components/common/Features2";
import Footer2 from "@/components/footers/Footer2";
import Header22 from "@/components/headers/Header22";
import Topbar4 from "@/components/headers/Topbar4";
import Collections from "@/components/homes/home-gaming-accessories/Collections";
import Hero from "@/components/homes/home-gaming-accessories/Hero";
import Lookbook from "@/components/homes/home-gaming-accessories/Lookbook";
import Marquee from "@/components/homes/home-gaming-accessories/Marquee";
import Products from "@/components/homes/home-gaming-accessories/Products";
import Products2 from "@/components/homes/home-gaming-accessories/Products2";
import Products3 from "@/components/homes/home-gaming-accessories/Products3";
import Store from "@/components/homes/home-gaming-accessories/Store";
import Testimonials from "@/components/homes/home-gaming-accessories/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home Gamming Accessories || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeGamingAccessoriesPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="home-gaming-accessories color-primary-14">
        <Topbar4 />
        <Header22 />
        <Hero />
        <Marquee />
        <Features bgColor="flat-spacing-3 flat-iconbox line" />
        <Collections />
        <Products />
        <Products2 />
        <Lookbook />
        <Products3 />
        <Testimonials />
        <Brands parentClass="flat-spacing-1 pt_0" />
        <Store />
        <Footer2 />
      </div>
    </>
  );
}
