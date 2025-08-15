import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/Projects/ProjectCard";
import {projects} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Projects() {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div id="projects">
      <Fade bottom duration={1000} distance="20px">
        <div className="projects-container">
          <div className="projects-header">
            <h1 className="projects-heading">Projects</h1>
            <p className="projects-subtitle">
              Some of my recent projects and applications
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
