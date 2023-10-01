import "../CSS/projects.css";
import "../CSS/about.css";
import { useState } from "react";
export function Projects() {
  const [web, setWeb] = useState(true);
  const [mobile, setmobile] = useState(true);
  const [desktop, setdesktop] = useState(true);
  const [all, setall] = useState(true);
  const handleWeb = () => {
    setWeb(true);
    setmobile(false);
    setdesktop(false);
    setall(false);
  };
  const handleMobile = () => {
    setWeb(false);
    setmobile(true);
    setdesktop(false);
    setall(false);
  };
  const handleDesktop = () => {
    setWeb(false);
    setmobile(false);
    setdesktop(true);
    setall(false);
  };
  const handleAll = () => {
    setWeb(true);
    setmobile(true);
    setdesktop(true);
    setall(true);
  };

  return (
    <>
      <section id="projects">
        <div className="main-info">
          <h1 className="main_h1">Projects</h1>
          <p className="h1_border"> </p>
          <p>
            Here you will find some of the personal projects that I've created
            in order to enhance my technical skills.
          </p>
        </div>

        <div className="options">
          <div className="option-box">
            <button className={all && "active"} onClick={handleAll}>
              {" "}
              All
            </button>
            <button
              className={all ? "inactive" : web && "active"}
              onClick={handleWeb}
            >
              {" "}
              Web
            </button>
            <button
              className={all ? "inactive" : desktop && "active"}
              onClick={handleDesktop}
            >
              {" "}
              Desktop
            </button>
            <button
              className={all ? "inactive" : mobile && "active"}
              onClick={handleMobile}
            >
              {" "}
              Mobile
            </button>
          </div>
        </div>
        <div className="projects-container">
          {/* Projects web */}
          {web && (
            <>
              <div className="projects ">
                <div className="project-image">
                  <div className="ProjectImage">
                    <img src="" alt="project image" />
                  </div>
                </div>
                <div className="project-info-container">
                  <div className="project-info ">
                    <h4>name web</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam saepe iusto voluptatum? Reiciendis veniam labore
                      libero explicabo at expedita possimus repellendus
                      corrupti, iste tempore quia consectetur, magni ducimus.
                      Ullam, illo.
                    </p>

                    <h6>Tools Used</h6>
                    <div className="tools">
                      <span>JavaScript</span>
                      <span>Html</span>
                      <span>CSS</span>
                      <span>React</span>
                    </div>
                    <button className="btn-send">Ver </button>
                  </div>
                </div>
              </div>
              <div className="projects ">
                <div className="project-image">
                  <div className="ProjectImage">
                    <img src="" alt="project image" />
                  </div>
                </div>
                <div className="project-info-container">
                  <div className="project-info ">
                    <h4>name web</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam saepe iusto voluptatum? Reiciendis veniam labore
                      libero explicabo at expedita possimus repellendus
                      corrupti, iste tempore quia consectetur, magni ducimus.
                      Ullam, illo.
                    </p>

                    <h6>Tools Used</h6>
                    <div className="tools">
                      <span>JavaScript</span>
                      <span>Html</span>
                      <span>CSS</span>
                      <span>React</span>
                    </div>
                    <button className="btn-send">Ver </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Projects Desktop */}

          {desktop && (
            <>
              <div className="projects ">
                <div className="project-image">
                  <div className="ProjectImage">
                    <img src="" alt="project image" />
                  </div>
                </div>
                <div className="project-info-container">
                  <div className="project-info ">
                    <h4>name desktop</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam saepe iusto voluptatum? Reiciendis veniam labore
                      libero explicabo at expedita possimus repellendus
                      corrupti, iste tempore quia consectetur, magni ducimus.
                      Ullam, illo.
                    </p>

                    <h6>Tools Used</h6>
                    <div className="tools">
                      <span>JavaScript</span>
                      <span>Html</span>
                      <span>CSS</span>
                      <span>React</span>
                    </div>
                    <button className="btn-send">Ver </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Projects mobile */}
          {mobile && (
            <>
              <div className="projects ">
                <div className="project-image">
                  <div className="ProjectImage">
                    <img src="" alt="project image" />
                  </div>
                </div>
                <div className="project-info-container">
                  <div className="project-info ">
                    <h4>name mobile</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam saepe iusto voluptatum? Reiciendis veniam labore
                      libero explicabo at expedita possimus repellendus
                      corrupti, iste tempore quia consectetur, magni ducimus.
                      Ullam, illo.
                    </p>

                    <h6>Tools Used</h6>
                    <div className="tools">
                      <span>JavaScript</span>
                      <span>Html</span>
                      <span>CSS</span>
                      <span>React</span>
                    </div>
                    <button className="btn-send">Ver </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
