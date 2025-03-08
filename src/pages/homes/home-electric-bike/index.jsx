import Footer1 from "@/components/footers/Footer1";
import Header18 from "@/components/headers/Header18";
import Topbar4 from "@/components/headers/Topbar4";

import Banner from "@/components/homes/home-electric-bike/Banner";
import Blogs from "@/components/homes/home-electric-bike/Blogs";
import Brands from "@/components/homes/home-electric-bike/Brands";
import Collections from "@/components/homes/home-electric-bike/Collections";
import Collections2 from "@/components/homes/home-electric-bike/Collections2";
import Collections3 from "@/components/homes/home-electric-bike/Collections3";
import Features from "@/components/homes/home-electric-bike/Features";
import Hero from "@/components/homes/home-electric-bike/Hero";
import Marquee from "@/components/homes/home-electric-bike/Marquee";
import Products from "@/components/homes/home-electric-bike/Products";
import Store from "@/components/homes/home-electric-bike/Store";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Electric Bike || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function HomeElectricBikePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className=" color-primary-12">
        <Topbar4 />
        <Header18 /> <Hero />
        <Marquee />
        <Collections />
        <Collections2 />
        <Collections3 />
        <Products />
        <Banner />
        <Features />
        <Blogs />
        <Store />
        <Brands />
        <Footer1 />
      </div>
    </>
  );
}
