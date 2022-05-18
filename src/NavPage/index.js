import React from "react";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import images from '../images/logo.png'

import './style.css';

const NavPage = () => {

    return(
        <Navbar expand="lg">
        <Container >
        <img
        className="imgLogo"
        src={images}
        width={150}
        height={50}
        />  
       <a className="contact" href="https://api.whatsapp.com/send?phone=5592992700974" target="_blank" style={{ color: "#000" }}>Contato</a>
        </Container>
      </Navbar>


    );
}

export default NavPage;