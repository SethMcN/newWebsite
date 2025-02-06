import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div>
      <ul class="stack-cards js-stack-cards">
        <li class="stack-cards__item js-stack-cards__item">
          {" "}
          <section id="project1">
            <h2>Project 1: Todo List Web Application</h2>
            <p>
              Description: This was my first project working with JavaScript and
              React. It helped me understand the basics of state management and
              component-based architecture. I followed a tutorial but added my
              own features to enhance the functionality.
            </p>
            <div>
              <a
                id="ProjectLink"
                target="_blank"
                href="https://github.com/SethMcN/ReactJs-TodoList/tree/main"
              >
                View Github
              </a>
              <a
                id="ProjectLink"
                target="_blank"
                href="https://react-js-todo-list-delta.vercel.app"
              >
                View project
              </a>
            </div>
          </section>
        </li>

        <li class="stack-cards__item js-stack-cards__item"></li>
      </ul>
    </div>
  );
}
