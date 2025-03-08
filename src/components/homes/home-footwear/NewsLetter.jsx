import React, { useRef, useState } from "react";
import axios from "axios";
export default function NewsLetter() {
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
    <section className="flat-spacing-27 pt_0">
      <div className="container">
        <div className="widget-card-store type-4 rounded-0 overflow-hidden align-items-center tf-grid-layout md-col-2 bg_f6f1ec">
          <div className="store-item-info">
            <h5 className="store-heading ">
              Subscribe <br /> to our newsletter
            </h5>
            <div className="description">
              <p className="text-black">Be the first to know when we launch.</p>
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
                action="#"
                className="form-newsletter form-newsletter-1"
              >
                <div id="subscribe-content" className="subscribe-wrap">
                  <input
                    type="email"
                    name="email"
                    id="subscribe-email"
                    placeholder="Enter email address"
                    className="radius-3"
                  />
                  <button
                    type="submit"
                    id="subscribe-button"
                    className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
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
              data-src="/images/shop/store/footwear-1.jpg"
              alt="store-img"
              src="/images/shop/store/footwear-1.jpg"
              width={1100}
              height={667}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
