import React, { useState } from "react";
import { Rnd } from "react-rnd";
import AboutMe from "./Components/aboutMe";
import Projects from "./Components/project_components/projects";
import {
  FaFolder,
  FaUser,
  FaTerminal,
  FaTimes,
  FaGamepad,
  FaSquare,
  FaCog,
} from "react-icons/fa";

function App() {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  const Terminal = () => <div>Terminal Interface</div>;

  const apps = [
    {
      id: "about",
      name: "About Me",
      icon: <FaUser />,
      component: <AboutMe />,
      windowSettings: {
        default: { x: 100, y: 100, width: 500, height: 300 },
        minWidth: 300,
        minHeight: 200,
        resizable: true,
      },
    },
    {
      id: "projects",
      name: "Projects",
      icon: <FaFolder />,
      component: <Projects />,
      windowSettings: {
        default: { x: 200, y: 100, width: 500, height: 400 },
        minWidth: 500,
        minHeight: 200,
        resizable: true,
      },
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: <FaTerminal />,
      component: <Terminal />,
      windowSettings: {
        default: { x: 100, y: 100, width: 400, height: 300 },
        minWidth: 300,
        minHeight: 200,
        resizable: true,
      },
    },
    {
      id: "settings",
      name: "Settings",
      icon: <FaCog />,
      component: <div>Settings Interface</div>,
      windowSettings: {
        default: { x: 150, y: 150, width: 400, height: 300 },
        minWidth: 300,
        minHeight: 200,
        resizable: true,
      },
    },
  ];

  const bringToFront = (appId) => {
    const maxZIndex = Math.max(...windows.map((window) => window.zIndex), 0);

    setWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.id === appId ? { ...window, zIndex: maxZIndex + 1 } : window
      )
    );

    setActiveWindow(appId);
  };

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

  const triggerResize = () => {
    const event = new Event("resize", { bubbles: true });
    dispatchEvent(event);
  };

  const handleResize = () => {
    triggerResize();
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
      {windows.map((window) => {
        const app = apps.find((a) => a.id === window.id);
        return (
          <Rnd
            key={window.id}
            default={app.windowSettings.default}
            minWidth={app.windowSettings.minWidth}
            minHeight={app.windowSettings.minHeight}
            style={{ zIndex: window.zIndex }}
            onResize={handleResize}
            onResizeStop={handleResize}
            dragHandleClassName="window-header"
            onMouseDown={() => bringToFront(window.id)}
          >
            <div
              className={`window ${activeWindow === window.id ? "active" : ""}`}
            >
              <div className="window-header">
                <h3>{app.name}</h3>
                <button onClick={() => closeApp(window.id)}>
                  <FaTimes />
                </button>
              </div>
              <div className="window-content">{app.component}</div>
            </div>
          </Rnd>
        );
      })}

      {/* Taskbar */}
      <div className="taskbar">
        <div className="start-menu">
          <button>Start</button>
        </div>
        <div className="open-apps">
          {windows.map((window) => (
            <button key={window.id} onClick={() => bringToFront(window.id)}>
              {apps.find((a) => a.id === window.id).icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
