import React, { useState, useEffect } from "react";
import { withRouter, NavLink } from "react-router-dom";
import gsap from "gsap";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import Logo from "../assets/logo.svg";

let tl = gsap.timeline();

const Header = ({ history }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setMenuOpened(false);
    });

    if (menuOpened) {
      tl.to("body", 0, {
        delay: -0.5,
        css: { overflow: "hidden" },
      }).to("nav", 0, { css: { display: "block" } });
      
      tl.to(".App", 1, {
        y: "60vh",
        ease: "expo.inOut",
      })
        .to(".hamburger-menu span", 0.6, {
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0",
          ease: "expo.inOut",
        })
        // hamburger-menu-close icon
        .to("#Path_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDasharray: 5,
            strokeDashoffset: 10,
          },
        })
        .to("#Path_2", 0.4, {
          delay: -0.6,
          css: {
            strokeDasharray: 20,
            strokeDashoffset: 10,
          },
        })
        .to("#Line_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDasharray: 18,
            strokeDashoffset: 40,
          },
        })
        .to("#circle", 0.6, {
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to(".hamburger-menu-close", 0.6, {
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      tl.to(".App", 1, {
        y: 0,
        ease: "expo.inOut",
      })
        .to("#circle", 0.6, {
          delay: -0.6,
          css: {
            strokeDasharray: 227,
            strokeDashoffset: -193,
          },
        })
        .to("#Path_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDasharray: 10,
            strokeDashoffset: 10,
          },
        })
        .to("#Path_2", 0.4, {
          delay: -0.6,
          css: {
            strokeDasharray: 10,
            strokeDashoffset: 10,
          },
        })
        .to("#Line_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDasharray: 40,
            strokeDashoffset: 40,
          },
        })
        // .hamburger-menu span
        .to(".hamburger-menu span", 0.6, {
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "50% 0",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", {
          delay: -0.1,
          css: {
            display: "none",
          },
          // body and nav
        })
        .to("body", 0, {
          css: { overflow: "auto" },
        })
        .to("nav", 0, { css: { display: "none" } });
    }
  }, [menuOpened]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to={process.env.PUBLIC_URL + "/"} exact>
              <img src={Logo} alt="SwiftCore" />
            </NavLink>
          </div>
          <div className="nav-toggle">
            <div onClick={() => setMenuOpened(true)} className="hamburger-menu">
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuOpened(false)}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
