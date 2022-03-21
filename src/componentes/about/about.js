import { Link } from "react-router-dom";

import "./about.scss";
import foto from "../../imgs/AboutMe.jpg";
import react from "../../imgs/react.svg";
import javascript from "../../imgs/javascript.svg";
import css from "../../imgs/css.svg";
import html5 from "../../imgs/html5.svg";
import bootstrap from "../../imgs/bootstrap.svg";
import git from "../../imgs/git.svg";
import github from "../../imgs/github.svg";
import mysql from "../../imgs/mysql.svg";
import php from "../../imgs/php.svg";
import node from "../../imgs/node.svg";
import vue from "../../imgs/vue.png";
import excel from "../../imgs/logo-excel-3.png";
import strapi from "../../imgs/strapi-2.png";
import programador from "../../imgs/Programador.png";

const About = ({mode, idioma}) => {
    var bacti=`animate__animated animate__fadeIn animate__slower grid-container-about about-card align-items-center`
  return (
      <div className="container-fluid wrapper backAbout">
        <div className={`${mode ? ''  : 'dark-theme-about '}row d-flex flex-column justify-content-center align-items-center`}>
          <div className={`animate__animated animate__fadeIn animate__slower grid-container-about about-card align-items-center`}>
            <div className="animate__animated animate__bounceInLeft animate__delay-1s grid-item-about-1">
              <p style={{ fontSize: "20px" }}>
               {idioma.acerca.p1}
                <br />
                {idioma.acerca.p2} <img src={programador} alt="programador" />
              </p>
            </div>
            <div className="animate__animated animate__fadeIn animate__slower animate__delay-2s grid-item-about-2">
              <p>
              {idioma.acerca.p3} 
                {" " + idioma.acerca.p4} 
              </p>
            </div>
            <div className="animate__animated animate__fadeIn animate__slower animate__delay-2s grid-item-about-3">
              <p>
              {idioma.acerca.p5} 
                {" " + idioma.acerca.p6} 
              </p>
            </div>
            <div className="animate__animated animate__bounceInRight animate__delay-1s grid-item-about-4 img-container">
              <img src={foto} alt="foto-personal" />
            </div>
          </div>
          <div className="animate__animated animate__fadeIn animate__slower animate__delay-2s about-card d-flex align-items-center">
            <div className="d-flex add-wrap w-100 justify-content-around">
              <div className="textSkills text-white">
                <b>Skills</b>
              </div>

              <img src={javascript} className="skills " alt="javascript" />
              <img src={react} className="skills " alt="react" />
              <img src={css} className="skills" alt="css" />
              <img src={html5} className="skills" alt="html5" />
              <img src={bootstrap} className="skills" alt="bootstrap" />
              <img className="skills" style={{padding:"4px"}} src={excel} alt="excel" />
              <img src={git} className="skills" alt="git" />
              <img src={github} className="skills" alt="github" />
            </div>
          </div>
          <div className="animate__animated animate__fadeIn animate__slower animate__delay-2s about-card d-flex align-items-center">
            <div>
              <p>
              {idioma.acerca.p7} 
              </p>
              <p>
              {idioma.acerca.p8} 
              </p>
            </div>
          </div>
          {/* <div className="animate__animated animate__fadeIn animate__slower animate__delay-2s about-card d-flex align-items-center">
            <div className="d-flex add-wrap w-100 k justify-content-around">
              <div className="textSkills delLineHeight text-white">
                <b>{idioma.acerca.p9} </b>
              </div>

              <img
                className="skills"
                src={strapi}
                alt="strapi"
                style={{ borderRadius: "50%", padding:"4px" }}
              />
              <img className="skills" style={{padding:"2px"}} src={vue} alt="vue" />
              <img className="skills" src={mysql} alt="mysql" />
              <img className="skills" src={php} alt="php" />
              <img className="skills" src={node} alt="node" />
            </div>
          </div> */}
          <div className="animate__animated animate__fadeIn animate__slower animate__delay-2s about-card d-flex align-items-center">
            <div className="contenedorIntereses">
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
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
