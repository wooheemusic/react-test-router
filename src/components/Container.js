import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Section1 from './section1';
import Section2 from './section2';

export default class Container extends Component {
  render() {
    return (
      // <Router>
      <div>
        <Route path="/" exact component={() => <div>container</div>} />
        <Route path="/section1" component={Section1} />
        <Route path="/section2" component={Section2} />
      </div>
      // </Router>
    );
  }
}
