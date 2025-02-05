import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { FaFolder, FaUser, FaTerminal, FaTimes } from "react-icons/fa";

function App() {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  const About = () => <div>About Me Content</div>;
  const Projects = () => <div>Projects List</div>;
  const Terminal = () => <div>Terminal Interface</div>;

  const apps = [
    { id: "about", name: "About Me", icon: <FaUser />, component: <About /> },
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
            {app.id}
            {app.icon}
            <span>{app.name}</span>
          </div>
        ))}
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <Rnd
          key={window.id}
          default={{ x: 300, y: 200, width: 1000, height: 200 }}
          minWidth={300}
          minHeight={200}
          style={{ zIndex: window.zIndex }}
          onMouseDown={() => setActiveWindow(window.id)}
        >
          <div
            className={`window ${activeWindow === window.id ? "active" : ""}`}
          >
            <div className="window-header">
              <h3>{apps.find((a) => a.id === window.id).name}</h3>
              <button onClick={() => closeApp(window.id)}>
                <FaTimes />
              </button>
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
