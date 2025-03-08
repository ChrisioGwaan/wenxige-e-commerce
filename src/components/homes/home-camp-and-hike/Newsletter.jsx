import axios from "axios";
import React, { useState } from "react";
export default function Newsletter() {
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
    <section className="flat-spacing-3">
      <div className="container-full">
        <div className="flat-title mb_1 wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Fancy our gear?</span>
          <p className="sub-title text_black">
            Sign up for our newsletter and receive new product releases, deals
            and exclusive sales.
          </p>
        </div>
        <div className="flat-subscrite-wrap">
          <div
            className={`tfSubscribeMsg text-center ${
              showMessage ? "active" : ""
            }`}
          >
            {success ? (
              <p style={{ color: "rgb(52, 168, 83)" }}>
                You have successfully subscribed.
              </p>
            ) : (
              <p style={{ color: "red" }}>Something went wrong</p>
            )}
          </div>
          <form
            onSubmit={sendEmail}
            className="form-newsletter"
            id="subscribe-form"
          >
            <div id="subscribe-content" className="subscribe-content">
              <fieldset className="email">
                <input
                  type="email"
                  name="email"
                  id="subscribe-email"
                  placeholder="Enter email address"
                  tabIndex={0}
                  aria-required="true"
                />
              </fieldset>
              <div className="button-submit">
                <button
                  id="subscribe-button"
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
