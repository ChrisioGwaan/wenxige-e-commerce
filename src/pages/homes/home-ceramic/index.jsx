import Announcement from "@/components/common/Announcement";
import Features3 from "@/components/common/Features3";
import Footer1 from "@/components/footers/Footer1";
import Header6 from "@/components/headers/Header6";
import Banner from "@/components/homes/home-ceramic/Banner";
import Banner2 from "@/components/homes/home-ceramic/Banner2";
import Categories from "@/components/homes/home-ceramic/Categories";
import Collections from "@/components/homes/home-ceramic/Collections";
import Hero from "@/components/homes/home-ceramic/Hero";
import Marquee from "@/components/common/Marquee";
import Newsletter from "@/components/homes/home-ceramic/Newsletter";
import Products from "@/components/homes/home-ceramic/Products";
import Testimonials from "@/components/homes/home-ceramic/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Ceramic || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeCeramicPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Announcement />
      <Header6 />
      <Hero />
      <Features3 />
      <Collections />
      <Banner />
      <Products />
      <Categories />
      <Banner2 />
      <Marquee />
      <Testimonials />
      <Newsletter />
      <Footer1 />
    </>
  );
}
