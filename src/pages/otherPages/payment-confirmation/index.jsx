import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import PaymentConfirmation from "@/components/othersPages/PaymentConfirmation";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Payment Confirmation || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
export default function PaymentCOnfirmationPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Payment confirmation</div>
        </div>
      </div>

      <PaymentConfirmation />
      <Footer1 />
    </>
  );
}
