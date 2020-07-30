import React from "react";
import { ReactComponent as PrevIcon } from "../assets/arrow-left.svg";
import { ReactComponent as NextIcon } from "../assets/arrow-right.svg";

const projects = [
  {
    title: "Workflow Automation",
    description: "Standardize and integrate your business operations for better efficiency.",
    image: "pic1.jpg",
  },
  {
    title: "Custom Applications",
    description: "Build high quality apps ranging from web, mobile, cloud and desktop.",
    image: "pic2.jpg",
  },
  {
    title: "eCommerce Solutions",
    description: "Upgrade your online store for better sales and fulfillment to generate profit.",
    image: "yourspace-min.png",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="container-fluid">
        <div className="projects-nav">
          <div className="projects-arrow prev disabled">
            <PrevIcon />
          </div>
          <div className="projects-arrow next">
            <NextIcon />
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div className="project" key={project.title}>
              <div className="project-details">
                <span>{project.title}</span>
                <h2>{project.description}</h2>
              </div>
              <div className="project-image">
                <img
                  src={require(`../assets/${project.image}`)}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
