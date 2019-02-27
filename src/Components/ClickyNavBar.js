import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class ClickyNavBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Click an image to begin</Nav.Link>
          <Nav.Link href="#pricing">Score: | Top Score: </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default ClickyNavBar;
