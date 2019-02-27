import React, { Component } from "react";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import ClickyNavBar from "./Components/ClickyNavBar";
import Footer from "./Components/Footer";
import Field from "./Components/Field";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ClickyNavBar />
        </header>
        <Jumbotron fluid>
          <Container>
            <h1>The Good Place clicky game!</h1>
            <h3>
              Click on an image to earn points, but don't click on any more than
              once!
            </h3>
          </Container>
        </Jumbotron>
        <Field />
        <Footer>
          <p>Clicky Game :)</p>
        </Footer>
      </div>
    );
  }
}

export default App;
