import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import { Provider } from "react-redux";
import stickyApp from "./reducers";
import StickyNote from "./components/StickyNote";
import NotFound from "./components/NotFound";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let store = createStore(stickyApp, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={StickyNote} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
