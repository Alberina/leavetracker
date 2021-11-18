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
                                <Navbar.Brand href="#home">Leave Tracker</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                    {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
                                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/profile">Log out</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default Header;