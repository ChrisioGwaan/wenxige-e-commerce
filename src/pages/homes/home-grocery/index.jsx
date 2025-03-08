import Topbar4 from "@/components/headers/Topbar4";
import Footer1 from "@/components/footers/Footer1";

import Hero from "@/components/homes/home-grocery/Hero";

import Header18 from "@/components/headers/Header18";
import Categories from "@/components/homes/home-grocery/Categories";
import Collections from "@/components/homes/home-grocery/Collections";
import Products from "@/components/homes/home-grocery/Products";
import Products2 from "@/components/homes/home-grocery/Products2";
import Features from "@/components/homes/home-grocery/Features";
import Banner from "@/components/homes/home-grocery/Banner";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Grocery || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeGroceryPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="color-primary-8 color-main-text-2">
        <Topbar4 />
        <Header18 />
        <Hero />
        <Categories />
        <Collections />
        <Products />
        <Products2 />
        <Features />
        <Banner />
        <Footer1 />
      </div>
    </>
  );
}
