import "../../static/css/meme.css";

import React, { Component } from "react";
import { Button } from "reactstrap";

class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      index: -1, //index is used to select object from the array and is set to -1 because if set to 0 it will have value
    };
  }

  handleClick() {
    this.setState({
      index:
        this.state.memes.length === 0
          ? -1
          : Math.floor(Math.random() * this.state.memes.length), // to generate a random number in refrence to the array length
    });
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(results => {
        return results.json();
      })
      .then(response => {
        console.log("check", response);

        this.setState({
          memes: response.data.memes,
          index:
            response.data.memes.length === 0
              ? -1
              : Math.floor(Math.random() * response.data.memes.length), //checking if the fecthed array is empty or not
        });
        console.log("state", this.state.memes);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Meme</h2>
        <div>
          {this.state.index === -1 ? (
            "notfound"
          ) : (
            <div className="img-container">
              <img
                src={this.state.memes[this.state.index].url}
                alt="loading"
                height="50%"
                width="50%"
              />
            </div>
          )}
          <Button onClick={this.handleClick.bind(this)} className="button">
            generate
          </Button>
        </div>
      </div>
    );
  }
}

export default Meme;
