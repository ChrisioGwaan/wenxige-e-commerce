import React from "react";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <section
      className="banner-hero-collection-wrap banner-parallax"
      style={{
        backgroundImage: "url(/images/slider/furniture-banner-collection.jpg)",
      }}
    >
      <div className="box-content">
        <div className="container">
          <Link
            to={`/shop-collection-sub`}
            className="card-box text-md-start text-center rounded-0"
          >
            <p className="subheading">FUNCTIONAL AND STYLISH</p>
            <h3 className="heading">Mid-Century Modern</h3>
            <p className="text">
              Find furniture that seamlessly combines functionality and style
            </p>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <button className="tf-btn style-2 btn-fill animate-hover-btn">
                <span>Shop Collection</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
