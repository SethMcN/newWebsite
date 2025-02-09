import React from "react";

export default function ProjectsCard(props) {
  const {
    ProjectName,
    description,
    githubLink,
    projectLink,
    image,
    imageClassName = "project-image",
  } = props;

  return (
    <section className="project-card">
      <h2 className="project-title"> {ProjectName}</h2>
      <p>
        {image && (
          <img
            className={imageClassName}
            src={image}
            alt={`${ProjectName} image`}
          />
        )}
      </p>
      <p className="project-description">{description}</p>

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
