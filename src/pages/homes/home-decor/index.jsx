import Announcement from "@/components/common/Announcement";
import Footer1 from "@/components/footers/Footer1";
import Header10 from "@/components/headers/Header10";
import Categories from "@/components/homes/home-decor/Categories";
import Collcetion2 from "@/components/homes/home-decor/Collcetion2";
import Collections from "@/components/homes/home-decor/Collections";
import Hero from "@/components/homes/home-decor/Hero";
import Products from "@/components/homes/home-decor/Products";
import Products2 from "@/components/homes/home-decor/Products2";
import TestimonialSection from "@/components/homes/home-decor/Testimonials";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Decor || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeDecorPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-primary-2">
        <Announcement bgColor={"bg_brown-1"} />
        <Header10 />
        <Hero /> <Collections />
        <Products />
        <Categories />
        <Products2 />
        <Collcetion2 />
        <TestimonialSection />
        <Footer1 />
      </div>
    </>
  );
}
