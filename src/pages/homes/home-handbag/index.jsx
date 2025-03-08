import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import BannerCollections from "@/components/homes/home-handbag/BannerCollections";
import Collections from "@/components/homes/home-handbag/Collections";
import Hero from "@/components/homes/home-handbag/Hero";
import Lookbook from "@/components/homes/home-handbag/Lookbook";
import Marquee from "@/components/homes/home-handbag/Marquee";
import Newsletter from "@/components/homes/home-handbag/Newsletter";
import Products from "@/components/homes/home-handbag/Products";
import ShopGram from "@/components/homes/home-handbag/ShopGram";
import Testimonials from "@/components/homes/home-handbag/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Handbag || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeHandbagPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header6
        parentClass="header-default header-absolute header-uppercase header-white header-scroll-white"
        isArrow={false}
        uppercase
      />
      <Hero />
      <Marquee />
      <Testimonials />
      <Collections />
      <Products />
      <BannerCollections />
      <Lookbook />
      <ShopGram />
      <Newsletter />
      <Footer6 />
    </>
  );
}
