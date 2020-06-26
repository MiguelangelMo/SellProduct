import React from 'react';
import Header from './Header';
import Product from './Product'
import ProductNew from './ProductNew';
import ProductUpdate from './ProductUpdate';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux';
import store from '../store'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Product} />
            <Route exact path="/products/new" component={ProductNew} />
            <Route exact path="/products/update/:id" component={ProductUpdate} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
