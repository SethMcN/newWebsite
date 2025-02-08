import React from "react";
import "./projects.css";
import ProjectsCard from "./ProjectsCard";
import MenuBar from "./MenuBar";
export default function Projects() {
  return (
    <div className="projects-container">
      <div className="menu">
        <MenuBar />
      </div>
      <div>
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
