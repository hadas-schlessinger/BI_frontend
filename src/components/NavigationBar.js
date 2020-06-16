import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #ffff; }
  a, .navbar-nav, .navbar-light .nav-link {
    font-size: 1.2em;
    color: #7C3668;
    &:hover { color: #BDCCFF; }
  }
  .navbar-brand {
    font-size: 2em;
    color: #380438;
    &:hover { color: #BDCCFF; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
 const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/airports">Airports</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/popularity">Popularity</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/routes">Routes</Nav.Link></Nav.Item>
        </Nav>
        <Navbar.Brand>Airport Master</Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar