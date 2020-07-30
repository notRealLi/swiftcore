import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Services</div>
            <ul className="nav-links">
              <li>
                <a href="https://swiftcoretech.com/workflow-automation/" target='_blank'>
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="https://swiftcoretech.com/custom-applications/" target='_blank'>
                  Custom Applications
                </a>
              </li>
              <li>
                <a href="https://swiftcoretech.com/e-commerce-solutions/" target='_blank'>
                  eCommerce Solutions
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Address</li>
                <li>2001 Bloor St W</li>
                <li>M6S 1M6,Toronto</li>
                <li>Canada</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Cell & Email</li>
                <li>+1 (226) 975 4244</li>
                <li>contact@swiftcoretech.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
