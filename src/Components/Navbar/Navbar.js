import React from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import styled from 'styled-components'


export default class NavbarMenu extends React.Component{


    render(){
        return(
            <div className="NavbarBody">
                <Navbar bg="dark" expand="md">
                <Navbar.Brand href="#home">Umar Nasir</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Resume</Nav.Link>
      <NavDropdown title="Links" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Github</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Contact Me</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>    
            </div>
        )
    }
}

