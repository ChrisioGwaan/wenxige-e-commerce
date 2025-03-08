import React from "react";

export default function Banner() {
  return (
    <>
      {/* Banner Width Text */}
      <section className="flat-spacing-31">
        <div className="container">
          <div className="flat-title mb-lg text-center">
            <span className="title">
              Here’s what you’ll find in our nutritionist
            </span>
          </div>
          <div className="tf-grid-layout lg-col-2 tf-img-with-text-2">
            <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
              <img
                className="lazyload"
                data-src="/images/collections/banner-cls-food1.jpg"
                alt="collection-img"
                src="/images/collections/banner-cls-food1.jpg"
                width={800}
                height={913}
              />
            </div>
            <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
              <div className="item text-center text-md-start">
                <h5>Plant protein</h5>
                <p>
                  Utilise a combination of protein-rich wholefoods like legumes,
                  tempeh, nuts, and seeds to ensure your body is getting
                  everything it needs to thrive.
                </p>
              </div>
              <div className="item text-center text-md-start">
                <h5>Natural flavours</h5>
                <p>
                  Be it by roasting or caramelising, soaking or seasoning, our
                  experienced, plant-based chefs know how to bring out the
                  natural flavours, textures, and aromas in plant-based
                  ingredients, giving them the chance to shine.
                </p>
              </div>
              <div className="item text-center text-md-start">
                <h5>Superfoods</h5>
                <p>
                  Abundant in trending and ‘everyday’ superfoods with unique
                  health-promoting properties, Soulara meals offer a myriad of
                  vitamins, minerals, protective antioxidants, and polyphenols -
                  plant compounds with countless health benefits.
                </p>
              </div>
              <div className="item text-center text-md-start">
                <h5>Local produce</h5>
                <p>
                  To make our meals as nutrient-dense as possible, we source
                  fresh, seasonal fruits and vegetables from Australian farmers.
                  We’re all for supporting local and shortening the supply
                  chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Banner Width Text */}
      {/* Banner Width Text 2 */}
      <section>
        <div className="container">
          <div className="tf-grid-layout lg-col-2 tf-img-with-text-2 style-2 bg_green-8">
            <div className="tf-content-wrap wow fadeInUp" data-wow-delay=".1s">
              <h4 className="text-center text-md-start">
                The Wenxige difference
              </h4>
              <div className="item-list-box">
                <div className="img-box">
                  <img
                    alt="img"
                    src="/images/collections/cls-food.png"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Diverse and Delicious</h5>
                  <p>
                    Utilise a combination of protein-rich wholefoods like
                    legumes, tempeh, nuts, and seeds to ensure your body is
                    getting everything it needs to thrive.
                  </p>
                </div>
              </div>
              <div className="item-list-box">
                <div className="img-box">
                  <img
                    alt="img"
                    src="/images/collections/cls-food2.png"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Customizable and Convenient</h5>
                  <p>
                    Utilise a combination of protein-rich wholefoods like
                    legumes, tempeh, nuts, and seeds to ensure your body is
                    getting everything it needs to thrive.
                  </p>
                </div>
              </div>
              <div className="item-list-box">
                <div className="img-box">
                  <img
                    alt="img"
                    src="/images/collections/cls-food3.png"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Nutrient-Rich and Balanced</h5>
                  <p>
                    Utilise a combination of protein-rich wholefoods like
                    legumes, tempeh, nuts, and seeds to ensure your body is
                    getting everything it needs to thrive.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tf-image-wrap rounded-0 wow fadeInUp"
              data-wow-delay="0s"
            >
              <img
                className="lazyload"
                data-src="/images/collections/banner-cls-food2.png"
                alt="collection-img"
                src="/images/collections/banner-cls-food2.png"
                width={800}
                height={798}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
