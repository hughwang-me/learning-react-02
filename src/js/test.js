import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Header from './components/header';



const BasicExample = () => (
  <Router>
    <div>

      <Route  path="/" component={Header}/>
    </div>
  </Router>
)

export default BasicExample
