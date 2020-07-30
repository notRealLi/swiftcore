import React, { useEffect } from "react";
import ContactForm from "../components/contactForm";
import gsap from "gsap";

const tl = gsap.timeline();

const Contact = () => {
  useEffect(() => {
    tl.from(".contact-form", 0.6, {
      scaleY: 0,
      transformOrigin: '50% 0',
      ease: "power4.out",
      //delay: -1.2,
    });
  });
  return (
    <div className="page">
      <ContactForm />
    </div>
  );
};

export default Contact;
