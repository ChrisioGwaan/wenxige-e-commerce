import React, { useRef, useState } from "react";
import axios from "axios";
export default function Newsletter() {
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
    <section className="flat-spacing-27">
      <div className="container-full">
        <div className="flat-title mb_1 wow fadeInUp" data-wow-delay="0s">
          <span className="title">Get 10% of first order </span>
          <p className="sub-title text_black-2">
            Be the first to know about new arrivals, exclusive promotions, her
            different <br />
            stories &amp; receive 10% off your first order.
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
                  className="tf-btn btn-sm rounded-0 btn-fill rounded-0 animate-hover-btn text-uppercase letter-2 fw-6"
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
    </section>
  );
}
