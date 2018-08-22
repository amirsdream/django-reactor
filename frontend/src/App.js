import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import StickyNote from "./components/StickyNote";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StickyNote} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
