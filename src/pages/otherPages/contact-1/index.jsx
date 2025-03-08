import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import ContactForm from "@/components/othersPages/contact/ContactForm";
import Map from "@/components/othersPages/contact/Map";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Contact 1 || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function ContactPage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Contact Us</div>
        </div>
      </div>

      <Map />
      <ContactForm />
      <Footer1 />
    </>
  );
}
