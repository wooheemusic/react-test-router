import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Page21 from './Page21';
import slide, { config } from '../hoc/slide';

export default class Section2 extends Component {
  render() {
    return (
      <div>
        <Route
          path="/section2"
          exact
          component={slide(() => <div>section 2</div>, config.slow)}
        />
        <Route path="/section2/page21" component={slide(Page21, config.slow)} />
      </div>
    );
  }
}
