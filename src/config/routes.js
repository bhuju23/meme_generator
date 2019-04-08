import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Meme from "../website/view/meme";
import Quotes from "../website/view/quotes";
import Main from "../website/view/main";

export const meme_generator = "meme_generator";

class MainRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={`/${meme_generator}/meme`} component={Meme} />
          <Route exact path={`/${meme_generator}/quotes`} component={Quotes} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRoute;
