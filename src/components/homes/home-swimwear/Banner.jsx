import { Link } from "react-router-dom";
import React from "react";

export default function Banner() {
  return (
    <section
      className="banner-hero-collection-wrap banner-parallax"
      style={{
        backgroundImage: "url(images/slider/swm-banner-collection.jpg)",
      }}
    >
      <div className="box-content">
        <div className="container">
          <Link
            to={`/shop-collection-sub`}
            className="card-box text-md-start text-center rounded-0"
          >
            <p className="subheading">DEFINED BY LUXURY</p>
            <h3 className="heading font-libre-baskerville">Olive Must Haves</h3>
            <p className="text">
              Shop our luxury silk button-up blouses made with ultra-soft,
              washable silk.
            </p>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <button className="tf-btn rounded-0 style-2 btn-fill  animate-hover-btn">
                <span>SHOP COLLECTION</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
