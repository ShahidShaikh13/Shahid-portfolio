import React from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";

export default function WorkExperience() {
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experience</h1>
              <div className="timeline-container">
                {workExperiences.experience.map((job, i) => {
                  return (
                    <div key={i} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <h3 className="timeline-title">{job.role}</h3>
                          <span className="timeline-company">{job.company}</span>
                        </div>
                        <div className="timeline-date-badge">
                          {job.date}
                        </div>
                        <p className="timeline-description">
                          {job.desc}
                        </p>
                        {job.descBullets && (
                          <ul className="timeline-bullets">
                            {job.descBullets.map((bullet, index) => (
                              <li key={index} className="timeline-bullet">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
