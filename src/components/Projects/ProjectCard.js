import React, {useState} from "react";
import "./ProjectCard.scss";

export default function ProjectCard({project}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-content">
        <div className="project-image-container">
          <img 
            src={project.image} 
            alt={project.name}
            className="project-image"
          />
        </div>
        
        <div className="project-info">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>

        <div className={`project-details ${isHovered ? 'show' : ''}`}>
          <p className="project-description">{project.description}</p>
          
          <div className="project-tech">
            <h4>Tech Stack:</h4>
            <div className="tech-tags">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-buttons">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-button github-button"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 