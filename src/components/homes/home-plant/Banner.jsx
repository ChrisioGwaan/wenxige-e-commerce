import ModalVideo from "@/components/common/ModalVideo";

import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="flat-spacing-12">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text style-5">
            <div
              className="tf-image-wrap widget-video wow fadeInUp clear"
              data-wow-delay="0s"
            >
              <img
                className="lazyload"
                data-src="/images/collections/collection-plant-1.jpg"
                alt="collection-img"
                src="/images/collections/collection-plant-1.jpg"
                width={1410}
                height={1096}
              />
              <a onClick={() => setIsOpen(true)} className="popup-youtube">
                <i className="icon-play" />
              </a>
            </div>
            <div
              className="tf-content-wrap w-100 wow fadeInUp"
              data-wow-delay="0s"
            >
              <span className="sub-heading text-uppercase fw-7 text_green-1">
                LIFE GATHERS AROUND PLANTS
              </span>
              <div className="heading text_green-1">
                Straight from the <br />
                Greenhouse
              </div>
              <p className="description text_green-2">
                Follow along on a Bird of Paradise’s journey from our greenhouse
                to your home, and learn how we care for your plant every step of
                the way.
              </p>
              <Link
                to={`/shop-collection-list`}
                className="tf-btn style-2 btn-fill border-0 radius-60 animate-hover-btn bg_green-9"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        videoId={"4H95VPQFexc"}
      />
    </>
  );
}
