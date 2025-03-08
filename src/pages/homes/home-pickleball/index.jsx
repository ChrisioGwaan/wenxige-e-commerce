import Announcement from "@/components/common/Announcement";
import Footer2 from "@/components/footers/Footer2";

import Header21 from "@/components/headers/Header21";
import Banner from "@/components/homes/home-pickleball/Banner";
import Brands from "@/components/homes/home-pickleball/Brands";
import Categories from "@/components/homes/home-pickleball/Categories";
import Collections2 from "@/components/homes/home-pickleball/Collections2";
import Features from "@/components/homes/home-pickleball/Features";
import Hero from "@/components/homes/home-pickleball/Hero";
import Marquee from "@/components/homes/home-pickleball/Marquee";
import Products from "@/components/homes/home-pickleball/Products";
import SingleProduct from "@/components/homes/home-pickleball/SingleProduct";
import Testimonials from "@/components/homes/home-pickleball/Testimonials";

import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Pickleball || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomePickleBallPage() {
  return (
    <div style={{ maxWidth: "100vw", overflowX: "clip" }}>
      <Announcement bgColor="bg_dark-purple" />
      <Header21 />
      <Hero />
      <Features />
      <Categories />
      <Products />
      <Banner />
      <SingleProduct />
      <Marquee />
      <Collections2 />
      <Testimonials />
      <Brands />
      <Footer2 />
    </div>
  );
}
