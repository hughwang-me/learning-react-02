import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route , Link} from 'react-router-dom'



import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

import BasicExample from './test.js';

export default class Root extends React.Component{

  render(){
    return (

      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Header}/>
          <Route path="/about" component={Footer}/>
          <Route path="/topics" component={Body}/>
        </div>
      </Router>

    )
  }

}
// const BasicExample = () => (
//   <Router>
//     <div>
//
//       <Route  path="/" component={Header}/>
//     </div>
//   </Router>
// )
// export default BasicExample

ReactDOM.render(
    <Root/>,
    document.getElementById('container')
);
