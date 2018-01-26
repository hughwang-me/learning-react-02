import React from 'react';
import ReactDOM from 'react-dom';

var headerStyle = require('../../css/header.css');

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

class Header extends React.Component {

  render(){
    return(
      <div >
          <h1 >Header</h1>
          <DatePicker/>
      </div>
    )
  }

}

export default Header;
