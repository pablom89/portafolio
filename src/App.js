import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import About from "./componentes/about/about";
import Inicio from "./componentes/inicio/Inicio";
import MyWorks from "./componentes/works/works";
import Contact from "./componentes/contact/contact";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import sun from "./imgs/sun.jpeg";
import { idiomas } from "./componentes/info.js";

function App() {
  const [mode, setMode] = useState(true);
  const [idioma, setIdioma] = useState(idiomas.en);
  const [actual, setActual] = useState(true);

  return (
    <>
      <Router>
        <Navbar
          className={`navbar ${mode ? "" : " dark-theme-nav"}`}
          bg="dark"
          variant="dark"
          expand="md"
          style={{ position: "relative", zIndex: "3" }}
        >
          <Container>
            <Navbar.Brand className="brand">
              <label className="switchBtn">
                <input
                  type="checkbox"
                  onChange={() => {
                    // eslint-disable-next-line no-unused-expressions
                    setActual(!actual);
                    // eslint-disable-next-line no-unused-expressions
                    setIdioma(actual ? idiomas.es : idiomas.en);
                  }}
                />
                <div className="slide round">
                  {actual ? "English" : "Spanish"}
                </div>
              </label>
            </Navbar.Brand>
            <Navbar.Brand className="brand" onClick={() => setMode(!mode)}>
              {mode ? (
                <svg
                  fill="currentColor"
                  width="28"
                  height="28"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <title>Dark Mode</title>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  ></path>
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  width="28"
                  height="28"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <title>Light Mode</title>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="colla">
              <Nav className="ms-auto">
                <Nav.Link
                  as={NavLink}
                  className="text-white links mx-3"
                  exact
                  to="/"
                >
                  {idioma.navBar.inicio}
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  className="text-white links mx-3"
                  exact
                  to="/about"
                >
                  {idioma.navBar.acerca}
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  className="text-white links mx-3"
                  exact
                  to="/works"
                >
                  {idioma.navBar.misTrabajos}
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  className="text-white links mx-3"
                  exact
                  to="/contact"
                >
                  {idioma.navBar.contacto}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route
            path="/"
            exact
            render={() => <Inicio mode={mode} idioma={idioma} />}
          />
          <Route path="/about" render={() => <About mode={mode} idioma={idioma} />} />
          <Route path="/works" render={() => <MyWorks actual={actual}/>} />
          <Route path="/contact" render={() => <Contact actual={actual}/>} />

          <Redirect to="/" />
        </Switch>
      </Router>
      {mode ? (
        <>
          <div className="stars"></div>
          <div className="twinkling"></div>
        </>
      ) : (
        <div>
          <img
            className="animate__animated animate__fadeIn animate__slower"
            style={{
              position: "fixed",
              zIndex: "2",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
            }}
            src={sun}
            alt="sun"
          />
        </div>
      )}
    </>
  );
}

export default App;
