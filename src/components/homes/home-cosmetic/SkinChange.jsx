import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function SkinChange() {
  return (
    <section className="flat-spacing-27 bg_light-grey-4">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">See Results in 1 Week!</span>
        </div>
        <div
          id="image-compare"
          className="wow fadeInUp"
          data-wow-delay="0s"
          style={{ position: "relative" }}
        >
          <span
            style={{
              position: "absolute",
              bottom: "1rem",
              zIndex: 12,
              left: "1rem",
              background: "rgba(0, 0, 0, 0.33)",
              color: "white",
              borderRadius: 3,
              padding: "0.5rem 0.75rem",
              fontSize: "0.85rem",
            }}
          >
            Before
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "1rem",
              zIndex: 12,
              right: "1rem",
              background: "rgba(0, 0, 0, 0.33)",
              color: "white",
              borderRadius: 3,
              padding: "0.5rem 0.75rem",
              fontSize: "0.85rem",
            }}
          >
            After
          </span>
          {/* <img
            className="lazyload"
            data-src="/images/shop/file/skincare_before.jpg"
            alt="image"
            src="/images/shop/file/skincare_before.jpg"
            width={750}
            height={407}
          />
          <img
            className="lazyload"
            data-src="/images/shop/file/skincare_after.jpg"
            alt="image"
            src="/images/shop/file/skincare_after.jpg"
            width={750}
            height={407}
          /> */}
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="/images/shop/file/skincare_before.jpg"
                srcSet="/images/shop/file/skincare_before.jpg"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="/images/shop/file/skincare_after.jpg"
                srcSet="/images/shop/file/skincare_after.jpg"
                alt="Image two"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
