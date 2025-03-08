import { Link } from "react-router-dom";
import React from "react";

export default function Store() {
  return (
    <section className="flat-spacing-14 pb_0">
      <div className="">
        <div className="flat-location style-right map-gaming-accessories">
          <div className="banner-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84000.86305407993!2d2.265665124041157!3d48.85769609108845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2zUGEgcmksIFBow6Fw!5e0!3m2!1svi!2s!4v1730453133238!5m2!1svi!2s"
              width="100%"
              height={300}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="content">
            <h3
              className="heading fw-6 font-sora wow fadeInUp"
              data-wow-delay="0s"
            >
              Wenxige Store
            </h3>
            <p className="subtext wow fadeInUp" data-wow-delay="0s">
              301 Front St W Toronto, Canada
              <br />
              chris322322@gmail.com
              <br />
              (08) 8942 1299
            </p>
            <p className="subtext wow fadeInUp" data-wow-delay="0s">
              Mon - Fri, 8:30am - 10:30pm
              <br />
              Saturday, 8:30am - 10:30pm
              <br />
              Sunday Closed
            </p>
            <Link
              to={`/contact-1`}
              target="_blank"
              className="tf-btn btn-line collection-other-link fw-4 wow fadeInUp"
              data-wow-delay="0s"
            >
              Get Directions
              <i className="icon icon-arrow1-top-left" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
