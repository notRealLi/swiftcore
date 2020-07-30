import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>We craft automated systems,</span>
            </div>
            <div className="line">
              <span>driven by business needs.</span>
            </div>
          </h2>
          <div className="btn-row">
            <NavLink to="/contact" exact>
              Message us <RightArrow />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
