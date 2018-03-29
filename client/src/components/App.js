import React, { Component } from 'react';
import { Route, Switch }  from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUser } from "../actions";
import Header from './Header';
import Landing from './Landing';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }
  

  render() {
    return (
      <div className='container' >
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </div>
    );
  }
};

export default connect(null, { fetchUser })(App);

