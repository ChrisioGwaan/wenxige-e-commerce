import { Link } from "react-router-dom";
import React from "react";

export default function Banner2() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text">
          <div className="tf-image wow fadeInUp" data-wow-delay="0s">
            <div className="grid-img-group type-1">
              <div className="box-img item-1 tf-image-wrap">
                <div className="img-style">
                  <img
                    className="lazyload"
                    data-src="/images/collections/img-w-text-footweart1.jpg"
                    alt="img-slider"
                    src="/images/collections/img-w-text-footweart1.jpg"
                    width={600}
                    height={607}
                  />
                </div>
              </div>
              <div className="box-img item-2 tf-image-wrap">
                <div className="img-style">
                  <img
                    className="lazyload"
                    data-src="/images/collections/img-w-text-footweart2.jpg"
                    alt="img-slider"
                    src="/images/collections/img-w-text-footweart2.jpg"
                    width={600}
                    height={618}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <p className="subheading text-uppercase fw-7">OUR MISSION</p>
            <h2 className="heading fade-item fade-item-1">Made In Canada</h2>
            <p className="desc fade-item fade-item-2 text_black-2">
              We’re here to help you have a good day. We do this by creating
              products that enrich your life, with concern for people and our
              earth.
              <br />
              <br />
              There are very few companies making sneakers in Canada. In order
              for us to offer sneakers we needed a little help from our friends.
              We call this our Friendship Manufacturing Initiative. We partnered
              with a Chinese factory to offer our sneaker designs.
            </p>
            <Link
              to={`/about-us`}
              className="tf-btn btn-fill animate-hover-btn btn-icon radius-3"
            >
              <span>About us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
