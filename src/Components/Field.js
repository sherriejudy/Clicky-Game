import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Tile from "./Tile";

import p1 from "../Assets/Images/1.jpg";
import p2 from "../Assets/Images/2.jpg";
import p3 from "../Assets/Images/3.jpg";
import p4 from "../Assets/Images/4.jpg";
import p5 from "../Assets/Images/5.jpg";
import p6 from "../Assets/Images/6.jpg";
import p7 from "../Assets/Images/7.jpg";
import p8 from "../Assets/Images/8.jpg";
import p9 from "../Assets/Images/9.jpg";
import p10 from "../Assets/Images/10.jpg";
import p11 from "../Assets/Images/11.jpg";
import p12 from "../Assets/Images/12.jpg";

class Field extends Component {
  constructor() {
    super();
    // Don't call this.setState() here!
    this.state = {
      tiles: this.shuffle([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12]),
      guessed: [],
      title: ""
    };
  }

  shuffle = list => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  takeAGuess = image => {
    if (this.state.guessed.includes(image)) {
      // Already been guessed, just shuffle and clear guess list
      this.setState({
        tiles: this.shuffle(this.state.tiles),
        guessed: [],
        title: "Incorrect Guess"
      });
      return;
    }
    // Has not been guessed
    var newGuessedList = this.state.guessed;
    newGuessedList.push(image);
    this.setState({
      tiles: this.shuffle(this.state.tiles),
      guessed: newGuessedList,
      title: "Correct Guess"
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Tile
            image={this.state.tiles[0]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[0]);
            }}
          />
          <Tile
            image={this.state.tiles[1]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[1]);
            }}
          />
          <Tile
            image={this.state.tiles[2]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[2]);
            }}
          />
          <Tile
            image={this.state.tiles[3]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[3]);
            }}
          />
        </Row>
        <Row>
          <Tile
            image={this.state.tiles[4]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[4]);
            }}
          />
          <Tile
            image={this.state.tiles[5]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[5]);
            }}
          />
          <Tile
            image={this.state.tiles[6]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[6]);
            }}
          />
          <Tile
            image={this.state.tiles[7]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[7]);
            }}
          />
        </Row>
        <Row>
          <Tile
            image={this.state.tiles[8]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[8]);
            }}
          />
          <Tile
            image={this.state.tiles[9]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[9]);
            }}
          />
          <Tile
            image={this.state.tiles[10]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[10]);
            }}
          />
          <Tile
            image={this.state.tiles[11]}
            onClick={() => {
              this.takeAGuess(this.state.tiles[11]);
            }}
          />
        </Row>
      </div>
    );
  }
}

export default Field;

// list of objects, randomly take positin out of list to populate tiles
