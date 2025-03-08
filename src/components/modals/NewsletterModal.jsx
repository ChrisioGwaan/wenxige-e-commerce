import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function NewsletterModal() {
  const { pathname } = useLocation();
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
  const modalElement = useRef();
  useEffect(() => {
    const showModal = async () => {
      if (pathname === "/") {
        const bootstrap = await import("bootstrap"); // dynamically import bootstrap
        const myModal = new bootstrap.Modal(
          document.getElementById("newsletterPopup"),
          {
            keyboard: false,
          }
        );

        // Show the modal after a delay using a promise
        await new Promise((resolve) => setTimeout(resolve, 2000));
        myModal.show();

        modalElement.current.addEventListener("hidden.bs.modal", () => {
          myModal.hide();
        });
      }
    };

    showModal();
  }, [pathname]);
  return (
    <div
      ref={modalElement}
      className="modal modalCentered fade auto-popup modal-newleter"
      id="newsletterPopup"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-top">
            <img
              className="lazyload"
              data-src="/images/item/banner-newleter.jpg"
              alt="home-01"
              width={938}
              height={538}
              src="/images/item/banner-newleter.jpg"
            />
            <span
              className="icon icon-close btn-hide-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-bottom">
            <h4 className="text-center">Don’t miss out</h4>
            <h6 className="text-center">
              Be the first one to get the new product at early bird prices.
            </h6>
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
              method="post"
              acceptCharset="utf-8"
              data-mailchimp="true"
            >
              <div id="subscribe-content">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email *"
                  autoComplete="abc@xyz.com"
                />
                <button
                  type="submit"
                  className="tf-btn btn-fill radius-3 animate-hover-btn w-100 justify-content-center"
                >
                  Keep me updated
                </button>
              </div>
              <div id="subscribe-msg" />
            </form>
            <div className="text-center">
              <a
                href="#"
                data-bs-dismiss="modal"
                className="tf-btn btn-line fw-6 btn-hide-popup"
              >
                Not interested
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
