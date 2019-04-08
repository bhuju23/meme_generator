import "../../static/css/quotes.css";

import React, { Component } from "react";
import { Button } from "reactstrap";
import Quote from "inspirational-quotes";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: Quote.getRandomQuote(),
    };
  }

  handleClick() {
    console.log("quotecheck", Quote.getRandomQuote());
    this.setState({
      quotes: Quote.getRandomQuote(),
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Quotes</h2>
        <div className="quotes">{this.state.quotes}</div>
        <Button onClick={this.handleClick.bind(this)} className="button">
          Generate
        </Button>
      </div>
    );
  }
}

export default Quotes;
