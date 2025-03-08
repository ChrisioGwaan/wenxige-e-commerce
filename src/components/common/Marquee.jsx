import React from "react";

export default function Marquee({
  parentClass = "flat-spacing-1 tf-marquee marquee-lg line bg_f3f5f5",
}) {
  return (
    <div className={parentClass}>
      <div className="wrap-marquee">
        <div className="marquee-item">
          <p>
            Use{" "}
            <a href="#" title="#">
              code GET30
            </a>{" "}
            at checkout for 30% off your first order
          </p>
        </div>
        <div className="marquee-item">
          <p>
            Use{" "}
            <a href="#" title="#">
              code GET30
            </a>{" "}
            at checkout for 30% off your first order
          </p>
        </div>
        <div className="marquee-item">
          <p>
            Use{" "}
            <a href="#" title="#">
              code GET30
            </a>{" "}
            at checkout for 30% off your first order
          </p>
        </div>
      </div>
    </div>
  );
}
