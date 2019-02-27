import React, { Component } from "react";
import Col from "react-bootstrap/Col";

class Tile extends Component {
  render() {
    return (
      <Col>
        <img onClick={this.props.onClick} src={this.props.image} alt="tile" />
      </Col>
    );
  }
}

export default Tile;
