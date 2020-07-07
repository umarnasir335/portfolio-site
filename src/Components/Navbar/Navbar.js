import React from 'react'
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.navbody{
  background-color: rgb(34,56,24);
  top:0;
  right: 0;
}

.NavLinks{
  padding: 0px 5px 0px 5px;

}
`;

export default class NavbarMenu extends React.Component{


    render(){

        return(
          <Styles>
          <div className="navbody">
                	<Navbar bg="light" variant="light" className="navbody">
					<Navbar.Brand href="#home">Umar's Repositories</Navbar.Brand>
					<Nav className="NavLinks">
						<Nav.Link  href="#home">Home </Nav.Link>
						<Nav.Link href="#resume">Resume</Nav.Link>
						<Nav.Link href="#links">Links</Nav.Link>
					</Nav>
          
					
				</Navbar>
            </div>
            </Styles>

        )
    }
}

