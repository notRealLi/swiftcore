import React from "react";
import gsap from "gsap";

const ContactForm = () => {
  const selectInquiry = (e) => {
    let elem = e.target;
    const tl = gsap.timeline();
    tl.to(".focused", { className: "inquiry-type", color: "#d3d3d3" });
    elem.classList.add("focused");
    tl.to(".focused", 0, { delay: -0.5, color: "#000" });
    document
      .querySelector("#inquiry-type-value")
      .setAttribute("value", elem.textContent);
  };

  return (
    <div className="contact-form">
      <div className="container-fluid">
        <div className="row">
          <div className="left">
            <div className="inquiry-type-menu">
              <h3 className="inquiry-type-menu-label">Inquiry Type:</h3>
              <ul className="inquiry-types">
                <li className="inquiry-type" onClick={selectInquiry}>
                  Business Inquiry
                </li>
                <li className="inquiry-type" onClick={selectInquiry}>
                  Career
                </li>
                <li className="inquiry-type" onClick={selectInquiry}>
                  Other
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="inquiry-form">
              <form action="#" methos="POST">
                <div className="form-columns">
                  <div className="form-column">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company"
                    />
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-column">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="submit-btn-row">
                  <button type="submit">Submit</button>
                </div>
              </form>
              <input
                id="inquiry-type-value"
                type="text"
                defaultValue="unspecified"
                hidden
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
