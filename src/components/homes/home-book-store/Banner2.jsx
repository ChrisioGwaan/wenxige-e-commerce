import { Link } from "react-router-dom";
import React from "react";

export default function Banner2() {
  return (
    <section className="">
      <div className="container hover-img">
        <div className="tf-banner-collection img-style radius-20">
          <img
            className="lazyload"
            data-src="/images/collections/cls-book-store-7.jpg"
            alt="img-banner"
            loading="lazy"
            src="/images/collections/cls-book-store-7.jpg"
            width="1600"
            height="608"
          />
          <div className="box-content">
            <div className="container wow fadeInUp" data-wow-delay="0s">
              <div className="sub fw-7 text_black-2">
                SALE UP TO 30% OFF TODAY
              </div>
              <h2 className="heading fw-6 font-libre-baskerville">
                Scary-good picks <br /> For halloween
              </h2>
              <p className="text_black-2 ">Scary good picks for Halloween</p>
              <Link
                to={`/shop-default`}
                className="radius-3 tf-btn btn-md btn-fill btn-icon animate-hover-btn"
              >
                <span>Shop Collection</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
