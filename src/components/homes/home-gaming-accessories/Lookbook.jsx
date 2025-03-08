import LookbookComponent from "@/components/common/LookbookComponent";
import { lookbookProducts } from "@/data/products";

import { Link } from "react-router-dom";
import React from "react";

export default function Lookbook() {
  return (
    <section className="">
      <div className="wrap-lookbook lookbook-gaming-accessories">
        <div className="image">
          <img
            className="lazyload"
            data-src="/images/slider/lookbook-gaming-accessories.jpg"
            alt="image-lookbook"
            src="/images/slider/lookbook-gaming-accessories.jpg"
            width={2000}
            height={918}
          />
        </div>
        <div className="lookbook-item item-1">
          <div className="inner">
            <div className="btn-group dropdown dropup dropdown-center">
              <button
                className="tf-pin-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span />
              </button>
              <ul className="dropdown-menu p-0 border-0">
                <LookbookComponent product={lookbookProducts[32]} />
              </ul>
            </div>
          </div>
        </div>
        <div className="lookbook-item item-2">
          <div className="inner">
            <div className="btn-group dropdown dropup dropdown-center">
              <button
                className="tf-pin-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span />
              </button>
              <ul className="dropdown-menu p-0 border-0">
                <LookbookComponent product={lookbookProducts[30]} />
              </ul>
            </div>
          </div>
        </div>
        <div className="lookbook-item item-3">
          <div className="inner">
            <div className="btn-group dropdown dropup dropdown-center">
              <button
                className="tf-pin-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span />
              </button>
              <ul className="dropdown-menu p-0 border-0">
                <LookbookComponent product={lookbookProducts[31]} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
