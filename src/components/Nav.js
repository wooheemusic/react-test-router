import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink as Lk } from 'react-router-dom';

const L = props => (
  <div>
    <Lk {...props} />
  </div>
);

export default class Nav extends Component {
  render() {
    return (
      // <Router>
      <div>
        NAV
        <L to="">empty</L>
        <L to="/">/</L>
        <hr />
        <L to="/section1">/section1</L>
        {/* <L to="/section1/">/section1/</L>
        <L to="/section2/">/section2/</L> */}
        <L to="/section1/page11">/section1/page11</L>
        <L to="/section1/page12">/section1/page12</L>
        <L to="/section1/page13">/section1/page13</L>
        <hr />
        <L to="/section2">/section2</L>
        <L to="/section2/page21">/section2/page21</L>
        <hr />
        <L to="/section1/page11?name=woohee&age=111">
          /section1/page11?name=woohee&age=111
        </L>
        <L to="/section1/page11#xxxx">/section1/page11#xxxx</L>
        <L to="/section1/page11/qwdqwdqw">/section1/page11/qwdqwdqw</L>
        <hr />
      </div>
      // {/* </Router> */}
    );
  }
}
