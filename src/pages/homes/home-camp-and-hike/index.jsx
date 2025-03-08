import Announcement from "@/components/common/Announcement";
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Banner from "@/components/homes/home-camp-and-hike/Banner";
import Collections from "@/components/homes/home-camp-and-hike/Collections";
import Collections2 from "@/components/homes/home-camp-and-hike/Collections2";
import Hero from "@/components/homes/home-camp-and-hike/Hero";
import Newsletter from "@/components/homes/home-camp-and-hike/Newsletter";
import Products from "@/components/homes/home-camp-and-hike/Products";
import Products2 from "@/components/homes/home-camp-and-hike/Products2";
import StoreLocations from "@/components/homes/home-camp-and-hike/StoreLocations";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Camp And Hike || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeCampAndHikePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Announcement bgColor={"bg_dark"} />
      <Header11 />
      <Hero />
      <Brands />
      <Collections />
      <Products />
      <Collections2 />
      <Banner />
      <Products2 />
      <StoreLocations />
      <Newsletter />
      <Footer1 />
    </>
  );
}
