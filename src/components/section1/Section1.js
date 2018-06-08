import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page11 from './Page11';
import Page12 from './Page12';
import NotFound from '../NotFound';
import slide, { config } from '../hoc/slide';

export default class Section1 extends Component {
  render() {
    return (
      <div>
        <Route
          path="/section1"
          exact
          component={slide(() => <div>section 1</div>)}
        />
        <Switch>
          {/* {slide(<Route path="/section1/page11" component={Page11} />)}
        {slide(<Route path="/section1/page12" component={slide(Page12)} />)}
        {slide(<Route component={slide(NotFound)} />)} */}
          <Route path="/section1/page11" component={Page11} />
          <Route path="/section1/page12" component={slide(Page12)} />
          <Route component={slide(NotFound)} />
        </Switch>
      </div>
    );
  }
}
