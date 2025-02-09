import { React, useState } from "react";
import "./projects.css";
import ProjectsCard from "./ProjectsCard";
import MenuBar from "./MenuBar";

export default function Projects() {
  const [language, setLanguage] = useState(false);

  if (language === false) {
    return (
      <div className="projects-container">
        <div className="menu">
          <MenuBar setLanguage={setLanguage} />
        </div>
        <div>
          <p>Please click on language</p>
        </div>
      </div>
    );
  }

  if (language === "JavaScript") {
    return (
      <div className="projects-container">
        <div className="menu">
          <MenuBar setLanguage={setLanguage} />
        </div>
        <div className="project-card-container">
          <ProjectsCard
            ProjectName={"Todo List Web Application"}
            description={
              "Description: This was my first project working with JavaScript and React. It helped me understand the basics of state management and component-based architecture. I followed a tutorial but added my own features to enhance the functionality."
            }
            githubLink={"https://github.com/SethMcN/ReactJs-TodoList/tree/main"}
            projectLink={"https://react-js-todo-list-delta.vercel.app"}
          />
        </div>
      </div>
    );
  }

  if (language === "HTML") {
    return (
      <div className="projects-container">
        <div className="menu">
          <MenuBar setLanguage={setLanguage} />
        </div>
        <div className="project-card-container">
          <ProjectsCard
            ProjectName={"First Website"}
            description={
              "This GitHub repository hosts the source code for my first website. Here, you can explore the HTML files and see how the project is structured."
            }
            githubLink={"https://github.com/SethMcN/First-website-attempt"}
            projectLink={"https://first-website-attempt.vercel.app/"}
          />
        </div>
      </div>
    );
  }

  if (language === "CSS") {
    return (
      <div className="projects-container">
        <div className="menu">
          <MenuBar setLanguage={setLanguage} />
        </div>
        <div className="project-card-container"></div>
      </div>
    );
  }

  if (language === "React") {
    return (
      <div className="projects-container">
        <div className="menu">
          <MenuBar setLanguage={setLanguage} />
        </div>
        <div className="project-card-container"></div>
      </div>
    );
  }

  if (language === "C") {
    return (
      <div className="projects-container">
        <div className="menu">
          <MenuBar setLanguage={setLanguage} />
        </div>
        <div className="project-card-container"></div>
      </div>
    );
  }

  if (language === "Python") {
    return (
      <div className="projects-container">
        <div className="menu">
          <MenuBar setLanguage={setLanguage} />
        </div>
        <div className="project-card-container"></div>
      </div>
    );
  }
}
