import { Link } from "react-router-dom";

import "./inicio.scss";
import fotoPortafolio from "../../imgs/fotoPortafolio.png";
import javascript from "../../imgs/javascript.svg";
import react from "../../imgs/react.svg";
import css from "../../imgs/css.svg";
import html5 from "../../imgs/html5.svg";
import bootstrap from "../../imgs/bootstrap.svg";
import git from "../../imgs/git.svg";
import github from "../../imgs/github.svg";
import excel from "../../imgs/logo-excel-3.png";
import typescript from "../../imgs/Typescript.png";


const Inicio = ({ mode, idioma }) => {
  return (
    <div>
      <div className="container-fluid contenedor">
        <main
          className={`${
            mode ? "white-theme " : "dark-theme "
          } row main d-flex align-items-center`}
        >
          <div className="ms-5 col presentacion">
            <div className="grid-item-1">
              <h1 className="animate__animated animate__fadeIn animate__slower">
                {" "}
                {idioma.inicio.tit}
              </h1>
            </div>
            <div className="grid-item-2">
              <h2
                className={`animate__animated animate__bounceInLeft animate__delay-1s`}
              >
                Front-end Web Developer{" "}
              </h2>
            </div>

            <div className="grid-item-4 flex-row d-flex justify-content-start flex-column align-items-center">
              <div
                className="textSkills animate__animated animate__fadeIn animate__slower"
                style={{ animationDelay: "2s" }}
              >
                <b>Skills</b>
              </div>
              <div
                className="animate__animated animate__bounceInLeft animate__delay-3s"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  maxWidth: "350px",
                  flexWrap: "wrap",
                }}
              >
                <img src={javascript} className="skills" alt="javascript" />

                <img src={react} className="skills" alt="react" />

                <img
                  className="skills"
                  src={typescript}
                  alt="typescript"
                  style={{ borderRadius: "50%", padding: "4px" }}
                />

                <img src={html5} className="skills" alt="html5" />

                <img src={css} className="skills" alt="css" />

                <img src={bootstrap} className="skills" alt="bootstrap" />
                <img
                  className="skills"
                  src={excel}
                  alt="excel"
                  style={{ borderRadius: "50%", padding: "4px" }}
                />
                <img src={git} className="skills" alt="git" />
                <img src={github} className="skills" alt="github" />
              </div>
            </div>

            <div className="grid-item-3" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              {" "}
              
              <img
                className="fotocv animate__animated animate__fadeIn animate__slower"
                style={{ animationDelay: "4s" }}
                src={fotoPortafolio}
              />
            </div>
          </div>
          <Link
            to="/about"
            onClick={() => window.scroll(0, 0)}
            style={{ textDecoration: "none", cursor: "unset" }}
          >
            <div
              className="knowMoreAboutMe animate__animated animate__fadeIn animate__slower"
              style={{ animationDelay: "6s" }}
            >
              <b className="knowMoreAboutMeHover">{idioma.inicio.knowMe}</b>
            </div>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Inicio;
