import ModalVideo from "@/components/common/ModalVideo";

import React, { useState } from "react";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="flat-spacing-30">
        <div className="container">
          <div className="flat-title flex-row justify-content-between px-0">
            <h2 className="wow fadeInUp font-sora fw-6" data-wow-delay="0s">
              Green Commuting <br />
              Redefined
            </h2>
            <h6 className="text_black-2">
              Make commuting a breeze with our electric bikes.
              <br />
              Effortless rides, happy
            </h6>
          </div>
          <div className="widget-video wow fadeInUp" data-wow-delay="0s">
            <img
              className="lazyload"
              data-src="/images/collections/banner-electric-bike-1.jpg"
              alt="collection-img"
              src="/images/collections/banner-electric-bike-1.jpg"
              width={2000}
              height={986}
            />
            <a
              onClick={() => setIsOpen(true)}
              className="popup-youtube bg-light text_black"
            >
              <i className="icon-play" />
            </a>
          </div>
        </div>
      </section>
      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/images/video/electric-bike.mp4"}
      />
    </>
  );
}
