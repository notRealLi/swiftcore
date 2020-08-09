import React, { useEffect, useState } from "react";
import ContactForm from "../components/contactForm";
import gsap from "gsap";

const tl = gsap.timeline();

const Contact = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (animationComplete) return;
    
    tl.from(".contact-form", 0.6, {
      scaleY: 0.5,
      transformOrigin: '50% 0',
      ease: "power4.out",
      //delay: -1.2,
      onComplete: () => {
        setAnimationComplete(true);
      },
    });
  });
  return (
    <div className="page">
      <ContactForm />
    </div>
  );
};

export default Contact;
