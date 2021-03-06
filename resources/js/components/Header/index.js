import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
//   import Home from './Home';
//   import AboutUs from './AboutUs';
//   import ContactUs from './ContactUs';

class Header extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Routes>
                                <Route exact path="/">
                                    {/* <Home /> */}
                                    sdfdsf
                                </Route>
                                <Route path="/about-us">
                                    {/* <AboutUs /> */}
                                    sdfds
                                </Route>
                                <Route path="/contact-us">
                                    {/* <ContactUs /> */}
                                    sdfd
                                </Route>
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default Header;