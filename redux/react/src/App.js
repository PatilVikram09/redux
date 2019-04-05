import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import getStore from './store';
import UsersComponent from './components/Users';

const history = createBrowserHistory()

class App extends Component {
  render() {
    const store = getStore();
    return (
      <div>
        <Provider store={store}>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" exact component={UsersComponent} />
                    </Switch>
                </div>
            </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
