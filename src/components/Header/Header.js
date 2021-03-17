import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mealLogo from '../../images/mealIcon.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="/home">
            <img style={{width:'50px'}}  alt="" src={mealLogo} />
                Meal-Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="dark" className="mr-auto">
                    <Link style={{color:'white'}} to="/home">Home</Link>
                    <Link style={{color:'white'}} to="/contact">Contact</Link>
                    <Link style={{color:'white'}} to="/about">About us</Link>
                    <Link style={{color:'white'}} to="/login">Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;