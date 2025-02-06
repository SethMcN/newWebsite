import React, { useState } from "react";
import { Rnd } from "react-rnd";
import AboutMe from "./Components/aboutMe";
import Projects from "./Components/projects";
import {
  FaFolder,
  FaUser,
  FaTerminal,
  FaTimes,
  FaGamepad,
  FaSquare,
} from "react-icons/fa";

function App() {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  const Terminal = () => <div>Terminal Interface</div>;

  const apps = [
    { id: "about", name: "About Me", icon: <FaUser />, component: <AboutMe /> },
    {
      id: "projects",
      name: "Projects",
      icon: <FaFolder />,
      component: <Projects />,
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: <FaTerminal />,
      component: <Terminal />,
    },
  ];

  const closeApp = (appId) => {
    setWindows(windows.filter((window) => window.id !== appId));
    setActiveWindow(null);
  };

  const openApp = (appId) => {
    setWindows([...windows, { id: appId, zIndex: windows.length + 1 }]);
    console.log(windows);
    setActiveWindow(appId);
    console.log(activeWindow);
  };

  const fullScreenWindow = (windowId) => {
    const windowElement = document.querySelector(`.window.active`);
    if (windowElement) {
      if (
        windowElement.style.width === "90vw" &&
        windowElement.style.height === "90vh"
      ) {
        windowElement.style.width = "";
        windowElement.style.height = "";
        windowElement.style.top = "";
        windowElement.style.left = "";
        windowElement.style.transform = "";
      } else {
        windowElement.style.width = "90vw";
        windowElement.style.height = "90vh";
        windowElement.style.top = "0";
        windowElement.style.left = "0";
      }
    }
  };

  return (
    <div className="os-desktop">
      {/* Desktop Icons */}
      <div className="desktop-icons">
        {apps.map((app) => (
          <div
            key={app.id}
            className="desktop-icon"
            onDoubleClick={() => openApp(app.id)}
          >
            {app.icon}
            <span>{app.name}</span>
          </div>
        ))}
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <Rnd
          key={window.id}
          default={{
            x: 500,
            y: 400,
          }}
          style={{ zIndex: window.zIndex }}
          onMouseDown={() => setActiveWindow(window.id)}
        >
          <div
            className={`window ${activeWindow === window.id ? "active" : ""}`}
          >
            <div className="window-header">
              <h3>{apps.find((a) => a.id === window.id).name}</h3>
              <div className="window-actions">
                <button onClick={() => closeApp(window.id)}>
                  <FaTimes />
                </button>
                <button onClick={() => fullScreenWindow(window.id)}>
                  <FaSquare />
                </button>
              </div>
            </div>
            <div className="window-content">
              {apps.find((a) => a.id === window.id).component}
            </div>
          </div>
        </Rnd>
      ))}
    </div>
  );
}

export default App;
