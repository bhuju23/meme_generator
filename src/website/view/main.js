import "../../static/css/main.css";

import React, { Component } from "react";
import { Container, Button } from "reactstrap";

class Main extends Component {
  handleClick(route) {
    this.props.history.push(route);
  }
  render() {
    return (
      <Container>
        <Button
          className="button1"
          color="secondary"
          size="lg"
          block
          onClick={this.handleClick.bind(this, "/meme")} //after onClick request is sent to eventlistener so we have to bind this
        >
          Meme Generator
        </Button>

        <Button
          className="button2"
          color="secondary"
          size="lg"
          block
          onClick={this.handleClick.bind(this, "/quotes")}
        >
          Quote Generator
        </Button>
      </Container>
    );
  }
}

export default Main;
