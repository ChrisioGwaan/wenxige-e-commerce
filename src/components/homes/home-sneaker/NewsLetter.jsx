import React, { useRef, useState } from "react";

import axios from "axios";
export default function NewsLetter() {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  return (
    <section className="flat-spacing-24 pb_0 tf-slideshow tf-form-sneaker">
      <div className="banner-wrapper">
        <img
          className="lazyload"
          data-src="/images/slider/bg-sneaker.jpg"
          alt="collection-img"
          src="/images/slider/bg-sneaker.jpg"
          width={1920}
          height={589}
        />
        <div className="container-full">
          <div className="box-content bg_white">
            <div
              className="flat-title text-center mb_1 wow fadeInUp"
              data-wow-delay="0s"
            >
              <span className="title text_black fw-7">
                BECOME PART <br />
                OF THE Wenxige DISTRICT
              </span>
              <p className="sub-title text_black">
                Promotions, new products and sales. Directly to your inbox.
              </p>
            </div>
            <div className="flat-subscrite-wrap">
              <div className={`tfSubscribeMsg ${showMessage ? "active" : ""}`}>
                {success ? (
                  <p style={{ color: "rgb(52, 168, 83)" }}>
                    You have successfully subscribed.
                  </p>
                ) : (
                  <p style={{ color: "red" }}>Something went wrong</p>
                )}
              </div>
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="form-newsletter"
                action="#"
                method="post"
                acceptCharset="utf-8"
                data-mailchimp="true"
              >
                <div id="subscribe-content" className="subscribe-content">
                  <fieldset className="email">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      tabIndex={0}
                      aria-required="true"
                      autoComplete="abc@xyz.com"
                    />
                  </fieldset>
                  <div className="button-submit">
                    <button
                      className="tf-btn mt-0 bg-yellow-9 text_black btn-sm animate-hover-btn text-uppercase letter-2 fw-6"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div id="subscribe-msg" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
