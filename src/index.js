import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "redux-zero/react";
import store from "./store";
import './index.css';
import Singup from './Singup';
import Singin from './Singin';
import Board from './Board';
import registerServiceWorker from './registerServiceWorker';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';
import {readBoard} from './actions'

class App extends Component {
  render() {
    readBoard();
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            {/* <Route exact path="/singin" render={() => <Singin />} /> */}
            <Route exact path="/" component={Singin} />
            <Route exact path="/singin" component={Singin} />
            <Route exact path="/singup" component={Singup} />
            <Route exact path="/board" component={Board} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
