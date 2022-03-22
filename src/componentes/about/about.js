import { Link } from "react-router-dom";

import "./MediaQueriesAbout.scss";
import { Wrapper, GridContainerAbout, Intereses } from "./aboutStyles";
import foto from "../../imgs/AboutMe.jpg";
import react from "../../imgs/react.svg";
import javascript from "../../imgs/javascript.svg";
import css from "../../imgs/css.svg";
import html5 from "../../imgs/html5.svg";
import bootstrap from "../../imgs/bootstrap.svg";
import git from "../../imgs/git.svg";
import github from "../../imgs/github.svg";
import excel from "../../imgs/logo-excel-3.png";
import programador from "../../imgs/Programador.png";

const About = ({ mode, idioma }) => {
  const animate = `animate__animated animate__fadeIn animate__slower`;
  const delay = `${animate} animate__delay-2s`;
  const flex = `${delay} d-flex`;

  return (
    <Wrapper className="container-fluid">
      <div
        className={`${
          mode ? "" : "dark-theme-about "
        } row d-flex flex-column justify-content-center align-items-center`}
      >
        <GridContainerAbout className={animate + " about-card"}>
          <div className="animate__animated animate__bounceInLeft animate__delay-1s grid-item-about-1">
            <p style={{ fontSize: "20px" }}>
              {idioma.acerca.p1}
              <br />
              {idioma.acerca.p2} <img src={programador} alt="programador" />
            </p>
          </div>
          <div className={`${delay} grid-item-about-2`}>
            <p>
              {idioma.acerca.p3}
              <br />
              {idioma.acerca.p4}
            </p>
          </div>
          <div className={`${delay} grid-item-about-3`}>
            <p>{idioma.acerca.p5 + " " + idioma.acerca.p6}</p>
          </div>
          <div className="animate__animated animate__bounceInRight animate__delay-1s grid-item-about-4 img-container">
            <img src={foto} alt="foto-personal" />
          </div>
        </GridContainerAbout>
        <GridContainerAbout className={flex + " about-card"}>
          <div className="d-flex add-wrap w-100 justify-content-around">
            <div className="textSkills text-white">
              <b>Skills</b>
            </div>

            <img src={javascript} className="skills " alt="javascript" />
            <img src={react} className="skills " alt="react" />
            <img src={css} className="skills" alt="css" />
            <img src={html5} className="skills" alt="html5" />
            <img src={bootstrap} className="skills" alt="bootstrap" />
            <img
              className="skills"
              style={{ padding: "4px" }}
              src={excel}
              alt="excel"
            />
            <img src={git} className="skills" alt="git" />
            <img src={github} className="skills" alt="github" />
          </div>
        </GridContainerAbout>
        <GridContainerAbout className={flex + " about-card"}>
          <div>
            <p>{idioma.acerca.p7}</p>
            <p>{idioma.acerca.p8}</p>
          </div>
        </GridContainerAbout>
        <GridContainerAbout className={flex + " about-card last-about"}>
          <Intereses>
            <h3 className="textSkills  text-white text-center">
              {idioma.acerca.p10}
            </h3>
            <ul className="intereses">
              <li>
                <b>English</b>, {idioma.acerca.li1}
              </li>
              <li>
                <b>Fitness</b>, {idioma.acerca.li2}
              </li>
              <li>
                <b>{idioma.acerca.li3T}</b>, {idioma.acerca.li3}
              </li>
            </ul>
            <p className="textSkills text-white">
              {idioma.acerca.p11}
              <Link
                to="/works"
                onClick={() => window.scroll(0, 0)}
                className="text-white text-decoration-none"
              >
                <b className="ultimosTrabajosAbout">{idioma.acerca.final}</b>
              </Link>
            </p>
          </Intereses>
        </GridContainerAbout>
      </div>
    </Wrapper>
  );
};

export default About;
