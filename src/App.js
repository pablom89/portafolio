import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import About from './componentes/about/about';
import Inicio from './componentes/inicio/Inicio';
import MyWorks from './componentes/works/works';
import Contact from './componentes/contact/contact';
import './App.scss';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <>


      <Router>

        {/* <div className='container-fluid'>
          <div className='row'> */}

            <Navbar bg="info" expand="md">
              <Container>
               <Navbar.Brand as={NavLink} to='/' className='brand'>CM·D3V</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='colla'>
                  <Nav className='ms-auto' >
                    <Nav.Link as={NavLink} className='text-white links mx-3' exact to='/'>Inicio</Nav.Link>
                    <Nav.Link as={NavLink} className='text-white links mx-3' exact to='/about'>About</Nav.Link>
                    <Nav.Link as={NavLink} className='text-white links mx-3' exact to='/works'>My Works</Nav.Link>
                    <Nav.Link as={NavLink} className='text-white links mx-3' exact to='/contact'>Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* <nav className='col d-flex justify-content-end'>
            <ul className='d-flex justify-content-around menu mt-3'>
                <li>
                    <NavLink  exact to='/'>
                        Inicio
                        <div className='dot'></div>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/about'>
                        About me
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/works'>
                      Works
                    </NavLink>
                </li>
                <li>
                    <NavLink exact  to='/knowledge'>
                      Knowledge
                    </NavLink>
                </li>
                <li>
                    <NavLink exact  to='/contact'>
                      Contact
                    </NavLink>
                </li>
            </ul>
          </nav> */}
         {/*  </div>
        </div> */}

        <Switch>

          <Route path='/' exact component={Inicio} />
          <Route path='/about' component={About} />
          <Route path='/works' component={MyWorks} />
          <Route path='/contact' component={Contact} />

          <Redirect to='/' />
        </Switch>


      </Router>

    </>
  );
}

export default App;
