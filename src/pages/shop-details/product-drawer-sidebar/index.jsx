import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import DefaultShopDetails from "@/components/shopDetails/DefaultShopDetails";
import Details7 from "@/components/shopDetails/Details7";
import Products from "@/components/shopDetails/Products";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import ShopDetailsTab from "@/components/shopDetails/ShopDetailsTab";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductSidebar from "@/components/modals/ProductSidebar";
import SidebarToggler from "@/components/shopDetails/SidebarToggler";
import DetailsOuterZoom from "@/components/shopDetails/DetailsOuterZoom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop Drawer Sidebar || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
import { allProducts } from "@/data/products";
import ProductSinglePrevNext from "@/components/common/ProductSinglePrevNext";
export default function ProductDrawerSidebarPage({}) {
  let params = useParams();
  const { id } = params;
  const product =
    allProducts.filter((elm) => elm.id == id)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link to={`/`} className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right" />

              <span className="text">{product.title}</span>
            </div>
            <ProductSinglePrevNext currentId={product.id} />
          </div>
        </div>
      </div>
      <SidebarToggler />

      <DetailsOuterZoom product={product} />
      <ShopDetailsTab />
      <Products />
      <RecentProducts />
      <Footer1 />
    </>
  );
}
