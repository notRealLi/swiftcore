import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Overlay from "../components/overlay";
import Banner from "../components/banner";
import Projects from "../components/projects";

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".header", 0, { scaleY: 0 })
      .to(".btn-row", 0, { scaleX: 0 })
      .from(".line span", 1.8, {
        y: 100,
        ease: "power4.out",
        delay: 0.1,
        skewY: 7,
        stagger: 0.1,
      })
      .to(".overlay-top .top", 1, {
        height: 0,
        ease: "power4.out",
        stagger: 0.1,
        delay: -0.4,
      })
      .to(".overlay-bottom .bottom", 1, {
        width: 0,
        ease: "power4.out",
        stagger: 0.1,
        delay: -0.3,
      })
      .to(".overlay", 0, { css: { display: "none" } })
      .to(".header", 1, {
        delay: -1,
        scaleY: 1,
        transformOrigin: "50% 100%",
        ease: "expo.inOut",
      })
      .to(".btn-row", 1, {
        delay: -1,
        scaleX: 1,
        transformOrigin: "0 50%",
        ease: "expo.inOut",
      })
      .from(".project-image img", 1, {
        scale: 1.4,
        ease: "power4.out",
        delay: -1.2,
        stagger: 0.1,
        onComplete: () => {
          setAnimationComplete(true);
        },
      });
  }, []);

  return (
    <>
      {!animationComplete ? <Overlay /> : null}
      <Banner />
      <Projects />
    </>
  );
};

export default Home;
