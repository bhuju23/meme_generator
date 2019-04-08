import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Meme from "../website/view/meme";
import Quotes from "../website/view/quotes";
import Main from "../website/view/main";

class MainRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/meme" component={Meme} />
          <Route exact path="/quotes" component={Quotes} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRoute;
