import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route , Link } from 'react-router-dom'
import MediaQuery from 'react-responsive';

import Index from './index';
import MobIndex from './mob_index';

export default class Root extends React.Component{

  render(){
    return (

      <Router>
        <div>
          <MediaQuery query='(min-device-width: 1224px)'>
              <Index/>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 1224px)'>
              <MobIndex/>
          </MediaQuery>


        </div>
      </Router>
    )
  }

}
ReactDOM.render(
    <Root/>,
    document.getElementById('container')
);
