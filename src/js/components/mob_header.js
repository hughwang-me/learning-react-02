import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MobHeader extends React.Component {

  constructor(){
    super();
    this.state = {
      current: 'hot'
    };
  }

  render(){
    return(
      <div id='mobHeader'>
        <Row>
          <Col span={2}></Col>
          <Col span={18}>
            <a  href="/" className='logo'>
              <img src='./src/images/logo.png' alt="logo"/>
              <span>Hugh mob 1 新闻网</span>
            </a>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }

}
