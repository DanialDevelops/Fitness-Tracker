import React from "react";
import { Link, useLocation } from "react-router-dom";
import Auth from "../utils/auth";
import logo from "../assets/logo.png";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';

export default function Header() {
  const loggedIn = Auth.loggedIn();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant="dark"
      bg={loggedIn && !isHomePage ? "dark" : null}
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="brand brand-logged d-flex align-items-center"
        >
          <img
            alt="logo"
            style={{ display: "inline" }}
            src={logo}
            className="logo-icon"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/exercise" eventKey="1">
              Exercise
            </Nav.Link>
            <Nav.Link as={Link} to="/history" eventKey="2">
              History
            </Nav.Link>
            <Nav.Link as={Link} to="/donate" eventKey="3">
              Donate
            </Nav.Link>
            {loggedIn ? (
              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}