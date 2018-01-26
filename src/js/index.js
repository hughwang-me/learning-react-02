import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route , hashHistory} from 'react-router-dom'

import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

export default class Index extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route component={Body} path="/"  >
        </Route>
        <Route path="1" component={Header} ></Route>
        <Route path="2" component={Footer} ></Route>

      </Router>
    )
  }

}
