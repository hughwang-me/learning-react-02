import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route , Link} from 'react-router-dom'

import Index from './index';

export default class Root extends React.Component{

  render(){
    return (

      <Router>
        <div>
          <Route exact path="/" component={Index}/>
          <Route path="/about" component={Index}/>
          <Route path="/topics" component={Index}/>
        </div>
      </Router>

    )
  }

}
ReactDOM.render(
    <Root/>,
    document.getElementById('container')
);
