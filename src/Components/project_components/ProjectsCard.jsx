import React from "react";

export default function ProjectsCard(props) {
  const { ProjectName, description, githubLink, projectLink } = props;
  return (
    <section className="project-card">
      <h2>Project: {ProjectName}</h2>
      <p>{description}</p>

      <div className="project-links-container">
        <a className="project-link" target="_blank" href={githubLink}>
          View Github
        </a>

        <a className="project-link" target="_blank" href={projectLink}>
          View project
        </a>
      </div>
    </section>
  );
}
