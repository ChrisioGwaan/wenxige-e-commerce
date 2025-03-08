import Announcement from "@/components/common/Announcement";
import Footer2 from "@/components/footers/Footer2";
import Header10 from "@/components/headers/Header10";
import Banner from "@/components/homes/home-personalized-pod/Banner";
import Categories from "@/components/homes/home-personalized-pod/Categories";
import Collections from "@/components/homes/home-personalized-pod/Collections";
import Collections2 from "@/components/homes/home-personalized-pod/Collections2";
import Features from "@/components/homes/home-personalized-pod/Features";
import Hero from "@/components/homes/home-personalized-pod/Hero";
import Process from "@/components/homes/home-personalized-pod/Process";
import Products from "@/components/homes/home-personalized-pod/Products";
import Products2 from "@/components/homes/home-personalized-pod/Products2";
import ShopGram from "@/components/homes/home-personalized-pod/ShopGram";
import Testimonials from "@/components/homes/home-personalized-pod/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home Personalized Pod || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomePersonalizedPodPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Announcement bgColor={"bg_red-1"} />
      <Header10 />
      <Hero />
      <Collections />
      <Products />
      <Process />
      <Collections2 />
      <Categories />
      <Products2 />
      <Banner />
      <Testimonials />
      <Features />
      <ShopGram />
      <Footer2 />
    </>
  );
}
