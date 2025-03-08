import React, { useRef, useState } from "react";
import axios from "axios";
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
    <section className="flat-spacing-14">
      <div className="container">
        <div className="widget-card-store type-4 radius-20 overflow-hidden align-items-center tf-grid-layout md-col-2 bg_f3f5f5">
          <div className="store-item-info">
            <h5 className="store-heading">
              Subscribe <br />
              to our newsletter
            </h5>
            <div className="description">
              <p className="text-black">
                Promotions, new products and sales. Directly to your inbox.
              </p>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0s">
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
                onSubmit={sendEmail}
                id="subscribe-form"
                className="form-newsletter form-newsletter-1"
              >
                <div id="subscribe-content" className="subscribe-wrap">
                  <input
                    type="email"
                    name="email"
                    id="subscribe-email"
                    placeholder="Enter email address"
                  />
                  <button
                    type="submit"
                    id="subscribe-button"
                    className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-60"
                  >
                    Subscribe
                  </button>
                </div>
                <div id="subscribe-msg" />
              </form>
            </div>
          </div>
          <div className="store-img">
            <img
              className="lazyload"
              data-src="/images/shop/store/ceramic-2.jpg"
              alt="store-img"
              src="/images/shop/store/ceramic-2.jpg"
              width={1100}
              height={667}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
