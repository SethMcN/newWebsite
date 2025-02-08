import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <h1>About Me</h1>
        <ul className="about-me-links">
          <li>
            <a href="https://github.com/SethMcN" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/SethMcN/" target="_blank">
              Leetcode
            </a>
          </li>
        </ul>
      </div>
      <p>
        Hi, I’m Seth McNaughton, a 16-year-old software enthusiast currently
        studying in college. I’m passionate about programming, cybersecurity,
        and creating efficient, innovative solutions to technical challenges. My
        journey into software development began in high school, where I excelled
        in Computer Science and discovered my love for coding. Since then, I’ve
        been exploring programming languages like Python, C#, and Java while
        delving into Linux systems and the exciting world of cybersecurity.
        Right now, I’m focused on building my portfolio to showcase my skills as
        a developer and working on projects that highlight my ability to combine
        creativity with technical expertise. I’m also learning how to integrate
        tools like GitHub with VS Code, and I enjoy expanding my knowledge
        through hands-on experience.
      </p>
    </div>
  );
}
