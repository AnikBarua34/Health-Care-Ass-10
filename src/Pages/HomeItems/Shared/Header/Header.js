import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useContextbase from '../../../hooks/useContextBase';
import { BsFillBrightnessAltHighFill  } from "react-icons/bs";


import './Header.css';

const Header = () => {
  const{user,logOut}=useContextbase();
    return (
        <div>
            <Navbar className="navbar" bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="/home#home"><BsFillBrightnessAltHighFill />HealthCare Ltd.</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Our Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#doctors">Our Doctors</Nav.Link>
      <Nav.Link as={Link} to="/freeTreatment">Free Treatments</Nav.Link>
      <Nav.Link as={Link} to="/carrier">Carrier with us</Nav.Link>
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>

{
  user.email? <button onClick={logOut} className="btn btn-dark">Log Out</button>
  :
<Nav.Link className="btn" as={Link}to="/login">Login</Nav.Link>
}
      
      
      {
        user.email? <Navbar.Text>
        {user.displayName}
        
        <Image className="ms-3" style={{width:30}} src={user.photoURL} roundedCircle />
        
      </Navbar.Text>
       
      :
      <Navbar.Text>
        
      </Navbar.Text>
      }
      
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;